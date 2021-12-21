import { getSession, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import $ from "jquery";
import axios from "axios";

const ImportBeyond = () => {
  const { data: session } = useSession();
  const [query1, setQuery1] = useState();
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  const doStuff = (e) => {
    e.preventDefault();
    axios
      .post("/api/dnd/import", {
        id: query1,
      })
      .then((response) => {
        if (response.data.error === false) {
          setError(false);
          setData(response.data.data);
        } else {
          setError(true);
          setData(null);
        }
      });
  };

  const saveProfile = () => {
    axios
      .post("/api/dnd/savechar", {
        data: data,
        uid: session.user.data.user._id,
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <ImporterWrapper>
      <h1> Import from DND Beyond </h1>
      <form>
        <input
          className="w-9/12 mt-5"
          type="textbox"
          name="query"
          id="characterquery"
          onChange={(e) => setQuery1(e.target.value)}
          placeholder="Character ID from DNDB"
        />
        <button
          onClick={(e) => doStuff(e)}
          className="submitbtn w-3/12 inline-block bg-red-400"
        >
          Submit
        </button>
      </form>

      {data !== null ? (
        <div className="flex mt-3 flex-row">
          <div
            style={{
              background: "#1E1E27",
            }}
            className="w-full md:w-8/12 p-6 flex flex-col text-white"
          >
            <h5 className="mb-4"> Basic Character Details: </h5>
            <span> Name: {data.name} </span>
            <span> Gender: {data.gender} </span>
            <span> Age: {data.age} </span>
            <span> Base HP: {data.baseHitPoints} </span>
            <span>
              {" "}
              {data.classes.map((classIndex, index) =>
                index != 0
                  ? " / " + classIndex.definition.name + " " + classIndex.level
                  : classIndex.definition.name + " " + classIndex.level
              )}
            </span>
          </div>
          <div className="w-full ml-5 md:w-4/12">
            <span> Is this the right character? </span>
            <button
              onClick={() => saveProfile()}
              className="p-2 mt-4 w-full bg-indigo-400 text-white"
            >
              Yes, import Character
            </button>
            <button className="p-2 mt-4 w-full bg-red-400 text-white">
              No, they again?
            </button>
          </div>
        </div>
      ) : null}
    </ImporterWrapper>
  );
};

const ImporterWrapper = styled.div`
    input[type="textbox"]{
        background: #1E1E27;
        color: white;
        height: 4rem;
        font-size: 1.25rem;
        padding-left: 2em;

        &::after {
            content: "Press Enter to search"
        }
    }

    button.submitbtn {
        height: 4rem;
        color: white;
        font-weight: 600;
        text-transform: uppercase;s
    }
`;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }

  return {
    props: {
      session: await getSession(context),
    },
  };
}

export default ImportBeyond;

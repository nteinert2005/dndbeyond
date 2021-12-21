import styled from "styled-components";
import moment from "moment";
import { PencilIcon } from "@heroicons/react/outline";
import Link from "next/link";

const CharacterBlock = ({ dndcharacters }) => {
  return (
    <CharacterWrapper>
      <h2> My Characters </h2>
      {dndcharacters ? (
        <ul>
          {dndcharacters.length > 0 ? (
            dndcharacters.map((character, key) => (
              <li key={key} className="flex align-center justify-center">
                <div className="w-9/12 flex flex-col float-left">
                  <span className="text-lg"> {character.name} </span>
                  <span className="text-gray-500">
                    {" "}
                    {moment(character.lastUpdated).fromNow()}{" "}
                  </span>
                </div>
                <div className="relative w-3/12 float-right">
                  <Link href={`/characters/${character._id}`}>
                    <PencilIcon className="absolute right-0 w-5 h-5" />
                  </Link>
                </div>
              </li>
            ))
          ) : (
            <div className="card flex flex-col">
              <span className="text-lg text-white">No characters yet.</span>
              <span className="mt-2 ">
                All characters you add from your TTRPGs will show here once you
                create them.
              </span>
              <div>
                <button
                  style={{
                    background: "#D5EF9A",
                  }}
                  className="text-black p-2 w-5/12 mr-2 mt-6 rounded"
                >
                  Add Character
                </button>
                <Link
                  href="/dnd/importbeyond"
                  style={{
                    background: "#AFE7FF",
                    textDecoration: "none",
                  }}
                  className="text-black p-2 w-5/12 mt-6 inline-block text-center rounded"
                >
                  Import from DNDB
                </Link>
              </div>
            </div>
          )}
        </ul>
      ) : null}
    </CharacterWrapper>
  );
};

const CharacterWrapper = styled.div`
  margin-top: 32px;

  ul {
    list-style: none;
    margin-top: 24px;

    li {
      width: 100%;
      float: left;
      background: #1e1e27;
      color: white;
      margin-right: 24px;
      padding: 18px 16px;
      margin-bottom: 12px;
      border-bottom: 2px solid #ffd789;
    }
  }
`;

export default CharacterBlock;

import { useSession, getSession } from "next-auth/react";
import PageHeader from "./components/PageHeader";

const Wallet = () => {
  const { data: session, status } = useSession();

  const transactions = [
    {
      user: "John Smith",
      price: 14,
      item: "Class: Testing Rogue",
      purchaseDate: "12/01/2021",
    },
    {
      user: "Betty Crocker",
      price: 41,
      item: "Book #1",
      purchaseDate: "12/02/2021",
    },
  ];

  return (
    <>
      <PageHeader gameName={"Your Wallet"} />
      <div className="flex mt-4 flex-row">
        <div className="w-7/12 mr-4">
          <h4>Transactions</h4>
          <ul className="mt-4">
            {transactions.map((key, trans) => (
              <li
                key={key}
                className="p-5 mt-3 rounded"
                style={{ background: "#282834" }}
              >
                Purchased {trans.item} from
                <span style={{ color: "white" }}>{" " + trans.user + " "}</span>
                - {trans.purchaseDate}
              </li>
            ))}
            <button className="w-full mt-4 rounded p-3 bg-red-400 text-white">
              See All Transactions
            </button>
          </ul>
        </div>
        <div className="w-5/12 ml-4">
          <h4>Amounts</h4>
        </div>
      </div>
    </>
  );
};

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

export default Wallet;

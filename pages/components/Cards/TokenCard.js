import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import TokenModal from "../Modals/TokenModal";

const TokenCard = ({ tokens }) => {
  const [isOpen, setOpen] = useState(false);
  const { data: session } = useSession();

  const modalClick = () => {
    setOpen(true);
  };

  return (
    <div
      style={{
        background: "#1E1E27",
        padding: "1.5em",
        borderRadius: "10px",
        width: "100%",
        fontSize: "16px",
      }}
      className="flex items-center justify-center tokencard"
    >
      <span className="w-8/12 ml-2 float-left text-xl">
        <span className="text-white">{tokens + " "}</span>
        Tokens
      </span>
      <button onClick={() => modalClick()} className="w-4/12 float-right">
        {" "}
        Add More{" "}
      </button>
      <TokenModal
        onClose={() => setOpen(false)}
        closeModal={() => setOpen(false)}
        show={isOpen}
      >
        Modal
      </TokenModal>
    </div>
  );
};

export default TokenCard;

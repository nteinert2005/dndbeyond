import { useEffect, useState } from "react";
import TokenModal from "./Modals/TokenModal";

const TokenCard = ({tokens}) => {
    const [ isOpen, setOpen ] = useState(false);

    const modalClick = () => {
        setOpen(true);
    }

    return(
        <div style={{
            background: "#1E1E27",
            padding: '.5em .2em',
            borderRadius: '10px',
            width: '40%',
            fontSize: '16px'
        }} className="flex justify-center items-center tokencard float-right">
            {tokens} tokens available 
            <button onClick={() => modalClick()}> Buy Tokens </button>
            <TokenModal 
                onClose={() => setOpen(false)}
                closeModal={() => setOpen(false)}
                show={isOpen}
                >
                    Modal 
                </TokenModal>
        </div>
    )
}

export default TokenCard;
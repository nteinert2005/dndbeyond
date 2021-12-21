import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { XIcon } from "@heroicons/react/outline";

const TokenModal = ({ show, closeModal }) => {
  const tokenAmount = [
    {
      tokens: 10,
      amount: 15,
    },
    {
      tokens: 20,
      amount: 50,
    },
    {
      tokens: 50,
      amount: 80,
    },
    {
      tokens: 50,
      amount: 100,
    },
    {
      tokens: 100,
      amount: 150,
    },
  ];

  return show ? (
    <TokenWrapper>
      <div className="modal-body p-6 flex flex-col">
        <h1> Buy SkyKeys </h1>
        <span className="text-gray-400">
          {" "}
          How many SkyKeys do you want to purchase?{" "}
        </span>

        <ul className="flex mt-4 flex-row flex-wrap">
          {tokenAmount.map((key, item) => (
            <li
              key={key}
              className="p-5 rounded w-full md:w-5/12 m-2 text-lg text-center hover:text-black"
            >
              <span className="float-left"> {item.tokens} tokens </span>
              <span className="float-right"> ${item.amount}.00 </span>
            </li>
          ))}
        </ul>

        <button className="w-8/12 bg-red-600 border-red-600 border-2 text-white p-3">
          Confirm
        </button>

        <XIcon
          className="close-btn h-8 w-8 float-right"
          onClick={() => closeModal()}
        />
      </div>
    </TokenWrapper>
  ) : null;
};

const TokenWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .modal-body {
    width: 50%;
    margin: 0 auto;
    background: #1e1e27;
    min-height: 500px;
    position: relative;
    color: white;

    h1 {
      font-size: 30px;
    }

    .close-btn {
      position: absolute;
      top: 20px;
      right: 20px;
    }

    ul {
      li {
        background: #23232d;
        width: 46%;

        &:hover {
          background: white;
        }
      }
    }

    button {
      border: none;
      margin: 0 auto;
      margin-top: 3em;
      padding: 1em;
    }
  }
`;

export default TokenModal;

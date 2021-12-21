import { getSession } from "next-auth/react";
import styled from "styled-components";

import { PencilIcon } from "@heroicons/react/outline";

const CharacterBlock = ({ dndcharacters }) => {
  return (
    <CharacterWrapper>
      <h2> My Characters </h2>
      {dndcharacters.length > 0 ? (
        <ul>
          {dndcharacters.map((character) => (
            <li className="flex">
              <span className="w-10/12">{character.name}</span>
              <a className="w-2/12" href={`/characters/${character._id}`}>
                <PencilIcon className="w-5 h-5" />
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-5 card">
          <h1> No characters yet </h1>
          <span className="text-white">
            {" "}
            You can easily <a href="#">import your characters</a> or{" "}
            <a href="#">create a new one here.</a>
          </span>
        </div>
      )}
    </CharacterWrapper>
  );
};

const CharacterWrapper = styled.div`
  margin-top: 32px;

  ul {
    list-style: none;
    margin-top: 24px;

    li {
      width: 40%;
      float: left;
      background: #1e1e27;
      color: white;
      margin-right: 24px;
      padding: 18px 16px;
      margin-bottom: 24px;
      border-left: 4px solid #ffd789;
      border-radius: 10px;
    }
  }
`;

export default CharacterBlock;

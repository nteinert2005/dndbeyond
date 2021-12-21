import styled from "styled-components";
import {
  UserIcon,
  LogoutIcon,
  SearchIcon,
  CreditCardIcon,
} from "@heroicons/react/outline";

import { signOut } from "next-auth/react";
import Link from "next/link";
import SearchModal from "./Modals/SearchModal";
import { useState } from "react";
import $ from "jquery";

const setShow = () => {
  $("#searchBar").show();
};

const Sidebar = ({ test }) => {
  const [searchShow, setSearchShow] = useState(false);

  return (
    <>
      <div
        style={{
          background: "#1E1E27",
          width: "64px",
          marginRight: "72px",
          position: "fixed",
          left: "0",
        }}
        className="sidebar float-left h-screen items-center flex flex-col"
      >
        <GameIcon
          onClick={() => setSearchShow(true)}
          action="search"
          icon={<SearchIcon className="h-5 w-5" />}
        />
        <GameIcon
          title="Dashboard"
          href="/dashboard"
          icon={<UserIcon className="h-5 w-5" />}
        />
        <Divider />
        <GameIcon title="DND" href="/dnd" newgame={true} />
        <GameIcon title="City of Mist" href="/cityofmist" newgame={true} />
        <GameIcon title="Vikings" href="/vikings" newgame={true} />
        <Divider />
        <GameIcon
          title="Wallet"
          href="/wallet"
          icon={<CreditCardIcon className="h-5 w-5" />}
        />
        <GameIcon
          action="signout"
          icon={<LogoutIcon className="ml-1 h-5 w-5" />}
        />
      </div>

      <SearchModal />
    </>
  );
};

const Divider = styled.div`
  height: 2px;
  margin: 15px 0;
  background: white;
  width: 50%;
`;

const GameIcon = ({ icon, action, title, href, newgame }) =>
  action ? (
    action === "signout" ? (
      <GameIconWrapper onClick={() => signOut()}>
        {newgame && <Notify> New </Notify>}
        {icon}
      </GameIconWrapper>
    ) : (
      <GameIconWrapper onClick={() => setShow(true)}>
        {newgame && <Notify> New </Notify>}
        {icon}
      </GameIconWrapper>
    )
  ) : (
    <Link href={href}>
      <GameIconWrapper>
        {newgame && <Notify> New </Notify>}
        {icon}
        <span className="tooltip"> {title} </span>
      </GameIconWrapper>
    </Link>
  );

const Notify = styled.div`
  position: absolute;
  top: -5px;
  font-size: 9px;
  text-transform: uppercase;
  border-radius: 4px;
  right: -5px;
  background: #ffd789;
  color: black;
  padding: 3px;
`;

const GameIconWrapper = styled.div`
  width: 40px;
  background: none;
  position: relative;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  border-radius: 8px;
  color: #6d6a80;
  z-index: 400;

  path,
  circle,
  rect,
  polygon {
    stroke: white;
  }

  .tooltip {
    display: none;
    position: absolute;
    left: 52px;
    width: 110px;
    padding: 10px;
    background: #ffd789;
  }

  &:hover {
    background: #ffd789;
    color: black !important;

    path,
    circle,
    rect,
    polygon {
      stroke: black;
    }

    .tooltip {
      display: block;
    }
  }
`;

export default Sidebar;

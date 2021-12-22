import styled from "styled-components";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const LeftNavBar = [
  {
    link: "/aboutus",
    name: "About Us",
    submenu: null,
  },
  {
    link: "/register",
    name: "Get Started",
    submenu: null,
  },
];

const RightNavBar = [
  {
    link: "#",
    name: "Games",
    submenu: [
      {
        name: "DND",
        link: "/dnd",
      },
      {
        name: "City of Mist",
        link: "/cityofmist",
      },
    ],
  },
  {
    link: "/login",
    name: "Login",
    submenu: null,
  },
  {
    link: "/publishers",
    name: "Publishers",
    submenu: null,
  },
];

const HomeNav = () => {
  const [dropdownTest, setDropdown] = useState(false);
  const { data: session, status } = useSession();

  return (
    <div style={{ background: "#14141a" }}>
      <NavbarWrapper
        style={{ maxWidth: "1404px", width: "90%", margin: "0 auto" }}
        className="flex px-8 justify-center items-center"
      >
        <div
          style={{ height: "60px", marginTop: "0px" }}
          className="flex items-center space-x-3"
        >
          {LeftNavBar.map((item) =>
            item.display !== false ? (
              <a href={item.link} className="block">
                {item.name}{" "}
                {item.submenu !== null ? (
                  <ChevronDownIcon className="h-3 w-3" />
                ) : null}
              </a>
            ) : null
          )}
        </div>
        <Link as="/" href="/test">
          <h1 className="text-white text-2xl font-bold flex items-center">
            <img
              src="./favicon.ico"
              style={{ width: "20px", height: "25px", marginRight: "5px" }}
            />
            Epic Table
          </h1>
        </Link>
        <div
          style={{ height: "60px", marginTop: "0px" }}
          className="flex items-center space-x-3"
        >
          {RightNavBar.map((item, key) =>
            session && item.name === "Login" ? (
              <Link href="/dashboard"> Dashboard </Link>
            ) : item.display !== false || item.name !== "games" ? (
              <a
                onClick={() => {
                  if (dropdownTest === key) {
                    setDropdown(false);
                  } else {
                    setDropdown(key);
                  }
                }}
                key={key}
                style={{ position: "relative" }}
                href={item.link}
                className="block"
              >
                {item.name}{" "}
                {item.submenu !== null ? (
                  <>
                    <ChevronDownIcon className="h-3 w-3" />
                    <ul
                      className={`dropdown ${
                        dropdownTest === key ? "open" : ""
                      }`}
                    >
                      {item.submenu.length != "" &&
                        item.submenu.map((subItem, key) => (
                          <li key={key}>
                            <Link href={subItem.link}>{subItem.name}</Link>
                          </li>
                        ))}
                    </ul>
                  </>
                ) : null}
              </a>
            ) : null
          )}
        </div>
      </NavbarWrapper>
    </div>
  );
};

const NavbarWrapper = styled.nav`
  background: #14141a;

  a {
    font-weight: 800;
    text-decoration: none;
    color: white;
    padding: 0 12px;
    display: flex;
    align-items: center;

    svg {
      margin-left: 5px;
    }
  }

  div:first-child {
    max-width: 50%;
    padding-right: 50px;
  }

  div:last-child {
    max-width: 50%;
    padding-left: 50px;
  }
`;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session: await getSession(context),
    },
  };
}

export default HomeNav;

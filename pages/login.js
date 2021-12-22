import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const doLogin = (e) => {
    e.preventDefault();
    signIn("username-login", {
      username: username,
      password: password,
      callbackUrl: `${window.location.origin}/dashboard`,
    });
  };

  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundImage:
          "url('https://pbs.twimg.com/media/EazSuMDWAAkfi3N.jpg')",
      }}
      className="bg-black h-screen items-center justify-center flex flex-col text-white"
    >
      <div
        className="h-full w-full flex items-center justify-center"
        style={{ background: "rgba(0,0,0,0.9)" }}
      >
        <form
          style={{ maxWidth: "350px" }}
          className="flex flex-col w-full px-4 py-8 rounded"
        >
          <h1 className="text-3xl mb-4 font-bold uppercase inline-block text-center">
            Epic Table
          </h1>
          <label> Username: </label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="rounded text-black p-2 mb-3"
            type="textbox"
            name="username"
          />
          <label> Password: </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="rounded text-black p-2 mb-3"
            type="password"
            name="password"
          />
          <button
            className="w-full bg-themegold p-2 mt-4 text-black"
            onClick={(e) => doLogin(e)}
          >
            LOGIN
          </button>
          <span className="mt-4">
            Need an account? <Link href="/register">Register </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

Login.getInitialProps = async (ctx) => {
  return {};
};

export default Login;

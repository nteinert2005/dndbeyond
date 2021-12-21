import { signIn } from "next-auth/react";
import { useState } from "react";

export default function Login() {
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
    <div className="bg-black h-screen items-center justify-center flex flex-col text-white">
      <form
        style={{ maxWidth: "350px" }}
        className="bg-gray-700 flex flex-col w-full px-4 py-8 rounded"
      >
        <h1 className="text-3xl mb-4 font-bold uppercase inline-block text-center">
          {" "}
          SkyKey{" "}
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
          className="w-full p-2 mt-4 text-white"
          onClick={(e) => doLogin(e)}
        >
          Login
        </button>
      </form>
    </div>
  );
}

import axios from "axios";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [fullname, setFullName] = useState();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const doLogin = (e) => {
    e.preventDefault();
    axios
      .post(`/api/createuser`, {
        username: username,
        password: password,
        fullname: fullname,
        email: email,
      })
      .then((response) => {
        if (response.data.error !== null) {
          setError(response.data.message);
          setSuccess(false);
        } else {
          setError(null);
          setSuccess(true);
          console.log(response.data);
        }
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
        <span className="text-center p-2"> Register for an account </span>
        {error !== null ? (
          <span className="bg-red-400 p-2 my-2 text-white text-center">
            {error}
          </span>
        ) : (
          ""
        )}
        {success ? (
          <span className="bg-green-400 p-2 my-2 text-white text-center">
            You have created your account!{" "}
            <Link href="/login">Login here. </Link>
          </span>
        ) : (
          ""
        )}
        <label> Full Name: </label>
        <input
          onChange={(e) => setFullName(e.target.value)}
          className="rounded text-black p-2 mb-3"
          type="textbox"
          name="fullname"
        />
        <label> Email Address: </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="rounded text-black p-2 mb-3"
          type="textbox"
          name="emailAddress"
        />
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
          className="w-full bg-indigo-300 p-2 mt-4 text-white"
          onClick={(e) => doLogin(e)}
        >
          Register
        </button>
      </form>
    </div>
  );
}

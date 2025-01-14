// React
import { useState } from "react";

// UI components
import { Link, Container } from "../components";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, confirmPassword);
  };

  return (
    <Container>
      <form className=" max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4 w-full">
          <h1 className="text-center text-2xl font-bold mb-6">
            Create an account
          </h1>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            autoComplete="username"
            required
            className="mt-1 p-2.5 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="eg: john_doe"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        {/* Create Password */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Create Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="current-password"
            required
            className="mt-1 p-2.5 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* Confirm Password  */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="current-password"
            required
            className="mt-1 p-2.5 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {/* Actions  */}
        <button
          type="submit"
          className="w-full p-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign Up
        </button>

        <div className="mt-4 text-center">
          <div className="text-sm">
            Already have an account?{" "}
            <Link
              href="/signup"
              className="underline font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign In
            </Link>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default SignUp;

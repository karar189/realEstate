import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    try {
      await onLogin({ username, password });
      navigate("/dashboard");
    } catch (e) {
      setError("Login failed: " + e.message);
      alert("login issue");
      console.log(error);
    }
  };

  return (
    <div class="flex flex-wrap mt-20 w-full content-center justify-center">
      <div class="flex shadow-md">
        <div class="flex flex-wrap content-center justify-center rounded-l-3xl bg-white w-[24rem] h-[32rem]">
          <div class="w-72">
            <h1 class="text-xl font-semibold">Welcome back</h1>
            <small class="text-gray-400">
              Welcome back! Please enter your details
            </small>

            <form class="mt-4" onSubmit={handleSubmit}>
              <div class="mb-3">
                <label class="mb-2 block text-xs font-semibold">Email</label>
                <input
                  type="email"
                  value={username}
                  placeholder="Enter your email"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  class="block w-full rounded-md border border-gray-300 focus:border-[#073a55] focus:outline-none focus:ring-1 focus:ring-[#073a55] py-1 px-1.5 text-gray-500"
                />
              </div>

              <div class="mb-3">
                <label class="mb-2 block text-xs font-semibold">Password</label>
                <input
                  type="password"
                  placeholder="*****"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  class="block w-full rounded-md border border-gray-300 focus:border-[#073a55] focus:outline-none focus:ring-1 focus:ring-[#073a55] py-1 px-1.5 text-gray-500"
                />
              </div>

              <div class="mb-3 flex flex-wrap content-center">
                <input
                  id="remember"
                  type="checkbox"
                  class="mr-1 checked:bg-[#073a55]"
                />{" "}
                <label for="remember" class="mr-auto text-xs font-semibold">
                  Remember for 30 days
                </label>
                <a href="#" class="text-xs font-semibold text-[#073a55]">
                  Forgot password?
                </a>
              </div>

              <div class="mb-3">
                <button
                  type="submit"
                  class="mb-1.5 block w-full text-center text-white bg-[#073a55] hover:bg-blue-900 px-2 py-1.5 rounded-md"
                >
                  Sign in
                </button>
                <button class="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md">
                  <img
                    class="w-5 mr-2"
                    src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                  />
                  Sign in with Google
                </button>
              </div>
            </form>

            <div class="text-center">
              <span class="text-xs text-gray-400 font-semibold">
                Don't have account?
              </span>
              <a href="#" class="text-xs font-semibold text-[#073a55]">
                Sign up
              </a>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap content-center justify-center rounded-r-3xl w-[24rem] h-[32rem]">
          <img
            class="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-3xl"
            src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;

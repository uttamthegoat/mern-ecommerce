import React from "react";

const LoginForm = () => {
  const handleLogin = () => {};
  return (
    <div>
      <div className="my-20">
        <h1 className="text-center">Login</h1>
        <form onSubmit={handleLogin} className="flex flex-col w-1/2 mx-auto">
          <div className="flex flex-col">
            <label htmlFor="loginEmail">Enter E-mail</label>
            <input
              type="email"
              name="email"
              id="loginEmail"
              placeholder="Enter email here..."
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="loginPassword">Enter Password</label>
            <input
              type="password"
              name="password"
              id="loginPassword"
              placeholder="Enter password here..."
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

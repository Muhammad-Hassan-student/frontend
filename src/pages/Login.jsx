import React, { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign up");

  const handleSubmitHandler = async (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmitHandler} className="flex flex-col items-center w-[90%] m-auto sm:max-w-96 mt-14 gap-4 text-gray-700">
      <div className="flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <p className="border-none h-[1.5px] w-8 bg-gray-800"></p>
      </div>
      {currentState === 'Login' ? ''
      : <input
      className="w-full px-3 py-2 border border-gray-800"
      type="text"
      placeholder="Name" required/>}
      <input
        className="w-full px-3 py-2 border border-gray-800"
        type="text"
        placeholder="Email" required
      />
      <input
        className="w-full px-3 py-2 border border-gray-800"
        type="password"
        placeholder="Password" required
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your Password</p>
        {currentState === "Login" ? (
          <p onClick={() => setCurrentState('Sign up')} className="cursor-pointer">Create account</p>
        ) : (
          <p onClick={() => setCurrentState('Login')} className="cursor-pointer">Login here</p>
        )}
      </div>
      <button type="submit" className="bg-black text-white font-light px-8 py-2 mt-4">
        {currentState === 'Sign up' ? 'Sign up' :'Login '}
      </button>
    </form>
  );
};

export default Login;

import React, { useState } from 'react';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="w-full max-w-lg">
        <h2 className="text-2xl font-light text-gray-800 text-center mb-8">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>
        <form className="space-y-4">
          {!isLogin && (
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                required={!isLogin}
              />
            </div>
          )}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              className="w-full px-4 py-3 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-600"
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </div>
        </form>

        <div className="text-sm text-center mt-6 text-gray-600">
          {isLogin ? (
            <p>
              Don't have an account?{' '}
              <span
                className="text-gray-800 cursor-pointer hover:underline"
                onClick={() => setIsLogin(false)}
              >
                Sign up
              </span>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <span
                className="text-gray-800 cursor-pointer hover:underline"
                onClick={() => setIsLogin(true)}
              >
                Login
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;

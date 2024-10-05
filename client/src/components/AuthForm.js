import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

const AuthForm = () => {
  // State to toggle between login and signup mode
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="w-full max-w-lg">
        {/* Title changes based on whether it's login or sign up */}
        <h2 className="text-2xl font-light text-gray-800 text-center mb-8">
          {isLogin ? 'LOGIN' : 'SIGN UP'}
        </h2>
        <form className="space-y-4">
          {/* Name field only appears in sign-up mode */}
          {!isLogin && (
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              required={!isLogin}
            />
          )}

          {/* Email field for both login and sign-up */}
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          {/* Password field for both login and sign-up */}
          <Input
            type="password"
            name="password"
            placeholder="Your Password"
            required
          />

          {/* Submit button text changes based on login or sign-up mode */}
          <Button label={isLogin ? 'Login' : 'Sign Up'} type="submit" />
        </form>

        {/* Toggle between login and sign-up */}
        <div className="text-sm text-center mt-6 text-gray-600">
          {isLogin ? (
            <p>
              Don't have an account?{' '}
              {/* Switch to sign-up mode */}
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
              {/* Switch to login mode */}
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

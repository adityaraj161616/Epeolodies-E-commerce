import React, { useState } from 'react';

function Login() {
  const [isSignup, setIsSignup] = useState(false);

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold">{isSignup ? 'Sign Up' : 'Login'}</h1>
      <form>
        <input type="email" placeholder="Email" className="border p-2 mb-4 w-full" />
        <input type="password" placeholder="Password" className="border p-2 mb-4 w-full" />
        {isSignup && (
          <input type="password" placeholder="Confirm Password" className="border p-2 mb-4 w-full" />
        )}
        <button className="bg-blue-500 text-white px-4 py-2">{isSignup ? 'Sign Up' : 'Login'}</button>
      </form>
      <p className="mt-4">
        {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
        <button onClick={toggleForm} className="text-blue-500 underline"></button>
          {isSignup ? 'Login' : 'Sign Up'}
        </button>
      </p>
    </div>
  );import React, { useState } from 'react';

function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      // Handle sign up logic here
      console.log('Sign up:', email, password);
    } else {
      // Handle login logic here
      console.log('Login:', email, password);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold">{isSignup ? 'Sign Up' : 'Login'}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border p-2 mb-4 w-full"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border p-2 mb-4 w-full"
        />
        {isSignup && (
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="border p-2 mb-4 w-full"
          />
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2"
        >
          {isSignup ? 'Sign Up' : 'Login'}
        </button>
      </form>
      <p className="mt-4">
        {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
        <button onClick={toggleForm} className="text-blue-500 underline">
          {isSignup ? 'Login' : 'Sign Up'}
        </button>
      </p>
    </div>
  );
}

export default Login;
}

export default Login;

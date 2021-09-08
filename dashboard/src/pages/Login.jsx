import React, { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from './Dashboard';
import { Form } from '../components/Form/Form';

const endpoint =
  'http://localhost:5000' || 'https://react-testcao.herokuapp.com';

const Login = () => {
  // REgister form
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  // Login form
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const { loginUser, registerUser } = useContext(UserContext);

  const registerFormHandler = async (e) => {
    e.preventDefault();
    if (!username || !password || !passwordConfirm) return;

    if (password === passwordConfirm) {
      const user = {
        username: username,
        password: password,
      };

      registerUser(user);
    }
  };

  const loginFormHandler = async (e) => {
    e.preventDefault();

    if (!loginUsername || !loginPassword) return;

    const user = {
      username: loginUsername,
      password: loginPassword,
    };

    loginUser(user);
  };

  return (
    <main>
      <Form onSubmit={loginFormHandler}>
        <div className='form-control'>
          <label htmlFor='loginUsername'>Username</label>
          <input
            type='text'
            id='loginUsername'
            value={loginUsername}
            onChange={(e) => setLoginUsername(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='loginPassword'>Password</label>
          <input
            type='password'
            id='loginPassword'
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <input type='submit' value='Login' />
        </div>
      </Form>

      <Form onSubmit={registerFormHandler}>
        <div className='form-control'>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input
            type='password'
            id='confirmPassword'
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <input type='submit' value='Register' />
        </div>
      </Form>
    </main>
  );
};

export default Login;

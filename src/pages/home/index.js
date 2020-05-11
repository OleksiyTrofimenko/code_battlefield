import React, { useState } from 'react';

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDirty, setIsDirty] = useState(false);

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (!email && !password) {
      setIsDirty(true);
    }
  };

  const inputErrorStyle = isDirty ? 'is-invalid' : '';

  return (
    <div className='container'>
      <form autoComplete='off' onSubmit={onSubmitForm}>
        <div className='form-group'>
          <label>Email</label>
          <input
            className={`form-control ${inputErrorStyle}`}
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label>Password</label>
          <input
            className={`form-control ${inputErrorStyle}`}
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;

import React, { useState } from 'react';

const Card = ({ platform, username, password, cimg }) => {
  const [view, setView] = useState(false);
  const viewPassword = (e) => {
    e.preventDefault();
    setView(!view);
  };
  return (
    <div className='card w-96 bg-base-300 shadow-xl image-full'>
      <figure>
        <img src={`${cimg}`} alt='cardimg' />
      </figure>
      <div className='card-body'>
        <h1 className='card-title'>{platform}</h1>
        <div className='flex flex-col justify-center items-center'>
          <p>Username: {username}</p>
          <p>Password: <span>{view === true ? password : '* * * *'}</span></p>
        </div>

        <div className='card-actions justify-end'>
          <button className='btn btn-primary' onClick={viewPassword}>
            View
          </button>
          <button className='btn btn-primary' onClick={viewPassword}>
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

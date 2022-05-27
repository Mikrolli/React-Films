import React from 'react';
import SavedShows from '../components/SavedShows';

const Account = () => {
  return (
    <>
    <div className='w-full text-white'>
    <img
        className="w-full h-[400px] object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/970e664f-2df4-47ce-b4fa-446082f5abc1/140f050a-372a-4738-aacb-781f44fc2d44/RU-ru-20220523-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="/"
      />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
      <div className='absolute top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold'>Мои фильмы</h1>
      </div>
    </div>
    <SavedShows />
    </>
  );
};

export default Account;
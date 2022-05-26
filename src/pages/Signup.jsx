import React from "react";

const Signup = () => {
  return (
    <>
      <div className="w-full h-screen">
        <img className="hidden sm:block absolute w-full h-full object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/970e664f-2df4-47ce-b4fa-446082f5abc1/140f050a-372a-4738-aacb-781f44fc2d44/RU-ru-20220523-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="/" />
        <div className="bg-black/60 fixed top-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1>Sign Up</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signout } from '../services/auth';

const Navbar = () => {
  const navigate = useNavigate();
  const storedName = localStorage.getItem("name");

  const handleClick = () => {
    signout()
      .then((response) => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error during logout:", error.message);
        alert("Logout failed. Please try again.");
      });
  };
  return (
    
<div className="fixed w-[100%] -ml-[12rem] md:ml-1  text-black md:shadow-md z-40  md:bg-[#E9EDF1]">
      <div className="flex items-center justify-between px-4 py-3 w-full ">
        <div className=" flex-1 flex justify-start ml-[17rem] ">
          <input
            type="text"
            placeholder="Search..."
            className="w-[60%]  rounded-lg px-4 py-2 focus:outline-none hidden sm:block"
          />
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/help" >
          <img src='/images/help.svg' alt={'help'} className="mr-3 w-6 h-6" />
          </Link>

          <Link to="/settings" >
          <img src='/images/settings.svg' alt={'settings'} className="mr-3 w-9 md:w-6 h-6" />
          </Link>

<button className='bg-white px-3 py-2 rounded-md' onClick={handleClick}>Logout</button>
         <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
              <img
                src="https://s3-alpha-sig.figma.com/img/a875/2966/6cacf06a5eea46640a941217ae6e1903?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gu7h1tf~FKr8PiuxC57sIy1QA~rxhxLMdZmrfvXapXWXfO3gnBojHqv69SrY1cek9YNGXztjppA7O~hXJrG8fxPjc70s9e8unT8UR2mCBTxXRAQ2FrTxrUxfQKA2IKIkQRTOYumqNp4zBAh~94w2OuZnPbiqR1mGG-utl6NLNF11yOUGzrOZSgp04zCt7vn1AZwBbyoLaT1AcxOYw4vyUnBJDI0gBL6RGxBcaev~VTjv4vaXO6QIM4b1wjqNMneGA4l4PuHUSm5dNqvD~poszan9hwyHOhY51qNFHsqhgOyBFAPjyOOK9TpnI06GujhUr-h99evW~LpyOgHrDLkPAA__"
                alt="Profile"
                className="w-full h-full rounded-lg"
              />
            </div>
            <span className="text-black font-bold text-[14px]">{storedName||'Adeline'}</span>
          </div>
        </div>
      </div>
    </div>  )
}


export default Navbar
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
function Navbar() {
  const [showmenu, setshowmenu] = useState(false);
  const show = () => {
    setshowmenu(!showmenu);
  };


  return (
    <div className=" relative text-white bg-transparent color1">
      <div className="sm:w-full flex px-[9vw] py-[1.5vw] items-end z-50">
        <div className="lg:w-1/2 md:w-[40%] w-[65%] flex">
          <Link to='/'> <img src="./logo1.jpg" width="55px" /></Link>
        </div>

        <div className="lg:w-1/2 md:w-[60%] hidden md:flex justify-between px-[4vw] text-[17px] pb-2 capitalize">
          <ul className="flex gap-8 items-center">
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="/testimonials">Testimonials</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex md:hidden w-[30%] justify-end pb-2">
          <button onClick={show}>
            {showmenu === false ? <GiHamburgerMenu /> : <RxCross1 />}
          </button>
        </div>
      </div>
      {showmenu && (
        <div
          className={`md:hidden absolute w-full flex justify-center py-6 rounded-2xl gap-4 bg-zinc-400 navbar-sm items-center z-10`}
        >
          <ul className="w-full">
            {["About", "resume", "work", "blog", "contact"].map(
              (item, index) => (
                <li className={`links w-full flex justify-center `}>
                  <a>{item}</a>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;

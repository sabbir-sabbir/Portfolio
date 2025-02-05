import React, { useContext } from "react";
import {Link} from 'react-scroll';
import confetti from "canvas-confetti";
import { Pro } from "../Context/Context";
import {motion} from 'framer-motion'

const Navbar = () => {

 const {D, setD} = useContext(Pro);
 

  return (
    <>
      <nav>
        <div className={`    fixed z-50   w-screen h-auto py-2 px-3 sm:px-3 md:px-4 lg:px-3 xl:px-4 border-b-1 border-white   ${D ? 'bg-gradient-to-r from-zinc-800 via-zinc-800/80 to-zinc-800' : 'bg-gradient-to-r from-white via-[#caf0f8] to-white'} `}>
          <div className="flex justify-between items-center gap-4">
            <div className="flex items-center gap-1">
              {" "}
              <Link>
                <motion.img  drag
              dragSnapToOrigin={true}
              dragTransition={{bounceStiffness: 300, bounceDamping: 10}}
              whileDrag={{
                scale: 1.9,
              }}
                  className="w-[100px] h-[50px] animate-spin [animation-duration:5s] hover:scale-75 transition-all "
                  src="/flower.svg"
                  alt="logo"
                />
              </Link>{" "}
              <h1  className={`font-light leading-tight text-[18px] cursor-pointer ${D ? 'text-white' : 'text-black'}`}>SABBIR</h1>
              <div></div>
            </div>

            {/* second div */}
            <div className="flex items-center gap-8 md:mr-16">
              <div>
                {" "}
                <Link
                 smooth={true} offset={-80} duration={500}
                  to='interface'
                  className={`font-light leading-tight text-[18px] cursor-pointer ${D ? 'text-white' : 'text-black'}`}
                >
                  Interface{" "}
                </Link>
              </div>
              <div>
                <Link
                  to='skill'
                  smooth={true} offset={-60} duration={500}
                  className={`font-light leading-tight text-[18px] cursor-pointer ${D ? 'text-white' : 'text-black'}`}
                >
                  Skills
                </Link>
              </div>
              <div className="hover:scale-105 duration-300">
                <Link
                  smooth={true} offset={-80} duration={500}
                  to='works'
                  className={`font-light leading-tight text-[18px] cursor-pointer ${D ? 'text-white' : 'text-black'}`}

                >
                  Works
                </Link>
              </div>
              <div><button onClick={()=> setD(!D)}>{D ? <img className="w-6 h-6  " src="/sunn.svg" alt="Dark Mode"  /> : <img className="w-6 h-6" src="/moon.svg" alt="Dark Mode" /> }</button></div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

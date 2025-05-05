import { motion, useScroll } from "framer-motion";
import React, { useContext } from "react";
import { Link } from "react-scroll";
import { Pro } from "../Context/Context";

const Navbar = () => {
  const { D, setD } = useContext(Pro);
  const { scrollYProgress } = useScroll();

  return (
    <>
      <nav>
        <div
          className={`fixed z-50  border border-white/15 border-b-1 shadow-lg  w-screen h-auto py-1 px-3  md:px-4 lg:px-3 xl:px-4    ${
            D
              ? "bg-gradient-to-r from-black via-black to-black"
              : "bg-gradient-to-r from-white via-[#e5e5e5] to-[#dee2e6]"
          } `}
        >
          <div className="flex justify-start items-center gap-2 md:gap-11 lg:gap-12">
            <div className="flex items-center gap-1">
              {" "}
              <Link>
                <motion.img
                  drag
                  dragSnapToOrigin={true}
                  dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
                  whileDrag={{
                    scale: 1.9,
                  }}
                  className="w-[80px] h-[40px] animate-spin [animation-duration:3s] hover:scale-75 transition-all "
                  src="/navlogo.svg"
                  alt="logo"
                />
              </Link>{" "}
            </div>

            {/* second div */}
            <div className="flex items-center gap-4 lg:gap-8 ">
              <div>
                {" "}
                <Link
                  smooth={true}
                  offset={-80}
                  duration={500}
                  to="interface"
                  className={`nav-text ${D ? "text-white" : "text-black"}`}
                >
                  Interface{" "}
                </Link>
              </div>
              <div>
                <Link
                  to="skill"
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className={`nav-text ${D ? "text-white" : "text-black"}`}
                >
                  Skills
                </Link>
              </div>
              <div className="hover:scale-105 duration-300">
                <Link
                  smooth={true}
                  offset={-80}
                  duration={500}
                  to="works"
                  className={`nav-text ${D ? "text-white" : "text-black"}`}
                >
                  Works
                </Link>
              </div>
              <div className="hover:scale-105 duration-300">
                <Link
                  smooth={true}
                  offset={-50}
                  duration={500}
                  to="writeme"
                  className={`nav-text ${D ? "text-white" : "text-black"}`}
                >
                  Message
                </Link>
              </div>
              <div>
                <button onClick={() => setD(!D)}>
                  {D ? (
                    <img
                      className="w-6 h-6  "
                      src="/sunn.svg"
                      alt="Dark Mode"
                    />
                  ) : (
                    <img className="w-6 h-6" src="/moon.svg" alt="Dark Mode" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <motion.div
        style={{
          scaleX: scrollYProgress,
        }}
        className="w-full h-1 origin-left z-50  absolute fixed top-[47px] left-0 bg-gradient-to-r from-[#7b2cbf] via-[#ae2012] to-[#ef233c] rounded-r-full"
      ></motion.div>
    </>
  );
};

export default Navbar;

import React, { useContext } from "react";
import Skills from "../Skills/Skills";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Website from "../../assets/website.json";
import Works from "../Works/Works";
import Footer from "../Footer/Footer";
import { Pro } from "../Context/Context";

const Interface = () => {
  const { D, setD } = useContext(Pro);

  const style = {
    height: "600px",
  };

  return (
    <>
      <section
        className={` mt-[45px] w-full h-auto py-8 md:py-5 lg:py-2 px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col-reverse md:flex-row justify-between items-center gap-6 ${
          D
            ? "bg-gray-800"
            : "bg-gradient-to-r from-[#2196f3] via-[#2196f3]/35 to-[#e9ecef]/75"
        } `}
        id="interface"
      >
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-2 flex flex-col space-y-5 mt-2">
          <div className="flex flex-wrap items-center mb-2">
            <motion.h1
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, x: [-0, -100, 200, -0] }}
              transition={{ duration: 1 }}
              className="text-2xl md:text-3xl lg:text-5xl font-bold font-Stardos p-2 text-green-300 bg-orange-400/75"
            >
              Hi, I'm
            </motion.h1>
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: [-0, -100, 150, 180, 190, 200, -0],
                rotate: [0, 0, 0, 0, 0, 360, 0],
              }}
              transition={{ duration: 1.5 }}
              drag
              dragSnapToOrigin={true}
              dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
              whileDrag={{
                scale: 1.9,
              }}
              className="ml-2 text-2xl md:text-3xl lg:text-5xl p-2 font-bold font-Nabla text-orange-400 border-r-2 border-green-400"
            >
              FRONT_END
            </motion.span>
          </div>
          <div className="flex flex-wrap items-center mb-6">
            <motion.p
              drag
              dragSnapToOrigin={true}
              dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
              whileDrag={{
                scale: 1.9,
              }}
              className="text-2xl md:3xl lg:text-4xl font-semibold p-2 italic text-orange-400 border-l-2 border-orange-400"
            >
              WEBSITE -
            </motion.p>
            <motion.span
              drag
              dragSnapToOrigin={true}
              dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
              whileDrag={{
                scale: 1.9,
              }}
              className="text-2xl md:3xl lg:text-4xl font-semibold p-2 text-orange-400 uppercase"
            >
              Developer
            </motion.span>
          </div>
          <div className="w-screen h-2 ">
            <motion.div
              drag
              dragSnapToOrigin={true}
              dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
              whileDrag={{
                scale: 1.9,
              }}
              animate={{ width: "100%" }}
              transition={{ duration: 10 }}
              className="w-1/12 h-full bg-cyan-300"
            ></motion.div>
          </div>
          <div className={`w-full h-auto py-2 px-2  shadow-xl ${D ? "bg-white/25" : "bg-[#e3f2fd]/15 backdrop-blur-3xl shadow-2xl "}`}>
            <p className={`  text-[16px] md:text-[18px] shadow-md  font-Stardos tracking-wide leading-8 ${D ? "text-lime-200": "text-green-50"}`}>
            "Hey, I'm Sabbir — I turn ideas into visually engaging front-end experiences and strive to craft the best  

 <span className="uppercase font-Saira tracking-wider text-[#03045e]/75"> solutions </span>
 "
            </p>
          </div>
          <div className="flex items-center justify-start gap-4 w-full h-auto ">
            <motion.div
              dragSnapToOrigin={true}
              dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
              drag
              whileDrag={{
                backgroundColor: "#48cae4",
              }}
              whileHover={{
                backgroundColor: "#48cae4",
              }}
              whileTap={{
                scale: 0.9,
                color: "red",
              }}
              className="w-[150px] h-auto mt-2 text-center py-2 px-3 text-white bg-gray-500 rounded-sm text-sm shadow-md "
            >
              <a
                className={`${
                  D ? "text-zinc-100" : "text-green-50"
                } font-semibold uppercase racking-wider font-audiowide `}
                href="/resume.pdf"
                download="SABBIR_(Front-end Web-Devs)"
              >
                Find Resume
              </a>
            </motion.div>
            <motion.div
              dragSnapToOrigin={true}
              dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
              drag
              whileDrag={{
                backgroundColor: "#48cae4",
              }}
              whileHover={{
                backgroundColor: "#48cae4",
              }}
              whileTap={{
                scale: 0.9,
                color: "red",
              }}
              className="w-[150px] h-auto mt-2 text-center py-2 px-3 text-white bg-gray-500 rounded-sm text-sm shadow-md "
            >
              <a
                className={`${
                  D ? "text-zinc-100" : "text-green-50"
                } font-semibold tracking-wider uppercase font-audiowide `}
                href="/Certificate of front end web development.pdf"
                download="SABBIR_(Front-end Web-Devs)"
              >
                Certificate
              </a>
            </motion.div>
          </div>
        </div>

        {/* Right Content */}
        <motion.div
          drag
          dragSnapToOrigin={true}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
          whileDrag={{
            scale: 1.9,
          }}
          className=" hidden md:block w-full md:w-1/2 flex justify-center"
        >
          <Lottie style={style} animationData={Website} />
        </motion.div>
      </section>
      {/* othhers sections */}
      <Skills />
      <Works />
      <Footer />
    </>
  );
};

export default Interface;

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
        className={` mt-[65px] w-full h-auto py-2 px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col-reverse md:flex-row justify-between items-center gap-6 ${
          D
            ? "bg-gray-800"
            : "bg-gradient-to-r from-[#ffffff] via-[#caf0f8]/35 to-[#e9ecef]"
        } `}
        id="interface"
      >
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-2 flex flex-col mt-2">
          <div className="flex flex-wrap items-center mb-2">
            <motion.h1
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, x: [-0, -100, 200, -0] }}
              transition={{ duration: 1 }}
              className="text-4xl sm:text-5xl font-bold p-2 text-green-300 bg-orange-400"
            >
              Hi, I'm
            </motion.h1>
            <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, x: [-0, -100, 150, 180, 190, 200, -0], rotate: [0,0,0,0,0,360,0] }}
            transition={{ duration: 1.5 }}
            drag
              dragSnapToOrigin={true}
              dragTransition={{bounceStiffness: 300, bounceDamping: 10}}
              whileDrag={{
                scale: 1.9,
              }} className="ml-2 text-4xl sm:text-5xl p-2 font-bold text-orange-400 border-r-2 border-green-400">
              Front-End
            </motion.span>
          </div>
          <div className="flex flex-wrap items-center mb-6">
            <motion.p drag
              dragSnapToOrigin={true}
              dragTransition={{bounceStiffness: 300, bounceDamping: 10}}
              whileDrag={{
                scale: 1.9,
              }} className="text-3xl sm:text-4xl font-semibold p-2 italic text-fuchsia-400 border-l-2 border-orange-400">
              WEBSITE -
            </motion.p>
            <motion.span drag
              dragSnapToOrigin={true}
              dragTransition={{bounceStiffness: 300, bounceDamping: 10}}
              whileDrag={{
                scale: 1.9,
              }} className="text-3xl sm:text-4xl font-semibold p-2 text-orange-400 uppercase">
              Developer
            </motion.span>
          </div>
          <div className="w-screen h-2 ">
            <motion.div
            drag
            dragSnapToOrigin={true}
            dragTransition={{bounceStiffness: 300, bounceDamping: 10}}
            whileDrag={{
              scale: 1.9,
            }}
              animate={{ width: "100%" }}
              transition={{ duration: 10 }}
              className="w-1/12 h-full bg-cyan-300"
            ></motion.div>
          </div>
          <div className="flex flex-col gap-4 items-start">
            <div>
              <motion.h1
              drag
              dragSnapToOrigin={true}
              dragTransition={{bounceStiffness: 300, bounceDamping: 10}}
              whileDrag={{
                scale: 1.9,
              }}
                className={`font-semibold text-xl ${
                  D ? "text-zinc-400" : "text-zinc-500"
                }`}
              >
                NAME: - SABBIR{" "}
                <span className="text-orange-400 font-semibold ">-</span>{" "}
              </motion.h1>
            </div>
            <div className="flex items-center gap-10">
              <span>
                <img className="w-6 h-6" src="/email.svg" alt="" />
              </span>{" "}
              <span  className={`${D ? "text-zinc-400" : "text-zinc-500"}`}>
                mesabbir855@gmail.com
              </span>{" "}
            </div>
            <div className="flex items-center gap-10">
              <span>
                <img className="w-6 h-6" src="/github.svg" alt="" />
              </span>{" "}
              <a
              
                className={`${D ? "text-zinc-400" : "text-zinc-500"}`}
                href="https://github.com/sabbir-sabbir"
                target="blank"
              >
                GitHub.com
              </a>{" "}
            </div>
            <div className="flex items-center gap-10">
              <span>
                <img className="w-6 h-6" src="/whatsapp.svg" alt="" />
              </span>{" "}
              <span  className={`${D ? "text-zinc-400" : "text-zinc-500"}`}>
                +880 1329393695
              </span>
            </div>
            <div className="flex items-center gap-10">
              <span>
                <img className="w-6 h-6" src="insta.svg" alt="" />
              </span>{" "}
              <a
              
                className={`${D ? "text-zinc-400" : "text-zinc-500"}`}
                href="https://www.instagram.com/iosabbir7890/"
                target="blank"
              >
                Instagram
              </a>
            </div>
            
          </div>
          <div className="flex items-center justify-start gap-4 ">
          <motion.div
          dragSnapToOrigin={true}
        dragTransition={{bounceStiffness: 300, bounceDamping: 10}}
         drag
          whileDrag={{
            backgroundColor: "#48cae4"
          }}
          whileHover={{
            backgroundColor: '#48cae4'
          }} 
          whileTap={{
            scale: 0.9, color: "red"
          }}
          className="w-[150px] h-auto mt-2 text-center py-2 px-3 text-white bg-gray-500 rounded-full text-sm ">
            <a
              className={`${D ? "text-zinc-100" : "text-zinc-900"} font-semibold `}
              href="/resume.pdf"
              download="SABBIR_(Front-end Web-Devs)"
            >
              Find Resume
            </a>
          </motion.div>
          <motion.div
          dragSnapToOrigin={true}
        dragTransition={{bounceStiffness: 300, bounceDamping: 10}}
         drag
          whileDrag={{
            backgroundColor: "#48cae4"
          }}
          whileHover={{
            backgroundColor: '#48cae4'
          }} 
          whileTap={{
            scale: 0.9, color: "red"
          }}
          className="w-[150px] h-auto mt-2 text-center py-2 px-3 text-white bg-gray-500 rounded-full text-sm ">
            <a
              className={`${D ? "text-zinc-100" : "text-zinc-900"} font-semibold `}
              href="/Certificate of front end web development.pdf"
              download="SABBIR_(Front-end Web-Devs)"
            >
             Certificate
            </a>
          </motion.div>
          </div>
        </div>

        {/* Right Content */}
        <motion.div drag
              dragSnapToOrigin={true}
              dragTransition={{bounceStiffness: 300, bounceDamping: 10}}
              whileDrag={{
                scale: 1.9,
              }} className="w-full md:w-1/2 flex justify-center">
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

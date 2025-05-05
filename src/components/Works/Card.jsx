import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { Pro } from "../Context/Context";

const Card = () => {
  const { D, setD } = useContext(Pro);
  const [card, setCard] = useState(false);

  const Variant1 = {
    show: {
      opacity: 1,
      y: [50, -10, 0],
      scale: [0.9, 1.05, 1],
      transition: {
        duration: 0.9,
        ease: "easeOut",
        type: "spring",
        stiffness: 120,
        damping: 25,
      },
    },
    hide: {
      opacity: 0,
      y: -200,
      transition: { duration: 0.9 },
    },
  };

  const Variant2 = {
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9 },
    },
    hide: {
      opacity: 0,
      x: -100,
      transition: { duration: 0.9 },
    },
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col items-center justify-center gap-1 py-2 px-2">
          <motion.div
            animate={card ? "hide" : "show"}
            variants={Variant1}
            className={`flex flex-col justify-center items-center gap-2  py-2 px-2 ${
              D
                ? "bg-gray-700"
                : "bg-gradient-to-r from-[#e0aaff]/25 via-[#caf0f8]/35 to-[#e9ecef]"
            } `}
          >
            <motion.div variants={Variant2}>
              <img className="w-18 h-18" src="/git.svg" alt="" />
            </motion.div>
            <motion.p>
              <a
                className={` underline-offset-1 underline ${D ? 'text-zinc-300' : 'text-zinc-600'}`} 
                href="https://github.com/sabbir-sabbir/Website-for-College"
                target="blank"
              >
                See The Preview Link inside Repository --- <br />
                This Project Made With React JS, Tailwind css, Web3 API, &
                Vanila JS
              </a>
            </motion.p>
          </motion.div>
          <motion.div drag
              dragSnapToOrigin={true}
              dragTransition={{bounceStiffness: 300, bounceDamping: 10}}
              whileDrag={{
                scale: 1.1,
              }}
            onClick={() => setCard(!card)}
            className="flex items-center justify-center cursor-pointer py-2 px-2 w-full bg-green-300 gap-3 hover:scale-105 duration-300"
          >
            <button className="cursor-pointer">
              {!card ? "Click to Close" : "Click to View"}
            </button>{" "}
            <img className="w-6 h-6 " src="/view.svg" alt="" />{" "}
          </motion.div>
        </div>

        {/* second col */}
        <div className="flex flex-col items-center justify-center gap-1 py-2 px-2">
          <motion.div
            animate={card ? "hide" : "show"}
            variants={Variant1}
            className={`flex flex-col justify-center items-center gap-2  py-2 px-2 ${D ? 'bg-gray-700' : 'bg-gradient-to-r from-[#e0aaff]/25 via-[#caf0f8]/35 to-[#e9ecef]'} `}
          >
            <motion.div variants={Variant2}>
              <img className="w-18 h-18" src="/git.svg" alt="" />
            </motion.div>
            <motion.p>
              <a
               className={` underline-offset-1 underline ${D ? 'text-zinc-300' : 'text-zinc-600'}`}
                href="https://github.com/sabbir-sabbir/Car-Selling-Landing-Page"
                target="blank"
              >
                See The Preview Link inside Repository --- <br />
                This Project Made With React JS, BootStrap 5, Raw css & Vanila
                JS
              </a>
            </motion.p>
          </motion.div>
          <motion.div drag
              dragSnapToOrigin={true}
              dragTransition={{bounceStiffness: 300, bounceDamping: 10}}
              whileDrag={{
                scale: 1.1,
              }}
            onClick={() => setCard(!card)}
            className="flex items-center justify-center cursor-pointer py-2 px-2 w-full bg-green-300 gap-3 hover:scale-105 duration-300 "
          >
            <button className="cursor-pointer">
              {!card ? "Click to Close" : "Click to View"}
            </button>{" "}
            <img className="w-6 h-6 " src="/view.svg" alt="" />{" "}
          </motion.div>
        </div>

        {/* Thirt col */}
        <div className="flex flex-col items-center justify-center gap-1 py-2 px-2">
          <motion.div
            animate={card ? "hide" : "show"}
            variants={Variant1}
            className={`flex flex-col justify-center items-center gap-2  py-2 px-2 ${D ? 'bg-gray-700' : 'bg-gradient-to-r from-[#e0aaff]/25 via-[#caf0f8]/35 to-[#e9ecef]'} `}
          >
            <motion.div variants={Variant2}>
              <img className="w-18 h-18" src="/git.svg" alt="" />
            </motion.div>
            <motion.p>
              <a
              className={` underline-offset-1 underline ${D ? 'text-zinc-300' : 'text-zinc-600'}`}
                href="https://github.com/sabbir-sabbir/my-app"
                target="blank"
              >
                See The Preview Link inside Repository --- <br />
                This Project Made With Next JS, Tailwind css, TypeScript, ShadCN UI, & Tanstack Table.
              </a>
            </motion.p>
          </motion.div>
          <motion.div drag
              dragSnapToOrigin={true}
              dragTransition={{bounceStiffness: 300, bounceDamping: 10}}
              whileDrag={{
                scale: 1.1,
              }}
            onClick={() => setCard(!card)}
            className="flex items-center justify-center cursor-pointer py-2 px-2 w-full bg-green-300 gap-3 hover:scale-105 duration-300"
          >
            <button className="cursor-pointer">
              {!card ? "Click to Close" : "Click to View"}
            </button>{" "}
            <img className="w-6 h-6 " src="/view.svg" alt="" />{" "}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Card;

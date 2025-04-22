import React, { useContext } from "react";
import { FiSend } from "react-icons/fi";
import { Pro } from "../Context/Context";

const Writeme = () => {
  const { onSubmit, D } = useContext(Pro);

  return (
    <section
      className={`  bg-[url('https://images.unsplash.com/photo-1729194515785-fcd7d4f292d9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat w-full h-auto py-8  lg:py-12 px-4 sm:px-6 md:px-8 lg:px-16 ${
        D
          ? "bg-gray-800"
          : "bg-gradient-to-br from-white via-white to-white"
      }`}

        id="writeme"
    >

    {/* h2 header */}
    <form  onSubmit={onSubmit}
          autocomplete="off"
          className={`  w-full h-auto py-8 md:py-12 lg:py-18 px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col  ${
        D
          ? " bg-white/10 backdrop-blur-3xl border border-white rounded-sm  shadow-2xl"
          : " bg-white/10 backdrop-blur-3xl border border-white/60 rounded-md  shadow-2xl"
      }`}
          >

            <h2 className=" text-xl lg:text-2xl text-white font-audiowide mb-3">Write A <span className="font-Ubuntu">Message For </span> Me</h2>
            <div className="w-full h-auto flex items-center  gap-4 mt-5">    
                <label className={` font-Saira tracking-wider ${D ? 'text-zinc-300' : 'text-zinc-300'}`}>Your Name: </label>
                <input   className=" font-audiowide text-white w-[250px]  md:w-[500px] py-1 px-2 outline-none bg-white/20 backdrop-blur-3xl border border-white/60  focus:bg-white/45 "
              type="text"
              name="name"
              placeholder="Enter Your Name"
              autocomplate="off"
              required />

            </div>
            <div className="w-full h-auto flex items-center  gap-4 mt-5">    
                <label className="font-Saira tracking-wider text-zinc-300">Your Email: </label>
                <input   className=" font-audiowide text-white w-[250px]  md:w-[500px] py-1 px-2 outline-none bg-white/20 backdrop-blur-3xl border border-white/60  focus:bg-white/45 "
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required />

            </div>
            <div className="w-full h-auto flex items-center  gap-4 mt-5">    
                <label className=" font-Saira tracking-wider text-zinc-300">ENTER YOUR MESSAGE: </label>
                <textarea
              className="text-gray-300 w-[250px] md:w-[500px] h-[150px] resize-x outline-none py-1 px-2 bg-white/10 backdrop-blur-3xl border border-white/60  focus:bg-white/20 "
              name="message"
              placeholder="Enter Your Message"
              required
            ></textarea>

            </div>
            <div className="flex items-start justify-start">
            <button
              className=" flex gap-2 py-1 px-4 text-white font-Nabla tracking-wider  bg-white/10 backdrop-blur-3xl border border-white/60  hover:bg-white/20 "
              type="submit"
            >
              SEND
              <span><FiSend/></span>
            </button>
          </div>
         
    </form>







    </section>
  );
};

export default Writeme;

import React,{ useContext } from 'react'
import Card from './Card'
import {Pro} from '../Context/Context'
import {motion} from 'framer-motion'




const Works = () => {
    const { D, setD } = useContext(Pro);


  return (
    <section className={`overflow-hidden px-4 md:px-8 lg:px-16 xl:px-32 py-5   ${ D ? 'bg-gray-800' : 'bg-gradient-to-r from-[#ffffff] via-[#caf0f8]/35 to-[#ffffff]'} `}  id='works'>
        <div className="max-w-screen h-auto  grid grid-cols-1 gap-2">
          <div>
            <div className="flex items-center gap-5 justify-start" ><h1 className={`text-xl font-semibold ${D ? 'text-zinc-300' : 'text-black'}`}>Track My Recent Works </h1> <span><img className="  w-6 h-6" src="/task.svg" alt="svg" /></span> </div>
          </div>
          <div>
         <Card/>
          </div>
         <div className="flex flex-col  justify-start gap-4">
          <div className=" flex justify-center items-center w-[50px] h-[50px] md:w-[100px] md:h-[100px]  p-2 border-2 border-zinc-600 rounded-full  "><motion.img drag
              dragSnapToOrigin={true}
              dragTransition={{bounceStiffness: 500, bounceDamping: 10}}
              whileDrag={{
                scale: 1.1,
              }} className={`w-10 h-10 ${D ? 'bg-zinc-300' : ''} `} src="/contri.svg" alt="" /></div>
          <div><motion.p drag
              dragSnapToOrigin={true}
              dragTransition={{bounceStiffness: 300, bounceDamping: 10}}
              whileDrag={{
                scale: 1.1,
              }} className={`font-semibold text-xl leading-tight ${D ? 'text-zinc-300' : 'text-zinc-600'} `}>...And Im Still Contributing and Learn So Many New Technologies - <br /> 
          & Up to Date with Modern Trending Workflows. </motion.p></div>
          <div className="flex items-center justify-start gap-3 w-[300px] h-[50px]  "><span className="text-green-400 ">Directly See My -- </span>  <a className="p-2 bg-zinc-500 text-white rounded-lg  hover:scale-110 duration-300 hover:bg-green-400 " href="https://github.com/sabbir-sabbir" target="blank" >GitHub</a> <span><img className="w-8 h-8" src="/git.svg" alt="" /></span> </div>
         </div>
        </div>
    </section>
  )
}

export default Works
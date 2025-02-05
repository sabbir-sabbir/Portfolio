import { SiClerk } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import Lottie from 'lottie-react'
import Skill from '../../assets/skill.json'
import {motion} from 'framer-motion'
import {useContext} from 'react';
import { Pro } from "../Context/Context";

const Skills = () => {
   const { D, setD } = useContext(Pro);

  const style = {
      width: "300px",
      height: 'auto',
  
  }

  return (
   <>
   <section className={`overflow-hidden px-4 md:px-8 lg:px-16 xl:px-32 py-5  ${D ? 'bg-gray-800' : 'bg-[#caf0f8]/35' } `} id='skill' >
  <div className={`w-full h-auto p-4  ${D ? 'bg-gray-700' : 'bg-gradient-to-r from-[#ffffff] via-[#caf0f8]/35 to-[#e9ecef]'} `}>
    
    {/* Skill Categories */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-2">
      {/* Row 1 */}
      <motion.div drag
              dragSnapToOrigin={true}
              dragTransition={{bounceStiffness: 300, bounceDamping: 10}}
              whileDrag={{
                scale: 1.1,
              }}  className={`flex items-center gap-1 ${D ? 'text-zinc-300' : 'text-zinc-600'}`}><img className="w-6 h-6" src="js.svg" alt="javascript" /> javascript</motion.div>
      <motion.div drag
              dragSnapToOrigin={true}
              dragTransition={{bounceStiffness: 300, bounceDamping: 10}}
              whileDrag={{
                scale: 1.1,
              }} className={`flex items-center gap-1 ${D ? 'text-zinc-300' : 'text-zinc-600'}`}><img className="w-6 h-6" src="ts.svg" alt="typescript" />typescript</motion.div>
      <motion.div drag className={`flex items-center gap-1 ${D ? 'text-zinc-300' : 'text-zinc-600'}`}><img className="w-6 h-6" src="reactb.svg" alt="react js" />react.js</motion.div>
      <motion.div drag className={`flex items-center gap-1 ${D ? 'text-zinc-300' : 'text-zinc-600'}`}><img className="w-6 h-6" src="next.svg" alt="next js" />next.js</motion.div>
      <motion.div drag className="flex items-center gap-1"><img className="w-6 h-6" src="redux.svg" alt="redux" />redux</motion.div>

      {/* Row 2 */}
      <motion.div drag className={`flex items-center gap-1 ${D ? 'text-zinc-300' : 'text-zinc-600'}`}><img className="w-6 h-6" src="mui.svg" alt="mui" /> material.UI</motion.div>
      <motion.div drag className={`flex items-center gap-1 ${D ? 'text-zinc-300' : 'text-zinc-600'}`}><img className="w-6 h-6" src="framer.svg" alt="framer" />framer</motion.div>
      <motion.div drag className={`flex items-center gap-1 ${D ? 'text-zinc-300' : 'text-zinc-600'}`}><img className="w-6 h-6" src="fire.svg" alt="fire_base" />fire-base</motion.div>
      <motion.div drag className={`flex items-center gap-1 ${D ? 'text-zinc-300' : 'text-zinc-600'}`}><SiClerk className="w-6 h-6" />clerk</motion.div>
      <motion.div drag className={`flex items-center gap-1 ${D ? 'text-zinc-300' : 'text-zinc-600'}`}><SiShadcnui className="w-5 h-5" />shad.cn</motion.div>

      {/* Row 3 */}
      <motion.div drag className={`flex items-center gap-1 ${D ? 'text-zinc-300' : 'text-zinc-600'}`}><img className="w-6 h-6" src="html.svg" alt="html" />html</motion.div>
      <motion.div drag className={`flex items-center gap-1 ${D ? 'text-zinc-300' : 'text-zinc-600'}`}><img className="w-6 h-6" src="css.svg" alt="css" />css</motion.div>
      <motion.div drag className={`flex items-center gap-1 ${D ? 'text-zinc-300' : 'text-zinc-600'}`}><img className="w-6 h-6" src="tailwind.svg" alt="tailwind css" />tailwind.css</motion.div>
      <motion.div drag className={`flex items-center gap-1 ${D ? 'text-zinc-300' : 'text-zinc-600'}`}><img className="w-6 h-6" src="boot.svg" alt="bootstrap" />bootstrap</motion.div>
      <div className={`flex items-center gap-1 ${D ? 'text-zinc-300' : 'text-zinc-600'}`}><img className="w-6 h-6" src="sass.svg" alt="sass" />sass</div>
    </div>

    {/* Additional Skills */}
    <div className="w-full h-auto py-2 flex flex-wrap items-center gap-5">
      <motion.h1 drag className={`text-2xl font-semibold  ${D ? 'text-zinc-300' : 'text-zinc-600'} `}>Additional Skills - </motion.h1>
      <motion.img drag className="w-10 h-10 mt-3" src="/skills.svg" alt="skills_svg" />
    </div>

    {/* Skill Description + Lottie Animation */}
    <div className="flex flex-col md:flex-row w-full h-auto items-center">
      <div className="w-full md:w-2/3 flex flex-col gap-4">
        <div className="flex items-center gap-2"><img className="w-6 h-6" src="/seo.svg" alt="seo_svg" /><h1 className={`font-light text-xl ${D ? 'text-zinc-300' : 'text-zinc-600'} `}>Write SEO Friendly Code, With Responsive Design for All Devices.</h1></div>
        <div className="flex items-center gap-2"><img className="w-6 h-6" src="/com.svg" alt="communication_svg" /><h1 className={`font-light text-xl ${D ? 'text-zinc-300' : 'text-zinc-600'} `}>Excellent Communication Expertise</h1></div>
        <div className="flex items-center gap-2"><img className="w-6 h-6" src="/team.svg" alt="teamwork_svg" /><h1 className={`font-light text-xl ${D ? 'text-zinc-300' : 'text-zinc-600'} `}>Experience in Teamwork.</h1></div>
        <div className="flex items-center gap-2"><img className="w-6 h-6" src="/speed.svg" alt="speed_svg" /><h1 className={`font-light text-xl ${D ? 'text-zinc-300' : 'text-zinc-600'} `}>Fast Learner.</h1></div>
      </div>

      {/* Lottie Animation */}
      <motion.div drag
              dragSnapToOrigin={true}
              dragTransition={{bounceStiffness: 300, bounceDamping: 10}}
              whileDrag={{
                scale: 1.2,
              }} className="w-full md:w-1/3 flex justify-center">
        <Lottie style={style} animationData={Skill} />
      </motion.div>
    </div>

  </div>
</section>


   </> 
  )
}

export default Skills
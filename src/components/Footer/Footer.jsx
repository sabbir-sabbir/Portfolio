import {useContext} from 'react';
import { Pro } from "../Context/Context";
import Lottie from 'lottie-react';
import myFooter from '../../assets/footer.json'

const Footer = () => {
      const { D, setD } = useContext(Pro);

    const style = {
        height: "80px",
        width: "auto"
    }
  return (
    <>
    <footer className={`bg-gradient-to-r ${D ? 'bg-zinc-950' : 'from-[#caf0f8]/20 via-[#caf0f8]/35 to-[#e9ecef]'} ` }>
        <div className="flex justify-center items-center gap-10">
         
        <p className={`${D ? 'text-zinc-400' : 'text-zinc-600'}`} > © 2025 WebDevs  Personal Portfolio &  All rights reserved.</p>
        <div> <Lottie style={style} animationData={myFooter}  /></div>
        </div>
        
    </footer>
    </>
  )
}

export default Footer
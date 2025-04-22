import {useContext} from 'react';
import { Pro } from "../Context/Context";
import Lottie from 'lottie-react';
import myFooter from '../../assets/footer.json'
import fData from './footerdata';

const Footer = () => {
      const { D, setD } = useContext(Pro);

    const style = {
        height: "80px",
        width: "auto"
    }
  return (
    <>
    <footer className={` ${D ? 'bg-zinc-950' : 'bg-zinc-800'} ` }>
      <div className="mt-8 w-full h-auto py-8 md:py-5 lg:py-2 px-4 sm:px-6 md:px-8 lg:px-12 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {fData.map((item) => {
  const isEmail = item.link.includes("@");
  const finalLink = isEmail
    ? `https://mail.google.com/mail/?view=cm&fs=1&to=${item.link}`
    : item.link.startsWith("http")
    ? item.link
    : `tel:${item.link}`;

  return (
    <a
      key={item.id}
      href={finalLink}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2"
    >
      <img className="bg-zinc-200 p-1 rounded-lg w-8 h-8   " src={item.icon} alt={item.title}  />
      <p className="text-zinc-400 font-Stardos">{item.title}</p>
    </a>
  );
})}

        </div>
      </div>
        <div className="flex justify-center items-center gap-10">
         
        <p className={` px-6 text-[12px] md:text-[16px]  ${D ? 'text-zinc-400' : 'text-zinc-500'}`} > © 2025 WebDevs  Personal Portfolio &  All rights reserved.</p>
        <div> <Lottie style={style} animationData={myFooter}  /></div>
        </div>
        
    </footer>
    </>
  )
}

export default Footer
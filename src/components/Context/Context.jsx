import {createContext, useState, useEffect} from 'react'
import Swal from "sweetalert2";
export const Pro = createContext()



 export const ProProvider = ({children}) => {


  const [D, setD] = useState(() => {
    const storedValue = localStorage.getItem("D");
    return storedValue ? JSON.parse(storedValue) : false;
  });

  
  useEffect(() => {
    localStorage.setItem("D", JSON.stringify(D));
  }, [D]);
  

  // fuction for web# form 
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c8ea0a4e-1e99-404a-9dda-8eeb7b0af7f4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "THANKS FOR YOUR MESSAGE !",
        icon: "success",
      });
    }
  };

    return (
        <Pro.Provider value={{D, setD,  onSubmit}}>
          {children}  
        </Pro.Provider>
    )
}
import {createContext, useState, useEffect} from 'react'
export const Pro = createContext()



 export const ProProvider = ({children}) => {


  const [D, setD] = useState(() => {
    const storedValue = localStorage.getItem("D");
    return storedValue ? JSON.parse(storedValue) : false;
  });

  
  useEffect(() => {
    localStorage.setItem("D", JSON.stringify(D));
  }, [D]);

    return (
        <Pro.Provider value={{D, setD}}>
          {children}  
        </Pro.Provider>
    )
}
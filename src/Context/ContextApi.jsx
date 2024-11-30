


import React, { createContext, useState } from 'react'


export const MyContext = createContext();


function ContextApi({children}) {


    const [ loading , setloading ] = useState(true);
    const [ user , setuser ] = useState(null);



    // create user 

    const handleNewuser = ()=>{

        
    }



    const authInfo = {
        setloading , setuser , loading , user

    }

  return (
    <div>

        <MyContext.Provider value={authInfo}>
            {children}

        </MyContext.Provider>





    </div>
  )
}

export default ContextApi
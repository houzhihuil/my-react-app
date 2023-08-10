import React, { useState } from 'react';

function Hook(){
    const [framework, setframework]= useState("React.js");
    return (
    <>
        <h1>My favorite framework is {framework}!</h1>
        
        <button 
          type="button"
          onClick ={() =>setframework("ASP.NET")}
        >ASP.NET</button>
        <button 
          type="button"
          onClick ={() =>setframework("Node.js")}
        >Node.js</button>
        <button 
          type="button"
          onClick ={() =>setframework("Angular")}
        >Angular</button>

        <button 
          type="button"
          onClick ={() =>setframework("Ruby on Rails")}
        >Ruby on Rails</button>    
    </> 
    )
}

export default Hook;
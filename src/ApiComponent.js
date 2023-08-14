import React, { useState, useEffect } from 'react';
import axios from 'axios';


function ApiComponent() {
  const [data, setData] = useState([]);
   // let url= 'https://jsonplaceholder.typicode.com/posts';
  // const url ="https://node-portables.cyclic.app/"
  let url ="https://busy-pink-drill-vest.cyclic.app//"
 
  useEffect(() => {
    axios.get(url)
      .then(response => {
        setData(response.data.produits);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>API Produit Data</h1> 
      <>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
             
            <table border="1" width="60%">
                <thead> 
                    <tr>
                        <th>Id</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Prix</th> 
                        <th>Details</th> 
                    </tr>
                </thead>
                <tbody>
                {data.map(item =>(
                     <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.description}</td>
                        <td>
                        <img src={item.image} alt="laptop.img" width="200"/>
                        </td>
                        <td>{item.prix}</td> 
                        <td>{item.details}</td> 
                     </tr>  
                ))} 
                </tbody>
            </table> 
            </div>
            </>
    </div>
  );
}

export default ApiComponent;


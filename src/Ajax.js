import React, { useEffect, useState } from 'react'; 
 
function Ajax(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsloaded] = useState(false);
    const [items, setItems] = useState([]); 

    // let url  = "/produits.json";
    // let url ="https://node-portables.cyclic.app/"
      
    let url = "https://node-labo1.cyclic.cloud/";
    useEffect(() => {
         
        fetch(url)
        .then(res => res.json())
        .then(
            (result) =>{
                setIsloaded(true);
                setItems(result);
            },
            (error) =>{
                setIsloaded(true);
                setError(error);
            }
        )
    }, [url] )
    if(error){
        return <div> Error: {error.message}</div>;
    }else if (!isLoaded){
        return <div> Chargement...</div>;
    }else {
        return ( 
            <>
            <h1>Ajax Produit Data</h1>
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
                {items.map(item =>(
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
        );
    } 
} 

export default Ajax;

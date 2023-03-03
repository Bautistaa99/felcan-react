import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


const Products=()=>{
    const[products,setProducts]=useState({});


    useEffect(()=>{
        fetch("/data/itemListContainer.json")
        .then((res)=>res.json())
        .then((res)=>setProducts(res));
    },[]);
    return(
        
        <div>
            {typeof products.results==='undefined'?(
                <div>Cargando</div>
                
            ):(
                <ul>
                    {products.results.map((product)=>{
                        
                        
                        return(
                            <li key={product.id}>
                                <Link  to={`/products/${product.id}`}>{product.Brand}</Link>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};


export default Products;

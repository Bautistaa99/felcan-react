import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductsId=()=>{
    const {id}=useParams();
    const [ products,setProducts]= useState ({});

    useEffect(()=>{
        fetch("/data/itemListContainer.json")
        .then((res)=>res.json())
        .then((res)=>setProducts(res));
        },[]);

    
    
}


export default ProductsId;
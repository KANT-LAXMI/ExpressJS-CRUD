// import axios from "axios"
// import { useEffect } from "react"

import axios from "axios";
import { useEffect, useState } from "react"
import {Link,useNavigate} from 'react-router-dom'

const ProductTable=()=>{

    const[prod,setprod]=useState([])
    const navigate=useNavigate()

    const handleDelete=async(id)=>{
        try{
            await axios.delete(`http://localhost:3002/products/${id}`)
            
        }catch(err){
            console.log(err);
        }
    }

const getdata=async()=>{
    try{
        const {data}=await axios.get("http://localhost:3002/products")
        setprod(data)
        console.log(data);
    }catch(err){
        console.log(err);
    }
}

    useEffect(()=>{
        getdata();
    })



    return(
        <>
        <Link to="/"><button>ADD</button></Link>
        <table>
        <thead>
                <tr>
                    <th>PRODUCT ID</th>
                    <th>PRODUCT NAME</th>
                    <th>PRICE</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {
                      prod.map((p)=>{
                        return(
                            <>
                            <tr key={p.pid}>
                                <td>{p.pid}</td>
                                <td>{p.pname}</td>
                                <td>{p.price}</td>
                                <td>
                                    <button id="btn" name="btn" onClick={()=>handleDelete(p.pid)}>DELETE</button>
                                    <Link to={`/update/${p.pid}`}><button>Edit</button></Link>
                                </td>
                            </tr>
                            </>
                        )
                    })
                }



            </tbody>
        </table>
        </>
    )
}

export default ProductTable;

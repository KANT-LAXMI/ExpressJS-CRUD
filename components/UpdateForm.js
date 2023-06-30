import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


function UpdateForm(){
    const[prod,setprod]=useState({pid:"",pname:"",price:0})
    const navigate=useNavigate()
    const params=useParams()

    const getProd=async()=>{
        await axios.get(`http://localhost:3002/products/${params.pid}`)
        .then(({data})=>{
            console.log(data);
            setprod(...data)
        })
    .catch((error)=>{
        console.log(error)
    })
}


const handleUpdate=async()=>{
    try {
        await axios.put(`http://localHost:3002/products/update/${prod.pid}`,prod)
        navigate("/producttable")



    } catch (error) {
        console.log(error)
    }
}
useEffect(()=>{
    getProd();
},[])




    return(
        <>
        Id:<input type="text" name="pid" id="pid" value={prod.pid} disabled></input><br></br>
        Name:<input type="text" name="pname" id="pname" value={prod.pname} onChange={(p)=>setprod({...prod,pname:p.target.value})}></input><br></br>
        Price:<input type="text" name="price" id="price" value={prod.price} onChange={(p)=>setprod({...prod,price:p.target.value})}></input><br></br>
        <button type="button" onClick={handleUpdate}> Update</button>
        </>
    )
}

export default UpdateForm;
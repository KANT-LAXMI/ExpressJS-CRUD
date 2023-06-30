import axios from "axios"
import { Fragment, useState } from "react"
import { useNavigate } from "react-router-dom"

const ProductForm=()=>{
    const[pid,setpid]=useState('')
    const[pname,setpname]=useState('')
    const[price,setprice]=useState('')
    const history=useNavigate()

const handleForm=()=>{
    axios.post(`http://localhost:3002/products/add`,{
            pid:pid,
            pname:pname,
            price:price
    }).then(()=>{history("/producttable")})
}

    return(
        <Fragment>
Product Id:<input type="text" id="pid" name="pid" value={pid} onChange={(e)=>setpid(e.target.value)} ></input><br></br>
Product Name:<input type="text" id="pname" name="pname" value={pname} onChange={(e)=>setpname(e.target.value)}></input><br></br>
Product price:<input type="text" id="price" name="price" value={price} onChange={(e)=>setprice(e.target.value)}></input>
<button type="submit" id="btn" name="btn" onClick={handleForm}>Add Product</button>
        </Fragment>
    )
}

export default ProductForm;
import React,{useState} from 'react'

export const inventoryForm = () =>{
    const [name,setName] = useState('')
    const [quantity,setQuantity] = useState(0)
    const [price,setPrice] = useState(0)
    const [category,setCategory] = useState()

    return(
        <div>
            <h2>Inventory Sheet</h2>
            <label htmlFor="invName">Name</label>
            <input className="invName" type="text" value={name} onChange={()=>setName(e.target.value)} />
            <label htmlFor="invQuantity">Quantity</label>
            <input className="invQuantity" type="number" value={quantity} onChange={()=>setQuantity(e.target.value)} />
            <label htmlFor="invPrice">Price</label>
            <input className="invPrice" type="number" value={price} onChange={()=>setPrice(e.target.value)} />
            <label htmlFor="invCategory">Category</label>
            <input className="invCategory" type="text" value={category} onChange={()=>setCategory(e.target.value)} />
        </div>
    )

}
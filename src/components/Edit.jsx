import React from 'react'
import Swal from 'sweetalert2'
import { useLoaderData } from 'react-router-dom'
export default function Edit() {
     const coffes=useLoaderData()
     console.log(coffes)
     
        const {_id, name, photo, category, supplier,test,detailts,quantity } = coffes;

    const handleOnSubmit=(e)=>{
        e.preventDefault()
        const name=e.target.name.value
        const supplier=e.target.supplier.value
        const category=e.target.category.value
        const quantity=e.target.quantity.value
        const detailts=e.target.detailts.value
        const photo=e.target.photo.value
       
        const updated={name, photo, category, supplier,test,detailts,quantity}
       // console.log(updated)
       fetch(`http://localhost:3000/coffees/${coffes._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updated)
      })
      .then(res => res.json())
      .then(data => {console.log(data)
        if(data.modifiedCount>0){
            Swal.fire({
                title: 'Coffee Updated!',
                text: "You clicked the button!",
                icon: "success"
              });
        }
      })

    }
        
  return (
    <div>
        <h1>Coffee Edit</h1>
        <div className='w-full flex flex-col items-center justify-center'>
        
        <form onSubmit={handleOnSubmit} action=""  className='w-[500px] shadow-2xl p-5'>
        <h1 className='text-2xl font-bold my-2 text-center'>Edit Coffee</h1>
            <div className='flex w-full mx-4'>
                <div className='mx-4'>
                    <div>
                    <fieldset className="fieldset">
                         <legend className="fieldset-legend">Coffee Name</legend>
                         <input defaultValue={name} onChange={handleOnChange} name='name' type="text" className="input" placeholder="Coffee Name" />
                        
                    </fieldset>
                    </div>
                    <div>
                    <fieldset className="fieldset">
                         <legend className="fieldset-legend">Supplier</legend>
                         <input vadefaultValue={supplier}  onChange={handleOnChange} name='supplier'  type="text" className="input" placeholder="Supplier Name" />
                         
                    </fieldset>
                    </div>
                    <div>
                    <fieldset className="fieldset">
                         <legend className="fieldset-legend">Category</legend>
                         <input defaultValue={category} onChange={handleOnChange} name='category'  type="text" className="input" placeholder="Category" />
                        
                    </fieldset>
                    </div>
                </div>
                <div className='mx-4'>
                    <div>
                    <fieldset className="fieldset">
                         <legend className="fieldset-legend">Available Quantity</legend>
                         <input defaultValue={quantity} onChange={handleOnChange} name='quantity'  type="number" className="input" placeholder="Available Quantity" />
                         
                    </fieldset>
                    </div>
                    <div>
                    <fieldset className="fieldset">
                         <legend className="fieldset-legend">Test</legend>
                         <input defaultValue={test} onChange={handleOnChange} name='test'  type="text" className="input" placeholder="Test" />
                         
                    </fieldset>
                    </div>
                    <div>
                    <fieldset className="fieldset">
                         <legend className="fieldset-legend">Details</legend>
                         <input defaultValue={detailts} onChange={handleOnChange} name='detailts'  type="text" className="input" placeholder="Details" />
                    </fieldset>
                    </div>
                </div>
                
            </div>
            <fieldset className="fieldset mx-8 my-4 ">
                         <legend className="fieldset-legend">Photo URL</legend>
                         <input defaultValue={photo} onChange={handleOnChange} name='photo'  type="text" className="input w-full" placeholder="Photo URL" />
                    </fieldset>
            <button className="btn btn-active btn-primary w-full ">Update</button>
        </form>
    </div>
    </div>
  )
}

export const coffeeUpdate = async ({params}) => {
    const res = await fetch(`http://localhost:3000/coffees/${params.id}`);
    return res.json();
  };
  


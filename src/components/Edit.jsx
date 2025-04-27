import React from 'react'

export default function Edit() {

    const handleOnChange=(e)=>{
        const fieldName=e.target.name
        
    }
    const handleOnSubmit=()=>{}
    
  return (
    <div>
        <div className='w-full flex flex-col items-center justify-center'>
        
        <form onSubmit={handleOnSubmit} action=""  className='w-[500px] shadow-2xl p-5'>
        <h1 className='text-2xl font-bold my-2 text-center'>AddCoffee</h1>
            <div className='flex w-full mx-4'>
                <div className='mx-4'>
                    <div>
                    <fieldset className="fieldset">
                         <legend className="fieldset-legend">Coffee Name</legend>
                         <input value={name} onChange={handleOnChange} name='name' type="text" className="input" placeholder="Coffee Name" />
                        
                    </fieldset>
                    </div>
                    <div>
                    <fieldset className="fieldset">
                         <legend className="fieldset-legend">Supplier</legend>
                         <input value={supplier}  onChange={handleOnChange} name='supplier'  type="text" className="input" placeholder="Supplier Name" />
                         
                    </fieldset>
                    </div>
                    <div>
                    <fieldset className="fieldset">
                         <legend className="fieldset-legend">Category</legend>
                         <input value={category} onChange={handleOnChange} name='category'  type="text" className="input" placeholder="Category" />
                        
                    </fieldset>
                    </div>
                </div>
                <div className='mx-4'>
                    <div>
                    <fieldset className="fieldset">
                         <legend className="fieldset-legend">Available Quantity</legend>
                         <input value={quantity} onChange={handleOnChange} name='quantity'  type="number" className="input" placeholder="Available Quantity" />
                         
                    </fieldset>
                    </div>
                    <div>
                    <fieldset className="fieldset">
                         <legend className="fieldset-legend">Test</legend>
                         <input value={test} onChange={handleOnChange} name='test'  type="text" className="input" placeholder="Test" />
                         
                    </fieldset>
                    </div>
                    <div>
                    <fieldset className="fieldset">
                         <legend className="fieldset-legend">Details</legend>
                         <input value={detailts} onChange={handleOnChange} name='detailts'  type="text" className="input" placeholder="Details" />
                    </fieldset>
                    </div>
                </div>
                
            </div>
            <fieldset className="fieldset mx-8 my-4 ">
                         <legend className="fieldset-legend">Photo URL</legend>
                         <input value={photo} onChange={handleOnChange} name='photo'  type="text" className="input w-full" placeholder="Photo URL" />
                    </fieldset>
            <button className="btn btn-active btn-primary w-full ">Update</button>
        </form>
    </div>
    </div>
  )
}

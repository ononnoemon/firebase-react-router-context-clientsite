import { Link } from 'react-router-dom';
import React from 'react';
import Swal from 'sweetalert2';
export default function CoffeeCard({ coffee }) {
  const {_id, name, photo, category, supplier } = coffee;
    const handleOnDelete=(id)=>{
        console.log(id)
        Swal.fire({
            title: "Do you want to Delete this Coffee?",
            //showDenyButton: true,
            icon:'warning',
            showCancelButton: true,
            confirmButtonText: "Yes Delete",
            denyButtonText: `Don't Delete`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
            //   Swal.fire("Saved!", "", "success");
            fetch(`http://localhost:3000/coffees/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(result=>{
                if(result.deletedCount>0){
                    Swal.fire({
                        //position: "top-end",
                        icon: "success",
                        title: "Successfully Deleted",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
              console.log(result)  
            })

            } else if (result.isDenied) {
              Swal.fire("Changes are not saved", "", "info");
            }
          });
     
    
    }
  return (
    <div className="card card-side bg-base-100 shadow-xl h-60">
      <figure>
        <img src={photo} alt={name} className="h-full w-40 object-cover" />
      </figure>
      <div className="flex justify-between items-center w-full px-4">
        {/* Left: Coffee Info */}
        <div>
          <h2 className="card-title text-xl">{name}</h2>
          <p className="text-sm">Supplier: {supplier}</p>
          <p className="text-sm">Category: {category}</p>
        </div>

        {/* Right: Vertical Buttons */}
        <div className="card-actions flex flex-col items-end justify-center gap-2">
          <button className="btn btn-sm btn-primary w-full">View</button>
         <Link to={`/edit/${_id}`}> <button className="btn btn-sm btn-secondary w-full">Edit</button></Link>
          <button onClick={()=>handleOnDelete(_id)} className="btn btn-sm btn-error w-full text-white" >Delete</button>
        </div>
      </div>
    </div>
  );
}

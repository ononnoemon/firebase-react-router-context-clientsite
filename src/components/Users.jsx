import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
export default function Users() {
  const loadedData = useLoaderData();
  console.log(loadedData);
  console.log(loadedData);
  
  const [data,setData]=useState(loadedData)
  let sl = 1;
  const handleOnDelete = (id) => {
    console.log("Delete item id ", id);
    fetch(`http://localhost:3000/users/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.deletedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Successfully Deleted",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(result)
        }
      });
      const dataAfterDelete=data.filter(item=>item._id!==id)
      setData(dataAfterDelete)
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Email</th>
              <th>Crated Time</th>
              <th>Last SignIn Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <th>{sl++}</th>
                <td>{item.userName}</td>
                <td>{item.email}</td>
                <td>{item.lastSignInTime}</td>
                <td>{item.creationTime}</td>
                <td>
                  <button className="btn btn-primary ">View</button>
                  <button className="btn btn-secondary mx-2 ">Update</button>
                  <button
                    onClick={() => handleOnDelete(item._id)}
                    className="btn btn-accent text-white "
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export const userLoader = async () => {
  const res = await fetch("http://localhost:3000/users");
  return res.json();
};

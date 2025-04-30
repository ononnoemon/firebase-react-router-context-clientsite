import React from "react";
import { useLoaderData } from "react-router-dom";

export default function Users() {
  const loadedData = useLoaderData();
  console.log(loadedData);
  let sl = 1;
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loadedData.map((item) => (
              <tr key={item._id}>
                <th>{sl++}</th>
                <td>{item.displayName}</td>
                <td>{item.email}</td>
                <td>Littel, Schaden and Vandervort</td>
                <td>
                  <button className="btn btn-primary ">View</button>
                  <button className="btn btn-secondary mx-2 ">Update</button>
                  <button className="btn btn-accent ">Delete</button>
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

import React from "react";
import { useLoaderData } from "react-router-dom";

export default function Users() {
    const loadedData=useLoaderData()
    console.log(loadedData)
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>company</th>
              <th>location</th>
              <th>Last Login</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>12/16/2020</td>
              <td>Blue</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export const userLoader =async () => {
    const res=await fetch("http://localhost:3000/users")
    return res.json()
}
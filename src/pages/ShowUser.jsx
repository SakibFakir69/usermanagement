import React from "react";
import { NavLink } from "react-router-dom";

function ShowUser({ data , index,handelDeleteitem}) {
  const { name, email, status, gender ,_id} = data;



  const handelDelete = (id)=>{

    fetch(`http://localhost:5000/user/${id}`,
        {
            method : 'DELETE'
        }
     
    )
    .then( res => res.json)
    console.log(id);
    handelDeleteitem(id);


    alert("cliked")


  }

  

  return (
    <div>
      <div class="px-2">



       


  
        <table class="table table-zebra">
          <tbody>
            <tr>

              <th>{index}</th>
              <td>{name}</td>
              <td>{email}</td>
              <td>{gender}</td>
              <td>{status}</td>
              <div>
                <td className="cursor-pointer" onClick={()=> handelDelete(_id)}>X</td>

                <NavLink className="cursor-pointer" to={`/updateData/${_id}`}>Up</NavLink>
              </div>
            </tr>
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default ShowUser;

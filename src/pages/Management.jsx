import React from "react";

function Management() {
  return (
    <div className="shadow-md border border-black mt-10 p-2">
      <h1>This is management user</h1>

      <div class="px-2">
        <table class="table table-zebra">
            
          <thead className="bg-black text-white">
            <tr>

                <th >Id</th>
              <th >Name</th>
              <th></th>
           
           
              <th>Email</th>
              <th>Gender</th>
              <th>Status</th>
              <th>Action</th>

            </tr>
          </thead>


          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>Male</td>
              <td>Active</td>
              <div>
                <td>X</td>
                <td>Up</td>
              </div>
            </tr>

           

           
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Management;

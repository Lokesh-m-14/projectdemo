import React from 'react'
import data from './data'

function Table() {
  return (
      <div>
    
          <tr>
                    <th>ID</th>
                    <th>Employee Name</th>
                    <th>Status</th>
                    <th>Salary</th>
                    <th>Joining date</th>
                    
                </tr>

                <td>
                    {
                      data.map((res)=>(<option>{res.id}</option>))
                    }
                </td>

                <td style={{ border: '1px solid black' }}>
                   {
                     data.map((res)=> (<option>{res.name}</option>))
                   }
                </td>

                <td>
                  <tr>
                    <select>
                    <option>Active</option>
                    <option>InActive</option>
                    </select>
                    </tr>

                    <tr>
                    <select>
                    <option>Active</option>
                    <option>InActive</option>
                    </select>
                    </tr>

                    <tr>
                    <select>
                    <option>Active</option>
                    <option>InActive</option>
                    </select>
                    </tr>

                    <tr>
                    <select>
                    <option>Active</option>
                    <option>InActive</option>
                    </select>
                    </tr>

                    <tr>
                    <select>
                    <option>Active</option>
                    <option>InActive</option>
                    </select>
                    </tr>

                    <tr>
                    <select>
                    <option>Active</option>
                    <option>InActive</option>
                    </select>
                    </tr>

                    <tr>
                    <select>
                    <option>Active</option>
                    <option>InActive</option>
                    </select>
                    </tr>

                    <tr>
                    <select>
                    <option>Active</option>
                    <option>InActive</option>
                    </select>
                    </tr>

                    <tr>
                    <select>
                    <option>Active</option>
                    <option>InActive</option>
                    </select>
                    </tr>

                    <tr>
                    <select>
                    <option>Active</option>
                    <option>InActive</option>
                    </select>
                    </tr>

                    </td>

                <td>
                   {
                     data.map((res)=> (<option>{res.salary}</option>))
                   }
                </td>

                <td>
                    <tr><input type='date' /></tr>
                    <tr><input type='date' /></tr>
                    <tr><input type='date' /></tr>
                    <tr><input type='date' /></tr>
                    <tr><input type='date' /></tr>
                    <tr><input type='date' /></tr>
                    <tr><input type='date' /></tr>
                    <tr><input type='date' /></tr>
                    <tr><input type='date' /></tr>
                </td>
              
        </div>
    )
}

export default Table;







// import React from "react";
// import data from "./data"

// function App() {
//   return (
//     <div>
//       <label>
//         Employee details:
//         <select>
//           <option value='employee'>Choose Employee</option>
//           {
//             data.map((res)=> (<option>{res.id}{res.name}</option>))
//           }
//         </select>
//       </label>
//     </div>
    
//   );
// }


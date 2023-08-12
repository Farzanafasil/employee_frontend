
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import AddEmployee from './AddEmployee'

function UserDashboard() {

    const [data,setData]=useState([]);
    const [userrole, setUserRole] = useState('');
    const fetchDataFromApi= ()=>{
        axios.get("http://localhost:5000/api/employeelist/" ).then(
        (response)=>{
            console.log(response.data)
            setData(response.data)
        }
        )
    }
    useEffect(() => {
        const storedUserRole = sessionStorage.getItem('userrole');
        setUserRole(storedUserRole);
        fetchDataFromApi();
      }, []); 
  


    return (
        <div>
             <div className="container mt-5 pt-5">
    <div>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Position</th>
      <th scope="col">Location</th>
      <th scope="col">Salary</th>
   
    </tr>
  </thead>
  <tbody>
    
    {data.map((value,index)=>{
                return<tr key={index}>
                    <td>{index}</td>
              <td>{value.name}</td>
              <td>{value.position}</td>
              <td>{value.location}</td>
              <td>{value.salary}</td>
              
              </tr>
              })}
  </tbody>
</table>
</div>
    </div>
        </div>
      );
  

 





    
}

export default UserDashboard
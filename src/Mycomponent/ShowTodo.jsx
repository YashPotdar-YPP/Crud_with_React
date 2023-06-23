import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export default function ShowTodo() {
  const [data, setData] = useState([]);
  let getApi = () => {
    fetch("https://average-fish-sundress.cyclic.app/allContacts")
      .then((Response) => Response.json())
      .then((json) => {
        console.log(json)
        setData(json)
      })
  };
  useEffect((getApi), [])
  return (

    <div>
      My Api
      <button onClick={getApi}>GET</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <div>
        <ul>
          {data.map((item) => {
            <li>{item._id}</li>
          })}
        </ul>
      </div>
    </div >


  )
}

{/* <table className="table table-bordered"> */ }
{/* <thead>
            <tr >
              <th scope="col" className='text-center'>First</th>
              <th scope="col" className='text-center'>Last</th>
              <th scope="col" className='text-center'>Handle</th>
            </tr>
          </thead>
          <tbody>

            {data.map(item => {
              <tr>
                <td>{item.firstName}</td>
                <td></td>
              </tr>
            })}


          </tbody> */}
{/* </table> */ }


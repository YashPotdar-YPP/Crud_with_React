import React, { useEffect, useState } from "react";
import Modal from "./Modal";

export default function ShowTodo() {
  const [data, setData] = useState([]);

  let getapi = () => {
    fetch("https://average-fish-sundress.cyclic.app/allContacts")
      .then((Response) => Response.json())
      .then((Response) => {
        setData(Response);
      });
  };

  const delete_api = (id) => {
    alert(id);
    fetch(`https://average-fish-sundress.cyclic.app/removeContact/${id}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    }).then((Response) => {
      Response.json();
    });
  };


  useEffect(() => {
    getapi();
  }, []);

  return (
    <div>
      <table className="table text-center container ">
        <thead>
          <tr>
            <th scope="col">Firstname</th>
            <th scope="col">Lastname</th>
            <th scope="col">Phone no.</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.phoneNumber}</td>
                <div className="d-flex">
                  <button
                    className="btn bg-danger mb-1"
                    onClick={() => {
                      delete_api(item._id);
                    }}
                  >
                    Delete
                  </button>
                
                  <Modal  id={item}/>
                </div>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

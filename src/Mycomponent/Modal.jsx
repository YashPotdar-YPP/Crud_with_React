
import React, { useState } from "react";

export default function Modal({id}) {
  const [firstName, setfName] = useState();
  const [lastName, setlName] = useState();
  const [phoneNumber, setphone] = useState();
  const edit_api = () => {
  const updataData  ={firstName , lastName  ,phoneNumber};
  alert(id._id)
    fetch(`https://average-fish-sundress.cyclic.app/updateContact/${id._id}`,{
      method : "PUT",
      headers: {"Content-type" : "application/json"},
      body  :JSON.stringify(updataData)

    })
    setfName("")
    setlName("")
    setphone("")
  };
  const edit_btn =  ()=>{
    alert(id._id)
  }
  return (
    <div>
      <button
        type="button"
        class="btn bg-primary ms-1"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={edit_btn}
      >
        Edit
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form className="container border mt-5 p-4">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label" >
                    Firstname
                  </label>

                  <input type="text" className="form-control" value={firstName} onChange={(e)=>{setfName(e.target.value)}}/>
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Lastname
                  </label>

                  <input type="text" className="form-control" value={lastName} onChange={(e)=>{setlName(e.target.value)}}/>
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Phonenumber
                  </label>

                  <input type="number" className="form-control" value={phoneNumber} onChange={(e)=>{setphone(e.target.value)}}/>
                </div>

                <button
                  type="button"
                  className="btn btn-primary mt-4"
                  onClick={edit_api}
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

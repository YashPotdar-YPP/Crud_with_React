import React, { useState } from "react";

export default function AddTodo() {
  const [firstName, setfName] = useState("");
  const [lastName, setlName] = useState("");
  const [phoneNumber, setphone] = useState("");

  let add = () => {
    let post = { firstName, lastName, phoneNumber };
    fetch("https://average-fish-sundress.cyclic.app/addContact", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(post),
    }).then((Response) => {
      Response.json();
    });

    setfName("");
    setlName("");
    setphone("");
};
  return (
    <div>
      <form className="container border mt-5 p-4">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Firstname
          </label>

          <input
            type="text"
            className="form-control"
            id="fName"
            value={firstName}
            onChange={(e) => {
              setfName(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Lastname
          </label>

          <input
            type="text"
            className="form-control"
            id="lName"
            value={lastName}
            onChange={(e) => {
              setlName(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Phonenumber
          </label>

          <input
            type="number"
            className="form-control"
            id="phone"
            value={phoneNumber}
            onChange={(e) => {
              setphone(e.target.value);
            }}
          />
        </div>

        <button type="button" className="btn btn-primary mt-4" onClick={add}>
          Submit
        </button>
      </form>
    </div>
  );
}

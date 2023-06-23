import React from 'react'

export default function AddTodo() {
    return (
        <div>
            <form className='container border mt-5 p-4'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Firstname</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Lastname</label>
                    <input type="text" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Phonenumber</label>
                    <input type="number" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary mt-4">Submit</button>
            </form>
        </div>
    )
}

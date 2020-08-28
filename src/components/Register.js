import React, { useState, useEffect, useContext } from 'react'
import { AppContext } from "./Context/AppContext"

const Register = () => {
  const { create } = useContext(AppContext)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });
  useEffect(() => {
    console.log(formState);
  }, [formState])

  const handleChange = (event) => {
    event.persist();
    setFormState((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };
  const handleSubmit = (event) => {
    create(event, formState)
  }
    // Register METHOD
    const register = async (event, values) => {
      event.preventDefault();
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values }),
      };
  
      const result = await fetch(
        "http://localhost:5000/users/register", requestOptions
      );
  
      const token = await result.json();
      console.log(token); 
    };
  return (
    <div>
      <div className="row mt-5">
        <div className="col-md-6 m-auto">
          <div className="card card-body">
            <h1 className="text-center mb-3">
              <i className="fas fa-user-plus"></i> Register
        </h1>

            {/* <%- include ('./partials/messages') %> */}
            <form action="/users/register" method="POST" onSubmit={handleSubmit}>
              <div className="form-group">
                <label hmtlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Enter Name"
                  value={formState.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter Email"
                  value={formState.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Create Password"
                  value={formState.password}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label for="password2">Confirm Password</label>
                <input
                  type="password"
                  id="password2"
                  name="password2"
                  className="form-control"
                  placeholder="Confirm Password"
                  value={formState.password2}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-success btn-block">
                Register
          </button>
            </form>
            <p className="lead mt-4">Have An Account? <a href="/users/login">Login</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register


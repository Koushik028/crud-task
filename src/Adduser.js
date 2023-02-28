import React from "react";
import axios from "axios";
import { formik, useFormik } from "formik";
import { Link } from "react-router-dom";

function Adduser() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validate: (values) => {
      let error = {};
      console.log(values);
      if (!values.name) {
        error.name = "Please enter a value";
      }

      if (values.name && (values.name.length <= 2 || values.name.length > 15)) {
        error.name = "Username must be between 3 to 15 characters";
      }

      if (!values.email) {
        error.email = "please enter a email";
      }

      if (
        values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        error.email = "please enter a valid email";
      }

      return error;
    },

    onSubmit: async (values) => {
      try {
        const userdata = await axios.post(
          "https://63e61d3483c0e85a868ce98f.mockapi.io/api/v1/users",
          values
        );
        alert("Success");
      } catch (error) {
        alert("Error");
      }
    },
  });

  return (
    <div class="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add User</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Username</label>
                  <input
                    placeholder="Enter your name"
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    type={"text"}
                    className={`form-control ${
                      formik.touched.name && formik.errors.name
                        ? "error-box"
                        : ""
                    } ${
                      formik.touched.name && !formik.errors.name
                        ? "success-box"
                        : ""
                    }`}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <span style={{ color: "red" }}>{formik.errors.name}</span>
                  ) : null}
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    placeholder="Enter your e-mail address"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    type={"text"}
                    className={`form-control ${
                      formik.touched.email && formik.errors.email
                        ? "error-box"
                        : ""
                    } ${
                      formik.touched.email && !formik.errors.email
                        ? "success-box"
                        : ""
                    }`}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <span style={{ color: "red" }}>{formik.errors.email}</span>
                  ) : null}
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Adduser;

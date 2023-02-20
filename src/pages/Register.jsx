import axios from 'axios'
import { Formik, useFormik } from 'formik'
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as yup from "yup"
import hacker from "../pages/hacker.jpg"

export const Register = () => {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            cpassword: "",

        },
        validationSchema: yup.object({
            name: yup.string().required().min(8),
            email: yup.string().required().email(),
            password: yup.string().required().min(2),
            cpassword: yup.string().required().oneOf([yup.ref("password")])


        }),
        onSubmit: async (values) => {
            await axios.post("http://localhost:5000/posts", values)
            navigate('/')
        }

    })

    return <>

        <div style={{
            backgroundPosition: "center",
            width: "100vw",
            height: "38rem",
            backgroundImage: `url('${hacker}')`,
        }}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <div className="card my-4">
                            <div className="card-header text-center fs-2">Signup</div>
                            <div className="card-body">
                                <form onSubmit={formik.handleSubmit}>
                                    <div>
                                        <label for="name" className="form-label fs-4">First name</label>
                                        <input
                                            value={formik.values.name}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            type="text"
                                            className={formik.touched.name && formik.errors.name
                                                ? "form-control is-invalid"
                                                : "form-control"
                                            }
                                            id="name"
                                            placeholder="Enter your name"
                                        />
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">Please choose a username.</div>
                                    </div>
                                    <div className="mt-2">
                                        <label for="email" className="form-label fs-4">First Email</label>
                                        <input
                                            name='email'
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            type="text"
                                            className={formik.touched.email && formik.errors.email
                                                ? "form-control is-invalid"
                                                : "form-control"}
                                            id="email"
                                            placeholder="Enter Your Email"
                                        />
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">Please choose a username.</div>
                                    </div>
                                    <div className="mt-2">
                                        <label for="password" className="form-label fs-4">Password</label>
                                        <input
                                            name='password'
                                            value={formik.values.password}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            type="text"
                                            className={formik.touched.password && formik.errors.password
                                                ? "form-control is-invalid" : "form-control"}
                                            id="password"
                                            placeholder="Enter Your Password"
                                        />
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">Please choose a password.</div>
                                    </div>
                                    <div className="mt-2">
                                        <label for="cpassword" className="form-label fs-4"
                                        >Confirm Password</label
                                        >
                                        <input
                                            name='cpassword'
                                            value={formik.values.cpassword}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            type="text"
                                            className={formik.touched.cpassword && formik.errors.cpassword
                                                ? "form-control is-invalid"
                                                : "form-control"
                                            }
                                            id="cpassword"
                                            placeholder="Confirm Your Password"
                                        />
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">
                                            Please Recheck Your Password.
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100 mt-3">
                                        Signup
                                    </button>
                                    <p className="text-center mt-3">
                                        Already Have Account? <Link to={"/"}>Login</Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

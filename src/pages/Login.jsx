import axios from 'axios'
import { useFormik } from 'formik'
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as yup from "yup"
import { Context } from '../App'
import dark from "../pages/dark.jpg"

const Login = () => {
    const { setAuth } = useContext(Context)
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues:
            { email: "", password: "" },
        validationSchema: yup.object({
            email: yup.string().required().email(),
            password: yup.string().required()
        }),
        onSubmit: async (value) => {
            const { data } = await axios.get("http://localhost:5000/posts")
            const x = data.find((item) => item.email === value.email && item.password === value.password)
            if (x) {
                setAuth(x)
                navigate("/dash")
            }
        }

    })
    return <>
        <div style={{
            backgroundPosition: "center",
            width: "100vw",
            height: "30rem",
            backgroundImage: `url('${dark}')`,
        }}>
            <div className="container  my-4">
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <div className="card my-4">
                            <div className="card-header text-center fs-2">Login</div>
                            <div className="card-body">
                                <form onSubmit={formik.handleSubmit}>
                                    <div>
                                        <label for="email" className="form-label fs-4">First Email</label>
                                        <input
                                            name='email'
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            type="text"
                                            className={formik.touched.email && formik.errors.email
                                                ? "form-control is-invalid"
                                                : "form-control"
                                            }
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
                                            type="password"
                                            className={formik.touched.password && formik.errors.password
                                                ? "form-control is-invalid"
                                                : "form-control"
                                            }
                                            id="password"
                                            placeholder="Enter Your Password"
                                        />
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">Please choose a username.</div>
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100 mt-3">
                                        Login
                                    </button>
                                    <p className="text-center mt-3">
                                        Dont Have Account? <Link to={"/register"}>Create Account</Link>
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

export default Login
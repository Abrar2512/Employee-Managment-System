import axios from 'axios'
import { useFormik } from 'formik'
import React, { useContext, useEffect, useState, useSyncExternalStore } from 'react'
import { useNavigate } from 'react-router-dom'
import * as yup from "yup"
import { Context } from '../App'
import girlImage from "../pages/girlImage.jpg"
import raat from "../pages/raat.jpg"

const Dashboard = () => {
    const { auth } = useContext(Context)
    const navigate = useNavigate()
    const [id, setId] = useState()
    const [uedit, setUedit] = useState({ task: "", desc: "", name: "" })

    const formik = useFormik(
        {
            initialValues: { task: "", desc: "", priority: "", name: "", texarea: "" },
            validationSchema: yup.object({
                task: yup.string().required(),
                desc: yup.string().required(),
                name: yup.string().required(),
                priority: yup.string().required(),
                texarea: yup.string().required()

            }),
            onSubmit: async (values) => {
                await axios.post("http://localhost:5000/employee", values)

                navigate("/chart")
                GetData()
            }
        })




    return <>

        <div style={{
            backgroundPosition: "center",
            width: "100vw",
            height: "49rem",
            backgroundImage: `url('${raat}')`,
        }}>
            <div className="container " data-bs-them="dark"
            >
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <div className="card my-4">
                            <div className="card-header text-center fs-2 bg-warning">Employee Detailes.</div>
                            <div style={{
                                width: '100%',
                                height: '100%',
                                backgroundImage: `url('${girlImage}')`,
                            }} className="card-body">
                                <form onSubmit={formik.handleSubmit}>
                                    <div>
                                        <label for="name" className="form-label text-decoration-underline fs-5">Employee First Name</label>
                                        <input

                                            name='name'
                                            value={formik.values.name}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            type="text"
                                            className={formik.touched.name && formik.errors.name
                                                ? "form-control is-invalid " : "form-control"
                                            }
                                            id="name"
                                            placeholder="Enter Your Fist Name"
                                        />
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">Please add First Name.</div>
                                        <div>

                                            <label for="task" className="form-label my-3 text-decoration-underline fs-5">Employee Last Name</label>
                                            <input
                                                name='task'
                                                value={formik.values.task}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                type="text"
                                                className={formik.touched.task && formik.errors.task
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                                }
                                                id="task"
                                                placeholder="Enter Your Last Name"
                                            />
                                            <div className="valid-feedback">Looks good!</div>
                                            <div className='invalid-feedback'>please add your Last Name</div>
                                        </div>

                                    </div>
                                    <div className="mt-2 my-2">
                                        <label for="desc" className="form-label my-3 text-decoration-underline fs-5">Enter Your Phone</label>
                                        <input
                                            name='desc'
                                            value={formik.values.desc}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            type="number"
                                            className={formik.touched.desc && formik.errors.desc
                                                ? "form-control is-invalid"
                                                : "form-control"
                                            }
                                            id="desc"
                                            placeholder="Enter Your Number"
                                        />
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">Please add Phone Number</div>
                                    </div>
                                    <div className='my-4'>
                                        <label for="task" className="form-label text-decoration-underline fs-5">Employee Adrress</label>
                                        <textarea
                                            name="texarea"
                                            value={formik.values.texarea}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className={formik.touched.texarea && formik.errors.texarea
                                                ? "form-control is-invalid"
                                                : "form-control"
                                            }
                                            placeholder='Enter Your Adress' id="" cols="38" rows="3"></textarea>
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">Please add Correct Adress</div>
                                    </div>
                                    <div className='form-check my-3'>
                                        <label className='form-check-label fs-5' for="ac  ">active</label>
                                        <input name="status" className='form-check-input' type="checkbox" id="ac" value="active" />
                                    </div>

                                    {/* <div className='form-check my-3'>
                                    <input className='form-check-input' name="status" type="radio" id="uc" value="inactive" />
                                    <label className='form-check-label' for="uc">Inactive</label>
                                </div> */}
                                    <div className="mt-2">
                                        <label for="priority" className='text-decoration-underline  fs-3'> Priority</label>
                                        <select className={formik.touched.priority && formik.errors.priority
                                            ? "form-select is-invalid"
                                            : "form-select"
                                        } id="priority"
                                            name='priority'
                                            value={formik.values.priority}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        >
                                            <option selected>Select Position</option>
                                            <option value="Front-End Developer">Front-End Developer</option>
                                            <option value="Backend Developer ">Backend Developer  </option>
                                            <option value="Fullstack Developer ">Fullstack Developer  </option>
                                            <option value="UI/UX Developer">UI/UX Developer</option>
                                            <option value="Data Scientist">Data Scientist</option>
                                            <option value="UI Desighner">UI Desighner</option>
                                            <option value="Data Analyst">Data Analyst</option>
                                        </select>
                                    </div>
                                    <button type="submit" className="btn btn-outline-info text-dark fs-5 w-100 mt-3">
                                        Add Todo
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>




    </>
}

export default Dashboard
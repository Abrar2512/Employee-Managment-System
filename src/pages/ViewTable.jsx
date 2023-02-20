import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import * as yup from "yup"
import bubble from "../pages/bubble.jpg"
import techno from "../pages/techno.jpg"

const ViewTable = () => {
    const [user, setUser] = useState([])
    const [deletbtn, setDeletbtn] = useState()
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
            onSubmit: async () => { }
        })
    const GetData = async () => {
        const { data } = await axios.get("http://localhost:5000/employee")
        setUser(data)
    }
    const handleDelet = async () => {
        await axios.delete(`http://localhost:5000/employee/${deletbtn.id}`)
        GetData()
    }
    const handleUpdate = async () => {
        await axios.put(`http://localhost:5000/employee/${deletbtn.id}`, deletbtn)
        GetData()
    }
    useEffect(() => {
        GetData()
    }, [])
    return <>
        <div style={{
            backgroundPosition: "center",
            width: "100vw",
            height: "91vh",
            backgroundImage: `url('${bubble}')`,
        }}>



            <table className="table table-dark table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Position</th>
                        <th scope="col">Adress</th>
                        <th scope="col">Mo.Number</th>
                        <th scope="col">Handle Delete</th>
                        <th scope="col">Handle Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((item) => <tr>
                            <th scope="row">{item.id}</th>
                            <td>{item.name}</td>
                            <td>{item.task}</td>
                            <td>{item.priority}</td>
                            <td>{item.texarea}</td>
                            <td>{item.desc}</td>
                            <td>
                                <button onClick={e => setDeletbtn(item)} type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>

                            </td>
                            <td>
                                <button onClick={e => setDeletbtn(item)} type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModall" >Edit</button>

                            </td>
                        </tr>
                        )
                    }



                    <div className="modal fade" id="exampleModall" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header bg-secondary">
                                    <h5 className="modal-title" id="exampleModalLabel">Please Update Correct Information</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body bg-warning">
                                    <div className="container" data-bs-them="dark">
                                        <div className="row">
                                            <div className="col-sm-6 offset-sm-3">
                                                <div className="card">
                                                    <div style={{
                                                        backgroundPosition: "center",
                                                        width: "30vw",
                                                        height: "90vh",
                                                        backgroundImage: `url('${techno}')`,
                                                    }} className="card-body">

                                                        <div>
                                                            <label for="name" className="form-label text-decoration-underline fs-4 text-dark">Employee First Name</label>
                                                            <input
                                                                onChange={e => setDeletbtn({ ...deletbtn, name: e.target.value })}
                                                                value={deletbtn?.name}
                                                                name='name'
                                                                type="text"
                                                                className="form-control"
                                                                id="name"
                                                                placeholder=" Fist Name"
                                                            />
                                                            <div className="valid-feedback">Looks good!</div>
                                                            <div className="invalid-feedback">Please add First Name.</div>
                                                            <div>

                                                                <label for="task" className="form-label my-3 text-decoration-underline  text-warning">Employee Last Name</label>
                                                                <input
                                                                    onChange={e => setDeletbtn({ ...deletbtn, task: e.target.value })}
                                                                    value={deletbtn?.task}
                                                                    name='task'
                                                                    className="form-control"
                                                                    id="task"
                                                                    placeholder=" Last Name"
                                                                />
                                                                <div className="valid-feedback">Looks good!</div>
                                                                <div className='invalid-feedback'>please add your Last Name</div>
                                                            </div>

                                                        </div>
                                                        <div className="mt-2 my-2">
                                                            <label for="desc" className="form-label my-3 text-decoration-underline  text-warning">Enter Your Phone</label>
                                                            <input
                                                                onChange={e => setDeletbtn({ ...deletbtn, desc: e.target.value })}
                                                                value={deletbtn?.desc}
                                                                name='desc'
                                                                type="number"
                                                                className="form-control"

                                                                id="desc"
                                                                placeholder="Update Number"
                                                            />
                                                            <div className="valid-feedback">Looks good!</div>
                                                            <div className="invalid-feedback">Please add Phone Number</div>
                                                        </div>
                                                        <div className='my-4'>
                                                            <label for="task" className="form-label text-decoration-underline  text-warning">Employee Adrress</label>
                                                            <textarea
                                                                name="texarea"
                                                                className="form-control"
                                                                value={deletbtn?.texarea}
                                                                onChange={e => setDeletbtn({ ...deletbtn, texarea: e.target.value })}
                                                                placeholder=' Adress' id="" cols="38" rows="3"></textarea>
                                                            <div className="valid-feedback">Looks good!</div>
                                                            <div className="invalid-feedback">Please add Correct Adress</div>
                                                        </div>


                                                        <div className="mt-2">
                                                            <label for="priority" className='text-decoration-underline fs-5 text-warning'> Priority</label>
                                                            <select className="form-select"
                                                                id="priority"
                                                                name='priority'
                                                                value={deletbtn?.priority}
                                                                onChange={e => setDeletbtn({ ...deletbtn, priority: e.target.value })}
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
                                                        <button data-bs-dismiss="modal" onClick={handleUpdate} type="button" className="btn btn-secondary w-100 mt-3">
                                                            Update Details
                                                        </button>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body text-dark ">
                                    <h4>
                                        Are You Sure You Want To Delete This... </h4>
                                </div>
                                <div className="modal-footer">
                                    <button onClick={handleDelet} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Yes</button>
                                    <button type="button" className="btn btn-primary">No</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </tbody>
            </table >
        </div>
    </>
}


export default ViewTable
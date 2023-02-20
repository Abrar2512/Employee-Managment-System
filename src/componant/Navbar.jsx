import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../App'

const Navbar = () => {
    const navigate = useNavigate()
    const { auth, setAuth } = useContext(Context)

    return <>
        <nav className={auth ? "bg-info" : "navbar navbar-expand-lg bg-danger"}>
            <div className="container-fluid">
                <Link className="navbar-brand text-center" to={"/"}>Employee Managment System</Link>
                <p className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span className="navbar-toggler-icon"></span>
                </p>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">

                        {
                            auth ? <>

                                <Link className="nav-link" to={"/chart"}>View The Chart</Link>
                                <Link className="nav-link" to={"/dash"}>Dashboard</Link>




                            </>
                                : <>
                                    <Link className="nav-link active" to={"/"}>Login</Link>
                                    <Link className="nav-link" to={"/register"}>Register</Link>
                                </>

                        }
                        <div className="dropdown " style={{ marginLeft: 650 }}>
                            <p className=" dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >

                                {
                                    auth && <><div className='text-decoration-underline'>User Login are.</div> {auth.name} </> || " Please Login The Page"
                                }
                            </p>
                            <ul className="dropdown-menu">
                                <li><a onClick={e => {
                                    setAuth(null)
                                    auth && navigate("/") || <Link className="nav-link" to={"/dash"}>Dashboard</Link>

                                }} className="dropdown-item" href="#">{auth && "Logout" || <><div
                                    className='text-decoration-underline text-danger'>Sorry You Are Not Login The Page</div></>}</a></li>

                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default Navbar
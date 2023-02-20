import React, { useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Context } from "../App"

const LoginOnly = ({ compo }) => {
    const { auth, setAuth } = useContext(Context)

    if (auth) {
        return compo

    } else {
        return <Navigate to={"/"} />
    }
}

export default LoginOnly
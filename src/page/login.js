import React from 'react';






const Login = (props) => {



    const submit = () => {

        props.history.push('/dashboard')
    }


    return(
        <>
        Login Page
        <button onClick={() => submit()}>Login</button>
        </>
    )
}

export default Login;
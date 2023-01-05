
import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import AuthForm, { Auth } from '../../Components/AuthForm'

function Login() {
    const navigate = useNavigate()

    function handleLogin({ user, password }: Auth) {
        if(user === 'desafiosharenergy' && password === 'sh@r3n3rgy') {
            return navigate("/users")
        } else { 
            console.log('error')
        }
    }

  return (
    <div className='h-screen flex justify-center items-center'>
        <div className='w-1/2 flex items-center justify-center '>
            <img width={500} src={logo} alt="Logo" />
        </div>
        <div className='w-1/2 h-full px-10 flex items-center justify-center  bg-light'>
            <AuthForm submitFormButtonAction={handleLogin} formTitle='Faça seu login!' submitFormButton='Entrar' linkDescription='Não possui login? Faça seu cadastro' />
        </div>
    </div>
  )
}

export default Login

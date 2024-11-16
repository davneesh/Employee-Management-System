import React, { useCallback, useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    
    const submitHandler =(e) => {
        e.preventDefault()
        console.log("email is",email)
        console.log("password is",password)

        setEmail("")
        setPassword("")
        
    }
  return (
   <div className='flex h-screen w-screen items-center justify-center'>
    <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <form 
        onSubmit={(e) => {
            submitHandler(e)
        }}
        className='flex flex-col items-center justify-center'>
            <input 
            value={email}
            onChange={(e) =>
            {
                setEmail(e.target.value)
            }
            }
            required className='border-2  outline-none bg-transparent border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-grey-400' type="email" placeholder='Enter your Email'></input>
            <input 
            value={password}
            onChange={(e) =>{
                setPassword(e.target.value)
            }}
            required className='border-2 outline-none bg-transparent border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-grey-400 mt-3' type="password" placeholder='Enter your Password'></input>
            <button className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white'>Log in</button>
        </form>
    </div>
    
   </div>
  )
}

export default Login
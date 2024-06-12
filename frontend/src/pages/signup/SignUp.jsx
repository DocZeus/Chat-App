import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import { set } from 'mongoose'

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    })

    const handleCheckboxChange = (gender) => {
        setInputs({...inputs, gender})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputs)
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    SignUp
                    <span className='text-red-500'> ConvoTex</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Full Name</span>
                        </label>
                        <input type='text' placeholder='Jack Sparrow' className='w-full input input-bordered h-10'
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type='text' placeholder='jacksparrow' className='w-full input input-bordered h-10'
                        value={inputs.username}
                        onChange={(e) => setInputs({ ...inputs, username: e.target.value})} />
                    </div>
                    <div>
                        <label className='label'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input type='password' placeholder='********' className='w-full input input-bordered h-10'
                        value={inputs.password}
                        onChange={(e) => setInputs({ ...inputs, password: e.target.value})} />
                    </div>
                    <div>
                        <label className='label'>
                            <span className='text-base label-text'>Confirm Password</span>
                        </label>
                        <input type='password' placeholder='********' className='w-full input input-bordered h-10'
                        value={inputs.confirmPassword}
                        onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value})} />
                    </div>
                    <GenderCheckbox onCheckboxChange = {handleCheckboxChange} selectedGender={inputs.gender} />
                    <div className='text-sm text-left mt-1 mb-1'>
                        Already have an account?&nbsp;
                        <Link to={'/login'} className='hover:underline hover:text-blue-600 mt-2 inline-block'>
                            Login
                        </Link>
                    </div>
                    <div>
                        <button className='text-lg text-red-500 btn btn-block btn-sm mt-2'>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { FaRegRectangleXmark } from 'react-icons/fa6'
import { Input } from './ui/input'
import { Button } from './ui/button'
import googleLogp from "../assets/glogo.png"
import { API_ROOT } from '@/lib/utils'

const SignUp = ({setIsShowingLogin, setIsShowingSignup}: {setIsShowingLogin: Dispatch<SetStateAction<boolean>>, setIsShowingSignup: Dispatch<SetStateAction<boolean>>}) => {
    const [formErr, setFormErr] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const usernameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const passRef = useRef<HTMLInputElement>(null)
    const cfPassRef = useRef<HTMLInputElement>(null)
    const modalRef = useRef<HTMLDivElement>(null)

    


    useEffect(() => {
        document.body.style.overflow = 'hidden'
        const handleClickOutside = (e: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                setIsShowingSignup(false)
            }
        }
    
        document.addEventListener("mousedown", handleClickOutside)

    
        return () => {
          document.body.style.overflow = 'auto'
          document.removeEventListener("mousedown", handleClickOutside)

        }
      }, [])


    const submitLogin = async () => {

        const emailMatch = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/
        console.log(emailMatch.test(emailRef.current?.value ?? ""))
        console.log(emailRef.current?.value);
        console.log(passRef.current?.value);

        let errors = {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
        setFormErr(errors)
        let isErr;

        if (!emailMatch.test(emailRef.current?.value ?? "")) {
            errors.email = "Please enter a valid email"
            isErr = true
        }
        if (usernameRef.current?.value.trim() == "" || (usernameRef.current && usernameRef.current.value.length < 3)) {
            errors.username = "Username must be at least 4 characters long"
            isErr = true
        } 

        if (passRef.current?.value.trim() == "" || (passRef.current && passRef.current.value.length < 8)) {
            errors.password = "Password must be at least 8 characters long"
            isErr = true
        } 

        if (cfPassRef.current?.value != passRef.current?.value || cfPassRef.current?.value == "") {
            errors.confirmPassword = "Passwords do not match"
            isErr = true
        }

        if (isErr) {
            console.log(errors);
            
            setFormErr(errors)
            return
        }


        const resp = await fetch(API_ROOT + "/api/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: emailRef.current?.value,
                password: passRef.current?.value
            })
        })

        console.log(resp.status);

        console.log(resp.body);
        
        
        
    }

  return (
    <div  className="absolute inset-0 bg-black/50 flex justify-center pt-20">
        <div ref={modalRef} className="w-[450px] relative h-[80vh] overflow-auto  pb-8 bg-white rounded-md flex flex-col justify-between  gap-16">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-2 sticky top-0 bg-white  pt-8 px-8 pb-1 shadow-sm shadow-gray-100 w-[450px]">
                    <div className="flex items-center justify-between">
                        <p className="text-xl font-bold">Sign up</p>
                        <FaRegRectangleXmark onClick={() => setIsShowingSignup(false)} className='text-gray-400 active:text-gray-300' />

                    </div>
                    <p className="text-sm text-gray-500">Please enter your email, username and password to create your account</p>

                </div>
                <div className="flex flex-col gap-5 px-8">
                    <div className="flex flex-col">
                        <p className="text-sm font-semibold">Username</p>
                        <Input ref={usernameRef} />
                        {formErr.username && <p className='text-red-500 text-xs mt-1'>{formErr.username}</p>}
                    </div>

                    <div className="flex flex-col">
                        <p className="text-sm font-semibold">Email</p>
                        <Input ref={emailRef} />
                        {formErr.email && <p className='text-red-500 text-xs mt-1'>{formErr.email}</p>}

                    </div>

                    <div className="flex flex-col">
                        <p className="text-sm font-semibold">Password</p>
                        <Input ref={passRef} type='password' />
                        {formErr.password && <p className='text-red-500 text-xs mt-1'>{formErr.password}</p>}

                    </div>
                    <div className="flex flex-col">
                        <p className="text-sm font-semibold">Confirm Password</p>
                        <Input ref={cfPassRef} type='password' />
                        {formErr.confirmPassword && <p className='text-red-500 text-xs mt-1'>{formErr.confirmPassword}</p>}

                    </div>

                    <Button onClick={submitLogin} className='active:opacity-75'>Continue</Button>


                </div>

                <div className="flex w-full items-center gap-5 px-8">
                    <div className="w-1/2 bg-gray-200 h-[0.75px]"></div>
                    <p className='text-xs text-gray-500'>OR</p>
                    <div className="w-1/2 bg-gray-200 h-[0.75px]"></div>
                </div>

                <div className='px-8 w-full'>
                    <Button variant={"outline"} className='w-full'>
                        <img src={googleLogp} alt="google-sign-in-logo" className='w-5' />
                        <p>Sign in with Google</p>
                    </Button>

                </div>

            </div>
            <p className="text-xs w-3/4 text-center mx-auto pb-20">By continuing, you agree to our <span className='underline text-blue-600'>Terms of Service</span> and <span className='underline text-blue-600'>Privacy Policy</span></p>
        </div>
    </div>
  )
}

export default SignUp

import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import { FaRegRectangleXmark } from 'react-icons/fa6'
import { Input } from './ui/input'
import { Button } from './ui/button'
import googleLogp from "../assets/glogo.png"
import { API_ROOT } from '@/lib/utils'

const SignIn = ({setIsShowingLogin, setIsShowingSignup}: {setIsShowingLogin: Dispatch<SetStateAction<boolean>>, setIsShowingSignup: Dispatch<SetStateAction<boolean>>}) => {
    const emailRef = useRef<HTMLInputElement>(null)
    const passRef = useRef<HTMLInputElement>(null)
    const modalRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        const handleClickOutside = (e: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                setIsShowingLogin(false)
            }
        }
    
        document.addEventListener("mousedown", handleClickOutside)

    
        return () => {
          document.body.style.overflow = 'auto'
          document.removeEventListener("mousedown", handleClickOutside)

        }
      }, [])


    const submitLogin = async () => {
        console.log(emailRef.current?.value);
        console.log(passRef.current?.value);

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
        <div ref={modalRef} className="w-[450px] h-[600px] bg-white rounded-md flex flex-col justify-between p-8 gap-16">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col">
                    <div className="flex items-center justify-between">
                        <p className="text-xl font-bold">Log in</p>
                        <FaRegRectangleXmark onClick={() => setIsShowingLogin(false)} className='text-gray-400 active:text-gray-300' />

                    </div>
                    <p className="text-sm text-gray-500">Please enter your email and password to continue</p>

                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col">
                        <p className="text-sm font-semibold">Email</p>
                        <Input ref={emailRef} />
                    </div>

                    <div className="flex flex-col">
                        <p className="text-sm font-semibold">Password</p>
                        <Input ref={passRef} type='password' />
                    </div>

                    <Button onClick={submitLogin} className='active:opacity-75'>Continue</Button>


                </div>

                <div className="flex w-full items-center gap-5">
                    <div className="w-1/2 bg-gray-200 h-[0.75px]"></div>
                    <p className='text-xs text-gray-500'>OR</p>
                    <div className="w-1/2 bg-gray-200 h-[0.75px]"></div>
                </div>

                <Button variant={"outline"}>
                    <img src={googleLogp} alt="google-sign-in-logo" className='w-5' />
                    <p>Sign in with Google</p>
                </Button>

            </div>
            <p className="text-xs w-3/4 text-center mx-auto pb-20">By continuing, you agree to our <span className='underline text-blue-600'>Terms of Service</span> and <span className='underline text-blue-600'>Privacy Policy</span></p>
        </div>
    </div>
  )
}

export default SignIn

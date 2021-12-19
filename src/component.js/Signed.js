import React from 'react'
import { FaCheck,FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../context'
export default function Signed() {
    const{setSigned,setRegister} = useGlobalContext()
    return (
        <div className='overlay'>
            <div className='signed'>
            <p className='complete'>Registration Complete<span  ><FaCheck/></span></p>
            <p className='cancel-signed' onClick={()=>{setSigned(false);setRegister(false)}}><FaTimes/></p>
            </div>
        </div>
        
        
    )
}

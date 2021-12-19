import React from 'react'
import { useGlobalContext } from '../context'
import {FaTimes} from 'react-icons/fa'
export default function Success() {
    const{setLogged} = useGlobalContext()
    return (
    
        <div className='overlay'>
            <div className='text'>
            <p className='cancel-success' >
                      <FaTimes onClick={()=>setLogged(false)}/>
                      </p>
                 <h3 style={{color:'green',fontWeight:'600px'}}>You have Successfully logged in</h3>
            </div>
        </div>
    )
}

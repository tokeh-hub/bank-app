import React from 'react'
import { useGlobalContext } from '../context'

export default function Danger() {
    const{danger} = useGlobalContext()
    if(danger){
    return (
        <div className='danger'>
            <p>Password or name incorrect!</p>
        </div>
    )
    }
}

import React from 'react'
import { useGlobalContext } from '../context';
import {FaTimes} from 'react-icons/fa'

export default function Form() {
    const{setRegister,data,submit,Change,user,setUser}= useGlobalContext()
    console.log(data)
    
    
    return (
          
         <div className='container overlay'>
             
             <p className={user?'already show':'already'}>Already Registered. Login!<span onClick={()=>setUser(false)}><FaTimes/></span></p>
            <form className='reg-form' onSubmit={e=>{submit(e)}}>
                <h2>Bank Registration Form</h2>
                <p className='cancel-success' onClick={()=>setRegister(false)}><FaTimes/></p>
                <input type='number' id='acct' onChange={e=>Change(e)} placeholder='Account Number' value={data.acct} required></input>
                <input type='number' id='phone' onChange={e=>Change(e)} placeholder='Phone Number' value={data.phone} required></input>
                <input type='username' id='username' onChange={e=>Change(e)} placeholder='Desired Username' value={data.username} required></input>
                <input type='text' id='password' onChange={e=>Change(e)} placeholder='Password' value={data.password} required></input>
                <input type='text' id='confirm' onChange={e=>Change(e)} placeholder='Confirm Password' value={data.confirm} required></input>
                <button type='submit' className='btn-reg'onClick={()=>{
                    
                    
                    }} >Sign up</button>
            </form>
             
        </div>
        
    )
}

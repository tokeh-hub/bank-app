import React,{useState} from 'react'
import { useGlobalContext } from '../context'
import { FaTimes } from 'react-icons/fa'
// import Danger from '../component.js/Danger'

export default function Login() {
    const{setRegister,setLogged,unregistered,setUnregistered,incorrect,setIncorrect,arr} = useGlobalContext()
    // const[array,setArray] = useState(null)
    // const url = 'https://midesapi.herokuapp.com/users';

    // const fetchApi = async () =>{
    //     const response = await fetch(url)
    //     const details = await response.json()
    //     setArray(details)
    // }
    // console.log(array)
    // useEffect(()=>fetchApi(),[])
    
    const[name,setName] = useState('')
    const[pwd,setPwd] = useState('')
    const checkLogin =()=>{
        if(name===''||pwd===''){return;}
        const someValue=  arr.some(item=> item.username===name )
        const somePwd = arr.some(item=> item.password===pwd)
        if(!someValue && !somePwd){setUnregistered(true);return;}
        if(!someValue || !somePwd){setIncorrect(true);return}
        else{
         const user =  arr.find(detail=> detail.username===name)
          if(pwd===user.password){setLogged(true);
          }
            
            
        
        //   else console.log('Hello')
         
    }
    
    }
    return (
        <div className='login'>
             <header >
                <h1>BANK LOGO</h1>
            </header>
            <p className={unregistered?'unregistered show':'unregistered'}>Not a registered user<span onClick={()=>setUnregistered(false)}><FaTimes/></span></p>
            <p className={incorrect?'incorrect show':'incorrect'}>Incorrect password or username<span onClick={()=>setIncorrect(false)}><FaTimes/></span></p>
            <form className='login-form'>
                 <input type='text' placeholder='Username' value={name} onChange={e=>setName(e.target.value)} required ></input>
                 <input type='text'  placeholder='Password' value={pwd} onChange={e=>setPwd(e.target.value)} required></input>
                 <button type='button'className='btn' onClick={checkLogin}>Login</button>
                 <button type='button' className='btn' onClick={()=>setRegister(true)}>Register</button>
            </form>
        </div>
    )
}

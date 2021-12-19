import React from 'react'
import{useContext,useState,useEffect} from 'react'
import Axios  from 'axios'

const AppContext = React.createContext()
const AppProvider = ({children}) => {
    const url = 'https://midesapi.herokuapp.com/users';
    const[arr,setArr] = useState(null)
    const[register,setRegister] = useState(false)
    const[logged,setLogged] = useState(false)
    const[signed,setSigned] = useState(false)
    const[danger,setDanger] = useState(false)
    const[unregistered,setUnregistered] = useState(false)
    const[incorrect,setIncorrect] = useState(false)
    const[user,setUser]=useState(false)

    const fetchApi = async () =>{
        const response = await fetch(url)
        const details = await response.json()
        setArr(details)
    }
    console.log(arr)
    useEffect(()=>setInterval(()=>fetchApi(),5000),[])
     
    
        const [data,setData] = useState({
        acct:'',
        phone:'',
        username:'',
        password:'',
        confirm:''
    })
    const submit = (e) =>{
        e.preventDefault()
       //  Axios.delete(`${url}?id='1'`)
        const found = arr.some(el => 
           el.username === data.username)
        const found2 = arr.some(el=>el.acct===data.acct)
        if(!found || !found2){
            setSigned(true)
        Axios.post(url,{
           acct:data.acct,
           phone:data.phone,
           username:data.username,
           password:data.password,
           confirm:data.confirm
        })
    
        .then(res=>console.log(res.data))
        
    }
    else setUser(true)
   }
   const Change = (e)=>{
    const newData = {...data}
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(newData)
}
   
    return(
        <AppContext.Provider value={{
            register,
            setRegister,
            data,
            setData,
            logged,
            setLogged,
            submit,
            Change,
            signed,
            setSigned,
            danger,
           setDanger,
           unregistered,
           setUnregistered,
           incorrect,
           setIncorrect,arr,setArr,user,setUser
        }}>{children}</AppContext.Provider>
    )
}
export const useGlobalContext = () =>{
    return useContext(AppContext)
}
export {AppContext,AppProvider}
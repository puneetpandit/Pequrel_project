import { SignpostOutlined } from "@mui/icons-material";
import React,{use, useState} from "react";
import { useAuth } from "context/AuthContext";
export default function Login() {
  const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');
  const [error,setError] = useState('');
  const [isLoggingIn,setIsLoggingIn]= useState(true);
  const { login,signup,currentUser } = useAuth()
  console.log(currentUser)

async function submitHandler(){
    if(!email || !password)
    {
        setError("Please enter email and password")
        return 
    }
    if(isLoggingIn)
    {
      try{
        console.log("is logging")
        await login(email,password)
        
      }
      catch(err){
        setError("Incorrect email or password")
      }
      return
    }
    await signup(email,password)
}

  return (
    <div className="flex-1  text-xs sm:text-sm flex flex-col justify-center items-center gap-4 sm:gap-8">
      <h1 className="font-extrabold select-none text-2xl sm:text-4xl uppercase">{isLoggingIn ? 'Login' : 'Register'}</h1>
      {error && <div className="text-center border border-solid w-full max-w-[40ch]  border-rose-300 text-rose-300 py-2">{error}</div>}
      <input
        type="text"
        value={email} onChange={(e)=> setEmail(e.target.value)}
        placeholder="Email Address"
        className="outline-none text-slate-900 duration-300 border-b border-solid border-white  focus:border-cyan-300 p-2 w-full max-w-[40ch]"
      ></input>
      <input
        type="password"
        value={password} onChange={(e)=> setPassword(e.target.value)}
        placeholder="Password"
        className="outline-none text-slate-900 duration-300 border-b border-solid border-white  focus:border-cyan-300 p-2 w-full max-w-[40ch]"
      ></input>
      <button onClick={submitHandler} className="w-full max-w-[40ch]  border border-white border-solid uppercase py-2 duration-300 relative after:absoloute after:top-0 after:right-full after:bg-white after:z-10 after:w-full after:h-full overflow-hidden hover:bg-blue-500 text-white-800 after:duration-300">
        Submit
      </button>
      <h2 className="duration-300 hover:scale-110 cursor-pointer" onClick={()=> setIsLoggingIn(!isLoggingIn)}>{!isLoggingIn ? 'Login' : 'Register'}</h2>
    </div>
  );
}

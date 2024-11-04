import { useState,useCallback,useEffect,useRef} from 'react'

function App() {
  let pass="";
  const [length, setlength] = useState(8);
  const [numallowed, setnum] = useState(false);
  const [charallowed, setchar] = useState(false);
  const [password, setpass] = useState("");
  const generator=useCallback(()=>{
    let str="ABCDEFGHIJKLMNOPQRSTUVWZabcdefghijklmnopqrstuvwz"
   if(numallowed) str+="0123456789";
   if(charallowed) str+="{}[]#%<>^";
   for(let j=1;j<length;j++){
    let char=Math.floor(Math.random()*str.length+1);
    pass+=str.charAt(char);
   }
   setpass(pass);
  },[length,numallowed,charallowed,setpass]); //declare the dependencies
  const passref=useRef("");
  const copypass=useCallback(()=>{
  passref.current?.select();  
  passref.current?.setSelectionRange(0,3);  
  window.navigator.clipboard.writeText(password);
  },[password])
  useEffect(()=>{
    generator();
  },[length,numallowed,charallowed,generator])
  return (
    <div className='flex flex-col h-screen w-screen justify-center items-center'>
   <h1 className='text-2xl text-center text-black m-4'>Password Generator</h1>
   <div>
    <input type='text' className="flex-1 bg-gray-300 text-white px-4 py-2 rounded-lg" value={password} ref={passref} readOnly/>
    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg ml-2" onClick={copypass}>Copy</button>
    <div className="flex items-center mt-2">
      <label for id='range'>Length{length}</label>
      <input type='range' id='range' value={length} min={8} max={100} onChange={(e)=>{setlength(e.target.value)}}/>
      <label for id='num'>Number</label>
      <input type='checkbox' className="mr-2 ml-4" id='num' defaultChecked={numallowed} onChange={()=>setnum(numallowed=>!numallowed)}/>
      <label for id='char'>Characters</label>
      <input type='checkbox' className="mr-2 ml-4" id='char' defaultChecked={charallowed} onChange={()=>setchar(charallowed=>!charallowed)}/> 
    </div>
   </div>
    </div>
  )
}

export default App

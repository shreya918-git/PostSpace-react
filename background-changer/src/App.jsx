import { useState } from 'react';

function App() {
  const [bg, setBg] = useState('bg-white');

  const red = () => setBg('bg-red-600');
  const yellow = () => setBg('bg-yellow-600');
  const olive = () => setBg('bg-emerald-600');           // while using {} in jsx we can directly write the variables name to use it.
  const blue = () => setBg('bg-cyan-600');               //using curly braces in classnames tells react it is javascript component
  const pink = () => setBg('bg-pink-600');               //otherwise it would just assume it as plain text. backticks are only used in classnames

  return (
     <div id='home' className={`flex justify-around items-end h-screen w-screen ${bg}`}>  
     <button className='bg-red-600 p-2 text-white' onClick={red}>Red</button>          
      <button className='bg-yellow-600 p-2 text-white' onClick={yellow}>Yellow</button>
      <button className='bg-emerald-600 p-2 text-white' onClick={olive}>Olive</button>
      <button className='bg-cyan-600 p-2 text-white' onClick={blue}>Blue</button>
      <button className='bg-pink-600 p-2 text-white' onClick={pink}>Pink</button>
    </div>
  );
}

export default App;

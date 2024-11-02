import Embed from './first.jsx'
function App() {
 return(
  <><Embed />
  <h1>React is interesting.</h1>
  </> //here to return multiple elements you need to wrap them in a container or a function.they cant be returned seperately
     //you can also return in an empty tag.(fragment)
 )
}
export default App;

import Embed from './Embed1.jsx'
function App() {
  var obj={
    username:"shreya",
    age:20
  }
  return (
    <div className="d-flex flex-column align-items-center vh-100 vw-100">
    <h1 className="bg-green-200 text-center rounded-xl">Hi Tailwind</h1>
    <Embed channel="shreya"/>
    </div>
  )
}

export default App

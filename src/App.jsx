import './App.css'
import { MyRoutes } from './routers/routes'
function App() {
  return (
    <div>
    <header>
      <h1 className='title'> <img src="palomitas-de-maiz.png" alt="" /> Movie<span className='span'>Flix</span>
      </h1>
    </header>
    <MyRoutes />
    </div>
  )
}

export default App

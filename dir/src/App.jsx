import './App.css'
import Counter from './pages/Counter/Counter'
import Subscribe from './pages/subscribe/Subscribe'
import  Components from './Components/Components'

function App() {

  return (
    <>
      <Counter />
      <Subscribe />
      <Components name="Natasha" age={36} hobby="Fighting" />
      <Components name="Tony" age={42} hobby="Building" />
      <Components name="Steve" age={110} hobby="Boxing" />
      

      
    </>
  )
}

export default App

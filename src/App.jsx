import Header from './components/Header'
import SideBar from './components/SideBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import myRoutes from './routing'
import './App.scss'

function App() {

  return (
    <>
      <Header />
      <main className='app-main'>
        <SideBar />
        
        <Routes>
          {myRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Routes>

      </main>
    </>
  )
}

export default App

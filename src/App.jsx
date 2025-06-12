import Header from './components/Header'
import SideBar from './components/SideBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import './App.scss'
import { Outlet } from "react-router-dom";

const App = () => {

  return (
    <>
      <Header />
      <div className="flex">
        <SideBar />
        <main className="mt-22 ml-29 flex-1 px-8 py-8 xl:px-[109px] xl:py-[62px]">
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Head } from './Headercompo/Head'
import { Home } from './Nav/Home'
import { About } from './Nav/About'
import { Skill } from './Nav/Skill'
import { Project } from './Nav/Project'
import { Testimonal } from './Nav/Testimonal'
import { TimeLine } from './Nav/TimeLine'
import { Contact } from './Nav/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css'
function App() {


  return (
    <div id='g'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Head/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/Skill' element={<Skill/>}></Route>
        <Route path='/Project' element={<Project/>}></Route>
        <Route path='/Testimonal' element={<Testimonal/>}></Route>
        <Route path='/TimeLine' element={<TimeLine/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>

  )
}

export default App

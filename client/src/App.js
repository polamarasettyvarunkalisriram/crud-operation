import React from 'react'
import Home from './Home'
import { Route,BrowserRouter,Routes } from 'react-router-dom'
import Create from './Create'
import Edit from './Edit'
import Read from './Read'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path='/create' element={<Create/>}></Route>
          <Route path='/edit/:id' element={<Edit/>}></Route>
          <Route path='/read/:id' element={<Read/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
import React from 'react'
import { Routes, Route} from 'react-router-dom'
import DashBoard from '../extra/DashBoardHeard'
import ChangePass from '../tasks/ChangePass'


export default function Dashboard() {
  return (
    <Routes>
      <Route path='/' element={<DashBoard/>}/>
    </Routes>
  )
}

import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import './App.css'
import "./App_reponsive.css"
import Course from './components/pages/Courses';

import HomePage from './components/pages/HomePage';
import StudyRoute from './components/pages/StudyRoutes';
import Login from "./components/pages/Login";
import Register from "./components/pages/Register"
import Dashboard from "./components/extra/DashBoardHeard"
import DashboardContent from './components/tasks/DashboardContent';
import MyCourseList from './components/tasks/MyCourseList';
import ExamHistory from './components/tasks/ExamHistory';
import PointHistory from './components/tasks/PointHistory';
import ChangePass from './components/tasks/ChangePass';
import Account from './components/tasks/Account';
import AssignmentList from './components/tasks/AssignmentList';
import CourseID from './components/tasks/CousreID'
function App() {
  if (window.location.pathname==="/") {
    window.location.href="http://localhost:3000/home"
  }
 
  return (
    <Routes>
      <Route path='/home' element={<HomePage />} />
      <Route path='/roadmap-list' element={<StudyRoute />} />
      <Route path='/course-list' element={<Course />} >
      
      </Route>
      <Route path='/dashboard' element={<Dashboard />}>
        
        <Route path='my-course-list' element={<MyCourseList />} >
          
        </Route>
        <Route path='exam-history' element={<ExamHistory />} />
        <Route path='point-history' element={<PointHistory />} />
        <Route path='assignment-list' element={<AssignmentList />} />
        <Route path='account' element={<Account />} />
        <Route path='changepass' element={<ChangePass />} />
      </Route>

      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />

    </Routes>

  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BugList from './components/BugsList';
import Project from './components/Project';
import ProjectsList from './components/ProjectsList';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProjectsList/>}/>
          <Route path='/projects/:id' element={<Project />}/>
          <Route path='/projects/:project_id/bugs' element={<BugList/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

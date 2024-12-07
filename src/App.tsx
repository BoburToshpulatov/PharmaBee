import { BrowserRouter } from 'react-router-dom';
import './App.css';
import StudentComponent from './components/student';
import { StudentList } from './DB/studentData';
import RouterComponents from './router';


function App() {


  return (
    <BrowserRouter>
    <RouterComponents/>
    </BrowserRouter>
  );
}

export default App;

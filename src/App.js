import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Login from './Login';
import Home from './Home';
import { useDispatch } from "react-redux/es/exports";
import { useEffect } from 'react';
import { getUserAuth } from './actions';


function App (Props) {

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getUserAuth());
  }, []);


  return (
    <div className="App">
    <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<div><Home/></div>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
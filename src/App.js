import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// Import your components for each route
import FullstackAssignment1 from './FullstackAssignment1';
import SpringTicTacToe2 from './SpringTicTacToe2';
import FormsHomework from './FormsHomework';
import VotingAppExample from './Votingappexample';
import TimerAppExample from './Timerappexample';
import './App.css';
/*links and routes to different project*/
function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/fullstack-assignment-1">Fullstack Assignment 1</Link>
          <Link to="/spring-tic-tac-toe-2">Spring Tic Tac Toe 2</Link>
          <Link to="/forms-homework">Forms Homework</Link>
          <Link to="/voting-app">Voting App</Link>
          <Link to="/timer-app">Timer App</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fullstack-assignment-1" element={<FullstackAssignment1 />} />
          <Route path="/spring-tic-tac-toe-2" element={<SpringTicTacToe2 />} />
          <Route path="/forms-homework" element={<FormsHomework />} />
          <Route path="/voting-app" element={<VotingAppExample />} />
          <Route path="/timer-app" element={<TimerAppExample />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  // home page introduction message
  return <div>Welcome to Will's Routes Page!</div>;
}

export default App;


import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationHeader from './components/NavHeader/NavigationHeader';
import DigitalClock from './components/Digitalclock/DigitalClock'
import StopwatchTimer from './components/stopwatch/StopwatchTimer'
import CountdownTimer from './components/CountdownTimer/CountdownTimer'

function App() {
  return (
    <Router basename='/' >
      <NavigationHeader />
      <Routes>
        <Route path="/" element={<DigitalClock />} />
        <Route path="/stopwatch" element={<StopwatchTimer />} />
        <Route path="/timer" element={<CountdownTimer />} />
      </Routes>
    </Router>
  );
}

export default App;

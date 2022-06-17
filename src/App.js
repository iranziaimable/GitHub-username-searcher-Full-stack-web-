import React from 'react';
import './App.css'
import SearchUserName from './components/SearchUserName';
import HistoryScreen from './state/reducer/history';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SearchUserName placeholder="Enter github username.." />} />
        <Route path="/history" element={<HistoryScreen />} />
      </Routes>      
    </div>
  );  
}
export default App;

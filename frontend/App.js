import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './src/components/Navbar';
import Dashboard from './src/pages/Dashboard';
import Login from './src/pages/Login';
import TrackParcel from './src/pages/TrackParcel';
import ParcelCard from './src/components/ParcelCard';

const mockParcel = {
  id: '123456',
  sender: 'John Doe',
  receiver: 'Jane Smith',
  source: 'New Delhi',
  destination: 'Karnal',
  status: 'In Transit',
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/track" element={<TrackParcel />} />
        <Route path="/parcel" element={<ParcelCard parcel={mockParcel} />} />
      </Routes>
    </Router>
  );
}

export default App;
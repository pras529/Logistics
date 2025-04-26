import React, { useState } from 'react';
import ParcelCard from '../components/ParcelCard';

const Dashboard = () => {
  const [parcels, setParcels] = useState([
    {
      id: '123456',
      sender: 'John Doe',
      receiver: 'Jane Smith',
      source: 'New Delhi',
      destination: 'Karnal',
      status: 'In Transit',
    },
    {
      id: '654321',
      sender: 'Alice',
      receiver: 'Bob',
      source: 'Ambala',
      destination: 'Sonipat',
      status: 'Delivered',
    },
  ]);

  return (
    <div className="container mx-auto mt-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {parcels.map((parcel) => (
        <ParcelCard key={parcel.id} parcel={parcel} />
      ))}
    </div>
  );
};

export default Dashboard;
import React, { useState } from 'react';

const TrackParcel = () => {
  const [trackingId, setTrackingId] = useState('');
  const [parcelDetails, setParcelDetails] = useState(null);

  const handleTrack = () => {
    // Mock tracking logic
    if (trackingId === '123456') {
      setParcelDetails({
        id: '123456',
        sender: 'John Doe',
        receiver: 'Jane Smith',
        source: 'New Delhi',
        destination: 'Karnal',
        status: 'In Transit',
      });
    } else {
      alert('Parcel not found!');
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Track Your Parcel</h1>
      <div className="flex items-center space-x-4 mb-4">
        <input
          type="text"
          placeholder="Enter Tracking ID"
          value={trackingId}
          onChange={(e) => setTrackingId(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button
          onClick={handleTrack}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Track
        </button>
      </div>
      {parcelDetails && (
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-bold">Parcel ID: {parcelDetails.id}</h2>
          <p><span className="font-medium">Sender:</span> {parcelDetails.sender}</p>
          <p><span className="font-medium">Receiver:</span> {parcelDetails.receiver}</p>
          <p><span className="font-medium">Source:</span> {parcelDetails.source}</p>
          <p><span className="font-medium">Destination:</span> {parcelDetails.destination}</p>
          <p><span className="font-medium">Status:</span> {parcelDetails.status}</p>
        </div>
      )}
    </div>
  );
};

export default TrackParcel;
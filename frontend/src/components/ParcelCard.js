import React from 'react';

const ParcelCard = ({ parcel }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4">
      <h2 className="text-lg font-bold">Parcel ID: {parcel.id}</h2>
      <p><span className="font-medium">Sender:</span> {parcel.sender}</p>
      <p><span className="font-medium">Receiver:</span> {parcel.receiver}</p>
      <p><span className="font-medium">Source:</span> {parcel.source}</p>
      <p><span className="font-medium">Destination:</span> {parcel.destination}</p>
      <p><span className="font-medium">Status:</span> {parcel.status}</p>
    </div>
  );
};

export default ParcelCard;
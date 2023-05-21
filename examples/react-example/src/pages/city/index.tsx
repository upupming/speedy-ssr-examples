import React from 'react';
import { useParams } from 'react-router-dom';

const City = () => {
  const params = useParams();

  return <div>City ID: {params.id}</div>;
};

export default City;

import React from 'react';
import { useParams } from 'react-router-dom';

const Params = () => {
  const params = useParams();
  return (
    <>
      <span>id: {params.id}</span>
      <span>name: {params.name}</span>
    </>
  );
};

export default Params;

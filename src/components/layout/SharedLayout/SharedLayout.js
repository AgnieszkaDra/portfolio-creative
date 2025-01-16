import { Outlet } from 'react-router-dom';
import React, { useEffect, useState, useRef } from 'react';
import FieldListGenerator from '../../ui/Board/FieldsGenerator';
import ContainerBoard from '../../ui/Board/ContainerBoard';
import Navigation from '../../ui/Navigation';

const SharedLayout = () => {
  const [fieldsList, setFieldsList] = useState([]);
  const fieldListGeneratorRef = useRef(new FieldListGenerator()); 
 
  const updateFields = () => {
    fieldListGeneratorRef.current.updateFieldsList(); 
    setFieldsList(fieldListGeneratorRef.current.getFieldsList()); 
  };

  useEffect(() => {
    updateFields(); 

    const handleResize = () => {
      updateFields(); 
    };
    
    window.addEventListener('resize', handleResize);
      return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="container">
        <ContainerBoard />
        <Outlet />
      </div>
      <Navigation className="controlls" />
    </>
  );
};

export default SharedLayout
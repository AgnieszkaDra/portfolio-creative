import React, { useEffect, useState, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import {Navigation} from '../../components';
import { ContainerBoard, FieldsGenerator } from '../ui/Board';

const SharedLayout = () => {
  const [fieldsList, setFieldsList] = useState([]);
  const fieldListGeneratorRef = useRef(new FieldsGenerator()); 
 
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
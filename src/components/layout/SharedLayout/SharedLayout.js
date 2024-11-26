import { Outlet } from 'react-router-dom';
import React, { useEffect, useState, useRef } from 'react';
import FieldListGenerator from '../../ui/Board/FieldsGenerator';
import Navigation from '../../ui/Navigation';

const Home = () => {
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
    <div className="container">
      <div className={`container__board--${fieldsList.length} board`}>
        {fieldsList.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} className="board__element">
            {row.map((field, colIndex) => (
              <div key={`field-${rowIndex}-${colIndex}`}>
                <span className="dot"></span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <Navigation className="controlls" />
      <Outlet />
    </div>
  );
};

export default Home;
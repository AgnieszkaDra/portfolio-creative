import React, { useEffect, useState, useRef } from 'react';
import FieldListGenerator from '../../ui/Board/FieldsGenerator';

export const ContainerBoard = ({ children, breakpoint, dotSize }) => {
  const [fieldsList, setFieldsList] = useState([]);
  const fieldListGeneratorRef = useRef(new FieldListGenerator());

  const updateFields = () => {
    fieldListGeneratorRef.current.updateFieldsList(breakpoint);
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
    <div className={`container__board--${fieldsList.length} board`}>
      {fieldsList.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`} className="board__element">
          {row.map((field, colIndex) => (
            <div key={`field-${rowIndex}-${colIndex}`}>
                <span className="dot" style={{ width: `${dotSize}px`, height: `${dotSize}px` }}></span>
            </div>
          ))}
        </div>
      ))}
      {children && <div className="board__children">{children}</div>}
    </div>
  );
};

export default ContainerBoard;
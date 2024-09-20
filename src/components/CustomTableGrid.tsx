import React, { useState } from 'react';
import { Button, Table, TableBody, TableContainer, TableProps, TableRow, TextField } from '@mui/material';
import DirectionalTableCell, { DirectionEnum } from './DirectionalTableCell';

interface CustomTableGridProps extends TableProps {
  gridData: DirectionEnum[][];
}

const CustomTableGrid: React.FC<CustomTableGridProps> = ({ gridData }) => {
  return (
    <div style={{ width: '405px' }}>
        <TableContainer style={{ width: '400px', marginBottom: '50px'}}>
            <Table>
                <TableBody>
                {gridData.map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                    {row.map((rotation, colIndex) => (
                        <DirectionalTableCell key={colIndex} direction={rotation} />
                    ))}
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>        
    </div>
  );
};

// const generateRandomDirection = (): DirectionEnum => {
//     console.log('generateRandomDirection');
//     const enumValues = Object.values(DirectionEnum) as Array<DirectionEnum[keyof DirectionEnum]>;
//     const randIdx = Math.floor(Math.random() * enumValues.length);
//     return enumValues[randIdx] as DirectionEnum;
// }

export default CustomTableGrid;
import React, { useState } from 'react';
import CustomTableGrid from './CustomTableGrid'
import '../styles/custom.css';
import { Button, TextField } from '@mui/material';
import { DirectionEnum } from './DirectionalTableCell';

const CustomTableGridWrapper: React.FC = () => {
  const initialGridData = Array.from({ length: 5 }, () =>
    Array.from({ length: 5 }, () => DirectionEnum.NORTH)
  );

  const [gridData, setGridData] = useState<DirectionEnum[][]>(initialGridData);
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    e.target.value = '';
  }

  const handleGridUpdate = () => {
    const parts = inputValue.split(',');
    if(parts.length === 3){
        const row = parseInt(parts[0]);
        const col = parseInt(parts[1]);
        const direction = parts[2].trim().toUpperCase();

        if(row >= 0 && row < 5 && col >= 0 && col < 5){
            const newGridData = [...gridData];
            const newDirection =  DirectionEnum[direction as keyof typeof DirectionEnum];
            if(newDirection){
                newGridData[row][col] = newDirection;
                setGridData(newGridData);
                setInputValue('');
            }
        }
    }
  }
  
  return (
    <div className="top-spacing center-content">
      <div style={{ width: '405px'}}>
        <CustomTableGrid gridData={gridData}/>
        <TextField
              sx={{
                  '& .MuiInputBase-input': {
                    textAlign: 'center',
                    fontSize: '0.8em'
                  },
              }}
              style={{ width: '100%', marginBottom: '20px'}}
              label="Enter cell coordinates and direction (e.g., 1,3,EAST)"
              variant="standard"
              value={inputValue}
              onChange={handleInputChange}
              />
          <Button 
              variant="contained"
              color="primary"
              onClick={handleGridUpdate}
              style={{ width: '100%' }}>
              Update Cell
          </Button>
        </div>
    </div>
  );
};

export default CustomTableGridWrapper;

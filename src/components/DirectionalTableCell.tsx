import React from 'react';
import { TableCell, TableCellProps } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export interface RotateableCellProps extends TableCellProps{
    direction: DirectionEnum;
} 

export enum DirectionEnum {
    NORTH = "NORTH",
    SOUTH = "SOUTH",
    EAST = "EAST",
    WEST = "WEST"
}

const DirectionalTableCell: React.FC<RotateableCellProps> = (props) => {
  const rotation = getUpwardArrowRotation(props.direction)
  return (<TableCell {...props} style={{ border: '1px solid' }}>
        <ArrowUpwardIcon style={{ transform: `rotate(${rotation}deg)`, fontSize: '3em' }} />
    </TableCell>);
};

const getUpwardArrowRotation = (direction: DirectionEnum): number => {    
    switch(direction.toUpperCase()) {
        case DirectionEnum.SOUTH:
            return 180;
        case DirectionEnum.WEST:
            return -90;
        case DirectionEnum.EAST:
            return 90;
        case DirectionEnum.NORTH:
        default:
            return 0;
    }
}

export default DirectionalTableCell;
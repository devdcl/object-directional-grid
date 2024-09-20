import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import DirectionalTableCell, { DirectionEnum, RotateableCellProps } from '../DirectionalTableCell';

export default {
  title: 'Components/DirectionalTableCell',
  component: DirectionalTableCell,
  argTypes: {
    rotation: {
      control: {
        type: 'number',
        min: -360,
        max: 360,
        step: 1,
      },
    },
  },
} as Meta<RotateableCellProps>;

const Template: StoryFn<RotateableCellProps> = (args) => <DirectionalTableCell {...args} />;

export const FacingNorth = Template.bind({});
FacingNorth.args = {
  direction: DirectionEnum.NORTH,
};

export const FacingEast = Template.bind({});
FacingEast.args = {
  direction: DirectionEnum.EAST,
};

export const FacingSouth = Template.bind({});
FacingSouth.args = {
  direction: DirectionEnum.SOUTH,
};

export const FacingWest = Template.bind({});
FacingWest.args = {
  direction: DirectionEnum.WEST,
};


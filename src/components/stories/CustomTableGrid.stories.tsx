import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CustomTableGrid from '../CustomTableGrid'; // Adjust the path as necessary
import { DirectionEnum } from '../DirectionalTableCell';
import CustomTableGridWrapper from '../CustomTableGridWrapper';

export default {
  title: 'Components/CustomTableGrid',
  component: CustomTableGrid,
} as Meta;

const Template: StoryFn = (args) => {
  return (
    <>      
      <CustomTableGridWrapper />
    </>
  );
};

export const Default = Template.bind({});

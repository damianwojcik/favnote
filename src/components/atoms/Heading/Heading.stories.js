import React from 'react';
import Heading from './Heading';

export default {
  component: Heading,
  title: 'Heading',
};

export const heading = () => <Heading>Hello Damian</Heading>;
export const big = () => <Heading big>Hello Damian</Heading>;

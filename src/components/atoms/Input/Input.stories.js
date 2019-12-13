import React from 'react';
import Input from './Input';

export default {
  component: Input,
  title: 'Input',
};

export const normal = () => <Input placeholder="login" />;
export const search = () => <Input placeholder="search" search />;

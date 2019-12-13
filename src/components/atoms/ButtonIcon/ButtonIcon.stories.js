import React from 'react';
import { addDecorator } from '@storybook/react';
import styled from 'styled-components';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import plusIcon from 'assets/icons/plus.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import ButtonIcon from './ButtonIcon';

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background: hsl(49, 100%, 58%);
`;

export default {
  component: ButtonIcon,
  title: 'ButtonIcon',
};

addDecorator(story => <YellowBackground>{story()}</YellowBackground>);

export const bulb = () => <ButtonIcon icon={bulbIcon} />;
export const active = () => <ButtonIcon active icon={bulbIcon} />;
export const logout = () => <ButtonIcon icon={logoutIcon} />;
export const pen = () => <ButtonIcon icon={penIcon} />;
export const plus = () => <ButtonIcon icon={plusIcon} />;
export const twitter = () => <ButtonIcon icon={twitterIcon} />;

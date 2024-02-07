import * as React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import ICONS from './icons';

export interface IconProps {
  name: string;
  size?: number;
  color?: string;
  textcolor?: string;
  direction?: 'rtl' | 'ltr';
  allowFontScaling?: boolean | undefined;
  style?: StyleProp<ViewStyle>;
}

export const Icon = ({name, size = 40, color, ...props}: IconProps) => {
  // @ts-ignore
  const IconImpl = ICONS[name];
  if (!IconImpl) console.error('missing icon', name);
  if (!color) color = '#000000';
  return IconImpl ? (
    <IconImpl width={size} height={size} color={color} {...props} />
  ) : null;
};

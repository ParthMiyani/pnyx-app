import * as React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import ICONS from './icons';

export interface IconProps {
  name: string;
  size?: number;
  color?: string;
  // textcolor?: string;
  direction?: 'rtl' | 'ltr';
  allowFontScaling?: boolean | undefined;
  style?: StyleProp<ViewStyle>;
}

export const Icon = ({name, size = 40, color, ...props}: IconProps) => {
  const IconImpl = ICONS[name as keyof typeof ICONS]; // Add 'as keyof typeof ICONS' to cast 'name' as a valid key of 'ICONS'
  if (!IconImpl) console.error('missing icon', name);
  if (!color) color = '#FFFFFF';
  return IconImpl ? (
    <IconImpl width={size} height={size} fill={color} {...props} />
  ) : null;
};

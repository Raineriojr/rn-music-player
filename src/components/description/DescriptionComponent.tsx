import React from 'react';
import { Text, View } from 'react-native';

// **styles
import { Style } from './style';
import { Global } from '../../styles/global';

interface DescriptionProps {
  title: string;
  subtitle: string
}

export const DescriptionComponent = ({ title, subtitle }: DescriptionProps) => {
  return (
    <View style={Style.descriptionContainer}>
      <Text style={Global.title}>{title}</Text>
      <Text style={Global.subtitle}>{subtitle}</Text>
    </View>
  )
}
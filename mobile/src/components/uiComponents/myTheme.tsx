import {DarkTheme, Theme} from '@react-navigation/native';

const MyTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#E7CFFF', // primary color for your app, usually your brand color.
    // background: 'rgb(52, 52, 52, 0.8)', // background color for screens.
    // card: '#E7CFFF', // The background color of card-like elements, such as headers, tab bars etc.
    text: '#E7CFFF', // text color for content.
    border: '#E7CFFF', // color for borders, like the lines between different sections.
    // notification: '#E7CFFF', // The color of Tab Navigator badge..
  },
};

export default MyTheme;

import { Dimensions , PixelRatio } from 'react-native';

export const WINDOW_WIDTH : number = Dimensions.get('window').width;

const guidelineBaseWidth : number = 375;

interface Istyle {
    [key : string] : number
};

interface Ioffset {
    height : number;
    width : number;
};

interface IboxShadow {
    shadowColor : string;
    shadowOffset : Ioffset;
    shadowOpacity : number;
    shadowRadius : number;
    elevation : number;
};

export const scaleSize = ( size : number ) => (WINDOW_WIDTH/guidelineBaseWidth) * size;

export const scaleFont = ( size : number ) => size * PixelRatio.getFontScale();

const dimensions = (top : number , right : number = top , bottom : number = top , left : number = right , property : string ) =>{
  let styles : Istyle = {};

  styles[`${property}Top`] = top;
  styles[`${property}Right`] = right;
  styles[`${property}Bottom`] = bottom;
  styles[`${property}Left`] = left;

  return styles;
};

export const margin = ( top : number , right : number , bottom : number , left : number ) => dimensions(top, right, bottom, left, 'margin');

export const padding = ( top : number , right : number , bottom : number , left : number ) => dimensions(top, right, bottom, left, 'padding');

export const boxShadow = ( color : string, offset : Ioffset = {height:2,width:2} , radius : number = 8 , opacity : number = 0.2 ) => {
    const boxShadow : IboxShadow = {
        shadowColor: color,
        shadowOffset: offset,
        shadowOpacity: opacity,
        shadowRadius: radius,
        elevation: radius,
    };
    return boxShadow;
};
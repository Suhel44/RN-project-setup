import {sizes} from '@app/style/spacing';

const appConst = {
USER_CREDENTIALS: 'user_credentials',
}

const styleProps : any = {
  bg: 'backgroundColor',
  color: 'color',
  fs: 'fontSize',
};

export const getSizeVariant = (type: any, property:any) => {
  const styleProp = styleProps[property];
  return styleProp ? {[styleProp]: sizes[type]} : {};
};

export const APP_SIZES = {
  xxs: 'xxs',
  xs: 'xs',
  s: 's',
  m: 'm',
  l: 'l',
  xls: 'xls',
  xlm: 'xlm',
  xlsm: 'xlsm',
  xl: 'xl',
  xxl: 'xxl',
};
export default appConst;

export const NULL_PREFERENCE = 'NULL_PREFERENCE';
import {Dimensions, PixelRatio} from 'react-native';

export function getWidth() {
  return Dimensions.get('window').width;
}

export function getHeight() {
  return Dimensions.get('window').height;
}

export function calculateWidthPercent(size: string) {
  const width = Dimensions.get('window').width;
  const elementWidth = parseFloat(size);
  return PixelRatio.roundToNearestPixel((width * elementWidth) / 100);
}

export function calculateHeightPercent(size: string) {
  const height = Dimensions.get('window').height;
  const elementHeight = parseFloat(size);
  return PixelRatio.roundToNearestPixel((height * elementHeight) / 100);
}

export function horizontalScale(size: number) {
  const guidelineBaseWidth = 350;
  const width = Dimensions.get('window').width;
  return (width / guidelineBaseWidth) * size;
}

export function verticalScale(size: number) {
  const guidelineBaseHeight = 680;
  const height = Dimensions.get('window').height;
  return (height / guidelineBaseHeight) * size;
}

export function moderateScale(size: number, factor?: number) {
  if (factor) {
    return size + (horizontalScale(size) - size) * factor;
  } else {
    return size + (horizontalScale(size) - size) * 0.1;
  }
}

export function getTabHeight() {
  var pixelValue = PixelRatio.get();
  switch (pixelValue) {
    case 1:
    case 1.5:
    case 2:
      return verticalScale(70);
    case 3:
      return verticalScale(85);
    case 3.5:
      return verticalScale(105);
    case 4:
      return verticalScale(120);
  }
}

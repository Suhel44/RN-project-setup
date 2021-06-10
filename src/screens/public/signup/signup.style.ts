import {StyleSheet} from 'react-native';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {spaces} from '@app/style/spacing';
import colors from '@app/style/colors';
import * as mixins from '@app/style/mixins';

export const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightBlueBg,
  },
  title: {
    fontSize: 24,
    color: colors.white,
    letterSpacing: 1,
  },
  logintop: {
    alignItems: 'center',
    top: mixins.moderateScale(30),
    height: mixins.calculateHeightPercent('51'),
  },
  loginBottom: {
    backgroundColor: colors.white,
    borderTopLeftRadius: mixins.moderateScale(35),
    borderTopRightRadius: mixins.moderateScale(35),
    width: mixins.calculateWidthPercent('100'),
    height: mixins.calculateHeightPercent('55'),
    justifyContent: 'flex-end',
    paddingBottom: mixins.moderateScale(10),
  },
  pd: {
    paddingTop: mixins.moderateScale(4),
  },
  image: {
    width: mixins.moderateScale(375),
    height: mixins.moderateScale(262),
  },
  googleButton: {
    borderWidth: 0.5,
    borderColor: colors.primaryPurple,
  },
  signupLink: {
    alignSelf: 'center',
  },
  bottomWidth: {
    width: mixins.calculateWidthPercent('80'),
    alignSelf: 'center',
  },
});

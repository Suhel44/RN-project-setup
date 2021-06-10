import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import { APP_SIZES } from "@app/core/app.const";
import * as mixins from './mixins';

export const sizes = {
    // global sizes
    base: mixins.moderateScale(8),
    radius: mixins.moderateScale(12),
    padding: mixins.moderateScale(16),
    nPadding: mixins.moderateScale(-17),
    nmt_5: mixins.moderateScale(-5),

    // font sizes
    [APP_SIZES.xxl]: mixins.moderateScale(48),
    [APP_SIZES.xl]: mixins.moderateScale(36),
    [APP_SIZES.xlm]: mixins.moderateScale(24),
    [APP_SIZES.xlsm]: mixins.moderateScale(22),
    [APP_SIZES.xls]: mixins.moderateScale(20),
    [APP_SIZES.l]: mixins.moderateScale(18),
    [APP_SIZES.m]: mixins.moderateScale(16),
    [APP_SIZES.s]: mixins.moderateScale(14),
    [APP_SIZES.xs]: mixins.moderateScale(12),
    [APP_SIZES.xxs]: mixins.moderateScale(10),

    // app dimensions
    appWidth: width,
    appHeight: height
};

const spacingSizesArr = [0, 2, 4, 8, 10, 12, 16, 20, 24, 30, 35, 40, 44, 60];

const spaceProperty = [{
    type:'py',
    prop:"paddingVertical"
},
{
    type:'px',
    prop:"paddingHorizontal"
},
{
    type:'pl',
    prop:"paddingLeft"
},
{
    type:'pr',
    prop:"paddingRight"
},
{
    type:'pb',
    prop:"paddingBottom"
},
{
    type:'pt',
    prop:"paddingTop"
},
{
    type:'my',
    prop:"marginVertical"
},
{
    type:'mx',
    prop:"marginHorizontal"
},
{
    type:'mb',
    prop:"marginBottom"
},
{
    type:'mr',
    prop:"marginRight"
},
{
    type:'ml',
    prop:"marginLeft"
},
{
    type:'mt',
    prop:"marginTop"
}]
const spaces : any= {};
for(let spaceProp of spaceProperty){
    for(let val of spacingSizesArr){
        spaces[`${spaceProp.type}_${val}`] = {
            [spaceProp.prop] : mixins.moderateScale(val)
        }
    }
}

const borderRadiusArr = [0, 10, 12, 20, 25, 30];

const bordeRadiusProperty = [{
    type:'br',
    prop:"borderRadius"
}]
const borderRadius : any= {};
for(let brProp of bordeRadiusProperty){
    for(let val of borderRadiusArr){
        borderRadius[`${brProp.type}_${val}`] = {
            [brProp.prop] : mixins.moderateScale(val)
        }
    }
}

export { spaces, borderRadius };

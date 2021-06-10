import AsyncStorage from '@react-native-community/async-storage';
import {NULL_PREFERENCE} from '@app/core/app.const';
export const savePreference = async (key:string, value: string) : Promise<any> => {
  try {
    return await AsyncStorage.setItem(key, value);
  } catch (error) {
  }
}

export const getPreference  = async (key : string) : Promise<string> => {
  try {
    const value = await AsyncStorage.getItem(key);
    if(value === null){
      return NULL_PREFERENCE;
    }
    return value;
  } catch (error) {
    return ''
  }
}

export const removePreference = async (key: string) : Promise<boolean> => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    return false;
  }
}

export const removeFewPreference = async (keys : Array<string>) : Promise<boolean> => {
  try {
    await AsyncStorage.multiRemove(keys);
    return true;
  } catch (error) {
    return false;
  }
}

export const clearPreference = async (): Promise<boolean> => {
  try {
    await AsyncStorage.clear();
    return true;
  } catch (error) {
    return false;
  }
}

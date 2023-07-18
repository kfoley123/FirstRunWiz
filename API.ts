import AsyncStorage from '@react-native-async-storage/async-storage';
import { FirstRunValues } from './customTypes';
import { LoginFormValues } from './Screens/Login';

//adds a single key/value pair to storage

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    return await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    return e;
  }
};

// pulls out data with specific value from storage based on provided key

export async function getData(key: string): Promise<FirstRunValues> {
  return await AsyncStorage.getItem(key).then((data) => JSON.parse(data as string));
}

// checks to see if email user tries to login with is in storage and if so checks to see if the password matches. If yes to both return user and all their data

export const loginUser = async (loginData: LoginFormValues) => {
  try {
    const response = await AsyncStorage.getItem(loginData.email);
    if (response !== null && JSON.parse(response).password === loginData.password) {
      return JSON.parse(response);
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};

// gets all keys from storage and console.logs them

export const getAllKeys = async () => {
  let keys: readonly string[] = [];
  try {
    keys = await AsyncStorage.getAllKeys();
  } catch (e) {
    console.log(e);
  }
  console.log(keys);
};

// gets multiple keys you specify from storage and console.logs them

export const getMultiple = async (keys: string[]) => {
  try {
    const values = await AsyncStorage.multiGet(keys);
    console.log(values);
  } catch (e) {
    console.log(e);
  }
};

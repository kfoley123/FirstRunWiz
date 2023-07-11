import AsyncStorage from "@react-native-async-storage/async-storage";
import { FirstRunValues } from "./customTypes";
import { LoginFormValues } from "./Screens/Login";

export const storeData = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value);
        return await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        return e;
    }
};

export async function getData(key): Promise<FirstRunValues> {
    return await AsyncStorage.getItem(key).then((data) =>
        JSON.parse(data as string)
    );
}

export const loginUser = async (loginData: LoginFormValues) => {
    try {
        const response = await AsyncStorage.getItem(loginData.email);
        if (
            response !== null &&
            JSON.parse(response).password === loginData.password
        ) {
            return JSON.parse(response);
        }
    } catch (error) {
        console.log(error);
    }
    return null;
};

export const getAllKeys = async () => {
    let keys: readonly string[] = [];
    try {
        keys = await AsyncStorage.getAllKeys();
    } catch (e) {
        console.log(e);
    }
    console.log(keys);
};

export const getMultiple = async (keys: string[]) => {
    let values;
    try {
        values = await AsyncStorage.multiGet(keys);
    } catch (e) {
        console.log(e);
    }
    console.log(values);
};

// storeData("playerOne", { name: "Cammy", height: `5'5"`, wins: 10 });

// storeData("playerTwo", { name: "ChunLi", height: `5'7"`, wins: 10 });
// getData("playerOne");
// getAllKeys();
// getMultiple(["playerOne", "playerTwo"]);

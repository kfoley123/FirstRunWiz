import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value);
        return await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        return e;
    }
};

export const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            console.log(JSON.parse(value));
            //value previously stored
        }
    } catch (e) {
        console.log(e);
    }
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

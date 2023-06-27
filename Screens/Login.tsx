import React from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image,
} from "react-native";

export default function Login() {
    return (
        <View style={styles.container}>
            <StatusBar />

            <Image
                source={require("./Images/blueBackground.png")}
                style={styles.Img}
            />

            <TextInput style={styles.input}></TextInput>

            <TextInput style={styles.input}></TextInput>

            <TouchableOpacity
                style={{ ...styles.input, backgroundColor: "darkblue" }}
            >
                <Text style={styles.signInText}>Sign In</Text>
            </TouchableOpacity>

            <View style={styles.noAccountTextContainer}>
                <Text> Don't have an account? </Text>
                <TouchableOpacity>
                    <Text style={styles.signUpText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    Img: { height: 200, width: "100%" },
    input: {
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "black",
        height: 40,
        padding: 10,
        borderRadius: 20,
        marginVertical: 5,
        marginHorizontal: 40,
        shadowColor: "black",
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    noAccountTextContainer: { flexDirection: "row", justifyContent: "center" },
    signUpText: { fontWeight: "bold", color: "darkblue" },
    signInText: { fontWeight: "bold", color: "white", textAlign: "center" },
});

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

            <TextInput style={styles.input} placeholder="Email"></TextInput>

            <TextInput style={styles.input} placeholder="Password"></TextInput>

            <TouchableOpacity style={styles.signInButton}>
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
    Img: { height: "30%", width: "100%", marginBottom: "10%" },
    input: {
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "black",
        height: 40,
        paddingHorizontal: 15,
        borderRadius: 20,
        marginVertical: "3%",
        marginHorizontal: "10%",
        shadowColor: "black",
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    signInButton: {
        justifyContent: "center",
        backgroundColor: "darkblue",
        height: 40,
        borderRadius: 20,
        marginVertical: "3%",
        marginHorizontal: "10%",
        shadowColor: "black",
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    noAccountTextContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "30%",
    },
    signUpText: { fontWeight: "bold", color: "darkblue" },
    signInText: { fontWeight: "bold", color: "white", textAlign: "center" },
});

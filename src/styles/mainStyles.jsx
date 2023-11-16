import { StyleSheet } from "react-native";

export const mainStyles = StyleSheet.create ({
    body: {
        flex: 1,
        backgroundColor: '#1e1e21',
    },
    // Window
    window: {
        flex: 1,
        padding: 10,
        justifyContent: "center",
        alignItems: "flex-end"
    },
    firstNumber: {
        color: "#09851a",
        fontSize: 25,
        fontFamily: 'cursive',
        fontWeight: "bold"
    },
    secondNumber: {
        color: "#1ce636",
        fontSize: 45,
        fontFamily: 'cursive',
        fontWeight: "bold"
    },

    // Keyborad
    keyboard: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignContent: "flex-end",
        justifyContent: "space-between",

    },
    buttonNumber: {
        backgroundColor: '#343540',        
    },
    buttonOperator: {
        backgroundColor: '#1125d6',
    },
    buttonSpecial: {
        backgroundColor: '#565761',
    },
    buttonEqual: {
        backgroundColor: '#08bf26',
    },
    buttonClear: {
        backgroundColor: '#d64304',
    },
    buttonSmall: {
        width: '24.8%',
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        marginBottom: 1
    },
    buttonHuge: {
        width: '49.8%',
        height: 100,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 30,
        fontFamily: 'cursive',
        fontWeight: "bold"
    },
    buttonHorizontal: {
        width: '16.5%',
        height: 50
    },
    buttonHorizontalHuge: {
        width: '33%',
        height: 50
    }
});
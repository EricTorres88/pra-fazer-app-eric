import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F60",
        padding: 30,
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    alert: {
        fontSize: 18,
        textAlign: 'center',
        color: '#FFF',
        marginBottom: 20,
    },
    input: {
        alignItems: 'center',
        fontSize: 18,
        borderRadius: 10,
        backgroundColor: '#F60',
        padding: 20,
        marginBottom: 20,
        width: '90%'
    },
    button: {
        backgroundColor: '#070A52',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
        width: '30%'
    },
    textButton: {
        fontSize: 24,
        textAlign: 'center',
        color: '#fff'
    }
});

export default styles
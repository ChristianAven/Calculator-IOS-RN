import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    fondo: {
        flex:             1,
        backgroundColor: 'black',
    },
    
    calculadoraContainer: {
        flex:   1,
        paddingHorizontal: 10,
        justifyContent: 'flex-end'
    },

    resultado: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
        flexShrink: 1
    },

    ResultadoPequeno: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 30,
        textAlign: 'right',
    },

    fila: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 20,
    },

    boton: {
        height: 80,
        width: 80,
        backgroundColor: '#9B9B9B',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 5
    },

    botonTexto: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '300'
    }
});

export default styles;
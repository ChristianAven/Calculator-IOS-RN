import React from 'react'
import { View, Text } from 'react-native';
import BotonCalc from '../components/BotonCalc';
import styles from '../theme/appTheme';
import useCalculadora from '../hooks/useCalculadora';

const CalculadoraScreen = () => {

    const { numeroAnterior,
            numero, 
            limpiar, 
            positivoNegativo, 
            btnDelete, 
            btnDividir, 
            btnMultiplicar, 
            btnRestar, 
            btnSumar, 
            crearNumero, 
            calcular} = useCalculadora()

    return (
        <View style={styles.calculadoraContainer}>
            <Text style={styles.ResultadoPequeno}>{numeroAnterior}</Text>
            <Text numberOfLines={2} adjustsFontSizeToFit style={styles.resultado}>{ numero }</Text>

            {/* Fila de botones */}
            <View style={ styles.fila } >
                {/* Boton */}
                <BotonCalc accion={limpiar} texto='C' color='#9B9B9B' colorTexto='black'/>
                <BotonCalc accion={positivoNegativo} texto='+/-' color='#9B9B9B' colorTexto='black'/>
                <BotonCalc accion={btnDelete} texto='del' color='#9B9B9B' colorTexto='black'/>
                <BotonCalc accion={btnDividir} texto='÷' color='#FF9427' colorTexto='white'/>
            </View>
            
            {/* Fila de botones */}
            <View style={ styles.fila } >
                {/* Boton */}
                <BotonCalc accion={() => crearNumero("7")} texto='7' />
                <BotonCalc accion={() => crearNumero("8")} texto='8' />
                <BotonCalc accion={() => crearNumero("9")} texto='9' />
                <BotonCalc accion={btnMultiplicar} texto='x' color='#FF9427' colorTexto='white'/>
            </View>
            {/* Fila de botones */}
            <View style={ styles.fila } >
                {/* Boton */}
                <BotonCalc accion={() => crearNumero("4")} texto='4' />
                <BotonCalc accion={() => crearNumero("5")} texto='5' />
                <BotonCalc accion={() => crearNumero("6")} texto='6' />
                <BotonCalc accion={btnRestar} texto='-' color='#FF9427' colorTexto='white'/>
            </View>
            {/* Fila de botones */}
            <View style={ styles.fila } >
                {/* Boton */}
                <BotonCalc accion={() => crearNumero("1")} texto='1' />
                <BotonCalc accion={() => crearNumero("2")} texto='2' />
                <BotonCalc accion={() => crearNumero("3")} texto='3' />
                <BotonCalc accion={btnSumar} texto='+' color='#FF9427' colorTexto='white'/>
            </View>
            {/* Fila de botones */}
            <View style={ styles.fila } >
                {/* Boton */}
                <BotonCalc accion={() => crearNumero("0")} texto='0' ancho={true}/>
                <BotonCalc accion={() => crearNumero(".")} texto='.' />
                <BotonCalc accion={calcular} texto='=' color='#FF9427' colorTexto='white'/>
            </View>

        </View>
    )
}
export default CalculadoraScreen
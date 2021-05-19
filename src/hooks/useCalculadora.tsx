import { useRef, useState } from "react";

enum Operadores {
    suma, resta, multiplicar, dividir,
} 

const useCalculadora = () => {
    const [numeroAnterior, setNumeroAnterior] = useState('');
    const [numero, setNumero] = useState('0');

    const ultimaOperacion = useRef<Operadores>();

    const limpiar = () => {
        setNumero('0');
        setNumeroAnterior('')
    }

    const crearNumero = (numeroTexto: string) => {

        // no aceptar el doble punto
        if( numero.includes('.') && numeroTexto === '.') return;

        //
        if (numero.startsWith('0') || numero.startsWith('-0')) {
            // punto decimal
            if (numeroTexto === '.') {
                setNumero(numero + numeroTexto)
                
            }else if(numeroTexto === '0' && numero.includes('.')){
                setNumero(numero + numeroTexto);
            }else if( numeroTexto !== '0' && !numero.includes('.')){
                setNumero(numeroTexto);
            }else if(numeroTexto === '0' && !numero.includes('.')){
                setNumero(numero);
            }else {
                setNumero(numero);
            }
        }else
        setNumero(numero + numeroTexto)
        
    }

    const positivoNegativo = () => {
        if( numero.includes('-')){
            setNumero(numero.replace('-',''))
        }else
            setNumero( '-' + numero)
    }

    const btnDelete = () => {
        if (numero.length <= 1 || (numero.length <= 2 && numero.startsWith('-')) || numero === 'NaN' || numero === 'Error' ) {
            return setNumero("0");
        }
        setNumero(numero.substring(0, numero.length - 1))
    }

    const cambiarNumPorAnterior = () => {
        if(numero.endsWith('.')){
            setNumeroAnterior(numero.slice(0,-1));
        }else {
            setNumeroAnterior(numero);
        }
        setNumero('0');
    }

    const btnDividir = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.dividir;
    }
    const btnMultiplicar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.multiplicar;
    }
    const btnSumar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.suma;
    }
    const btnRestar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.resta;
    }

    const calcular = () => {

        const num1 = Number(numero);
        const num2 = Number(numeroAnterior);

        switch (ultimaOperacion.current) {
            case Operadores.suma:
                setNumero(`${num2 + num1}`)
                setNumeroAnterior('')
                break;
                
            case Operadores.resta:
                setNumero(`${num2 - num1}`)
                setNumeroAnterior('')
                break;
                
            case Operadores.multiplicar:
                setNumero(`${num2 * num1}`)
                setNumeroAnterior('')
                break;
                
            case Operadores.dividir:
                if (num1 === 0 && num2 === 0) {
                    ultimaOperacion.current = Operadores.suma;
                    setNumeroAnterior('')
                    return setNumero('Error')
                }
                ultimaOperacion.current = Operadores.suma;
                setNumero(`${num2 / num1}`)
                setNumeroAnterior('')
                break;

        }
                
        setNumeroAnterior('');
    }

    return {
        numeroAnterior,
        numero,
        limpiar,
        positivoNegativo,
        btnDelete,
        btnDividir,
        crearNumero,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular,
    }

}

export default useCalculadora

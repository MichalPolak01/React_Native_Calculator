import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { mainStyles as styles } from "../styles/mainStyles";

const Calculator = () => {
    const[firstNumber, setFirstNumber] = useState('');
    const[secondNumber, setSecondNumber] = useState('0');
    const[operator, setOperator] = useState('');

    const createNumber = (number= '0') => {
        setSecondNumber(secondNumber == '0'? number  : secondNumber + number);
    }
    
    const createOperator = (Operator) => {
        if (operator === '' && secondNumber != '') {
            setOperator(Operator);
            setFirstNumber(secondNumber);
            setSecondNumber('0');
        }
    }

    const result = () => {
        let Result = 0;
        if (operator != '' && firstNumber != '' && secondNumber != '') {
            switch (operator) {
                case '/':
                    Result = parseFloat(firstNumber) / parseFloat(secondNumber);
                    clear();
                    setSecondNumber(Result);
                    break;
                case 'x':
                    Result = parseFloat(firstNumber) * parseFloat(secondNumber);
                    clear();
                    setSecondNumber(Result);
                    break;
                case '-':
                    Result = parseFloat(firstNumber) - parseFloat(secondNumber);
                    clear();
                    setSecondNumber(Result);
                    break;
                case '+':
                    Result = parseFloat(firstNumber) + parseFloat(secondNumber);
                    clear();
                    setSecondNumber(Result);
                    break;
            }
        }
    }

    const clear = () => {
        setFirstNumber('');
        setSecondNumber('0');
        setOperator('');
    }

    return (
        <View style={styles.body}>
            <View style={styles.window}>
                <Text style={styles.firstNumber}>
                    {firstNumber} {operator}
                </Text>
                <Text style={styles.secondNumber}>
                    {secondNumber}
                </Text>
            </View>
            <View style={styles.keyboard}>
                <TouchableOpacity onPress={clear} style={[styles.buttonSmall, styles.buttonClear]}>
                    <Text style={styles.buttonText}>AC</Text>
                </TouchableOpacity>
                <View style={styles.buttonHuge}>
                </View>
                <TouchableOpacity onPress={() => createOperator('/')} style={[styles.buttonSmall, styles.buttonOperator]}>
                    <Text style={styles.buttonText}>/</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => createNumber('7')} style={[styles.buttonSmall, styles.buttonNumber]}>
                    <Text style={styles.buttonText}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => createNumber('8')} style={[styles.buttonSmall, styles.buttonNumber]}>
                    <Text  style={styles.buttonText}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => createNumber('9')} style={[styles.buttonSmall, styles.buttonNumber]}>
                    <Text  style={styles.buttonText}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => createOperator('x')} style={[styles.buttonSmall, styles.buttonOperator]}>
                    <Text style={styles.buttonText}>x</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => createNumber('4')} style={[styles.buttonSmall, styles.buttonNumber]}>
                    <Text  style={styles.buttonText}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => createNumber('5')} style={[styles.buttonSmall, styles.buttonNumber]}>
                    <Text  style={styles.buttonText}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => createNumber('6')} style={[styles.buttonSmall, styles.buttonNumber]}>
                    <Text  style={styles.buttonText}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => createOperator('-')} style={[styles.buttonSmall, styles.buttonOperator]}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => createNumber('1')} style={[styles.buttonSmall, styles.buttonNumber]}>
                    <Text  style={styles.buttonText}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => createNumber('2')} style={[styles.buttonSmall, styles.buttonNumber]}>
                    <Text  style={styles.buttonText}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => createNumber('3')} style={[styles.buttonSmall, styles.buttonNumber]}>
                    <Text  style={styles.buttonText}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => createOperator('+')} style={[styles.buttonSmall, styles.buttonOperator]}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => createNumber('0')} style={[styles.buttonHuge, styles.buttonNumber]}>
                    <Text  style={styles.buttonText}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => createNumber('.')} style={[styles.buttonSmall, styles.buttonNumber]}>
                    <Text style={styles.buttonText}>,</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={result} style={[styles.buttonSmall, styles.buttonOperator]}>
                    <Text  style={styles.buttonText}>=</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Calculator;
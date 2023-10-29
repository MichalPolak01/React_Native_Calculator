import React, { useState } from "react";
import { Text, View } from "react-native";
import * as _ from 'lodash';
import MathView from 'react-native-math-view';
import { mainStyles as styles } from "../styles/mainStyles";
import Button from "./Button";

const Calculator = (props) => {
    const[firstNumber, setFirstNumber] = useState('');
    const[secondNumber, setSecondNumber] = useState('0');
    const[operator, setOperator] = useState('');

    const createNumber = (number) => {
        if (number === '.' && secondNumber.includes('.') || number === '.' && secondNumber === '0' || number === '.' && secondNumber === '-' ) {
            return;
        }

        setSecondNumber(secondNumber == '0' || secondNumber == 'Infinity'? number  : secondNumber + number);
    }
    
    const createOperator = (Operator) => {
        if (Operator === '-' && secondNumber === '0') {
            setSecondNumber('-');
        }

        if (operator === '' && secondNumber != '' && secondNumber != '0' && secondNumber != '-') {
            setOperator(Operator);
            setFirstNumber(secondNumber);
            setSecondNumber('0');
        }
    }

    const calculate = () => {
        let result = 0;
        if (operator != '' && firstNumber != '' && secondNumber != '') {
            switch (operator) {
                case '/':
                    result = _.divide(parseFloat(firstNumber), parseFloat(secondNumber));
                    clear();
                    setSecondNumber(String(result));
                    break;
                case 'x':
                    result = _.multiply(parseFloat(firstNumber), parseFloat(secondNumber));
                    clear();
                    setSecondNumber(String(result));
                    break;
                case '-':
                    result = _.subtract(parseFloat(firstNumber), parseFloat(secondNumber));
                    clear();
                    setSecondNumber(String(result));
                    break;
                case '+':
                    result = _.add( parseFloat(firstNumber), parseFloat(secondNumber) );
                    clear();
                    setSecondNumber(String(result));
                    break;
            }
        }
    }

    const calculateExtends = (operation) => {
        switch (operation) {
            case '+/-':
                setSecondNumber(String(parseFloat(secondNumber) * (-1)));
                break;
            case '%':
                setSecondNumber(String(parseFloat(secondNumber) * (0.01)));
                break;
            case 'x^2':
                setSecondNumber(String(Math.pow(parseFloat(secondNumber), 2)));
                break;
            case 'x^3':
                setSecondNumber(String(Math.pow(parseFloat(secondNumber), 3)));
                break;
            case 'sqrt2':
                setSecondNumber(String(Math.sqrt(parseFloat(secondNumber))));
                break;
            case 'sqrt3':
                setSecondNumber(String(Math.pow(parseFloat(secondNumber), 1/3)));
                break;
            case 'ln':
                setSecondNumber(String(Math.log(parseFloat(secondNumber))));
                break;
            case 'log10':
                setSecondNumber(String(Math.log10(parseFloat(secondNumber))));
                break;
            case 'factorial':
                let result = 1;
                if (secondNumber != '0' && secondNumber != '1' ){
                    for (let i = 2; i <= parseFloat(secondNumber); i++) {
                        result *=i;
                    }
                }
                setSecondNumber(String(result));
                break;
            case 'sin':
                setSecondNumber(String(Math.sin(parseFloat(secondNumber))));
                break;
            case 'cos':
                setSecondNumber(String(Math.cos(parseFloat(secondNumber))));
                break;
            case 'tan':
                setSecondNumber(String(Math.tan(parseFloat(secondNumber))));
                break;
        }
    }

    const clear = () => {
        setFirstNumber('');
        setSecondNumber('0');
        setOperator('');
    }

    const visibleSpecial = props.horizontal ?? false;

    const buttons = [
        {
            name: <MathView math={'x^{2}'} style={styles.buttonText }/>,
            action: () => calculateExtends('x^2'),
            styles: [styles.buttonSmall, styles.buttonSpecial, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: visibleSpecial
        },
        {
            name: <MathView math={'x^{3}'} style={styles.buttonText }/>,
            action: () => calculateExtends('x^3'),
            styles: [styles.buttonSmall, styles.buttonSpecial, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: visibleSpecial
        },
        {
            name: 'AC',
            action: clear,
            styles: [styles.buttonSmall, styles.buttonClear, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: true
        },
        {
            name: '+/-',
            action: () => calculateExtends('+/-'),
            styles: [styles.buttonSmall, styles.buttonSpecial, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: true
        },
        {
            name: '%',
            action: () => calculateExtends('%'),
            styles: [styles.buttonSmall, styles.buttonSpecial, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: true
        },
        {
            name: '/',
            action: () => createOperator('/'),
            styles: [styles.buttonSmall, styles.buttonOperator, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: true
        },
        {
            name: <MathView math={'\\sqrt[2]{x}'} style={styles.buttonText }/>,
            action: () => calculateExtends('sqrt2'),
            styles: [styles.buttonSmall, styles.buttonSpecial, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: visibleSpecial
        },
        {
            name: <MathView math={'\\sqrt[3]{x}'} style={styles.buttonText }/>,
            action: () => calculateExtends('sqrt3'),
            styles: [styles.buttonSmall, styles.buttonSpecial, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: visibleSpecial
        },
        {
            name: '7',
            action: () => createNumber('7'),
            styles: [styles.buttonSmall, styles.buttonNumber, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: true
        },
        {
            name: '8',
            action: () => createNumber('8'),
            styles: [styles.buttonSmall, styles.buttonNumber, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: true
        },
        {
            name: '9',
            action: () => createNumber('9'),
            styles: [styles.buttonSmall, styles.buttonNumber, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: true
        },
        {
            name: 'x',
            action: () => createOperator('x'),
            styles: [styles.buttonSmall, styles.buttonOperator, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: true
        },
        {
            name: <MathView math={'\\ln{x}'} style={styles.buttonText }/>,
            action: () => calculateExtends('ln'),
            styles: [styles.buttonSmall, styles.buttonSpecial, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: visibleSpecial
        },
        {
            name: <MathView math={'\\log_{10}{x}'} style={styles.buttonText }/>,
            action: () => calculateExtends('log10'),
            styles: [styles.buttonSmall, styles.buttonSpecial, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: visibleSpecial
        },
        {
            name: '4',
            action: () => createNumber('4'),
            styles: [styles.buttonSmall, styles.buttonNumber, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: true
        },
        {
            name: '5',
            action: () => createNumber('5'),
            styles: [styles.buttonSmall, styles.buttonNumber, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: true
        },
        {
            name: '6',
            action: () => createNumber('6'),
            styles: [styles.buttonSmall, styles.buttonNumber, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: true
        },
        {
            name: '-',
            action: () => createOperator('-'),
            styles: [styles.buttonSmall, styles.buttonOperator, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: true
        },
        {
            name: 'x!',
            action: () => calculateExtends('factorial'),
            styles: [styles.buttonSmall, styles.buttonSpecial, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: visibleSpecial
        },
        {
            name: 'sin',
            action: () => calculateExtends('sin'),
            styles: [styles.buttonSmall, styles.buttonSpecial, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: visibleSpecial
        },
        {
            name: '1',
            action: () => createNumber('1'),
            styles: [styles.buttonSmall, styles.buttonNumber, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: true
        },
        {
            name: '2',
            action: () => createNumber('2'),
            styles: [styles.buttonSmall, styles.buttonNumber, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: true
        },
        {
            name: '3',
            action: () => createNumber('3'),
            styles: [styles.buttonSmall, styles.buttonNumber, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: true
        },
        {
            name: '+',
            action: () => createOperator('+'),
            styles: [styles.buttonSmall, styles.buttonOperator, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: true
        },
        {
            name: 'cos',
            action: () => calculateExtends('cos'),
            styles: [styles.buttonSmall, styles.buttonSpecial, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: visibleSpecial
        },
        {
            name: 'tan',
            action: () => calculateExtends('tan'),
            styles: [styles.buttonSmall, styles.buttonSpecial, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: visibleSpecial
        },
        {
            name: '0',
            action: () => createNumber('0'),
            styles: [styles.buttonHuge, styles.buttonNumber, (visibleSpecial) ? styles.buttonHorizontalHuge : []],
            visible: true
        },
        {
            name: ',',
            action: () => createNumber('.'),
            styles: [styles.buttonSmall, styles.buttonNumber, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: true
        },
        {
            name: '=',
            action: calculate,
            styles: [styles.buttonSmall, styles.buttonEqual, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: true
        }
    ];

    const keyboard = () => {
        return _.map(buttons, (button, index) => (
            button.visible? (
                <Button key={index} onPress={button.action} style={button.styles} 
                textStyle={styles.buttonText} name={button.name}></Button>
            ) : null
        ));
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
                {keyboard()}
            </View>
        </View>
    );
}

export default Calculator;
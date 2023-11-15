import React, { useState } from "react";
import { Text, View } from "react-native";
import * as _ from 'lodash';
import MathView from 'react-native-math-view';
import { mainStyles as styles } from "../styles/mainStyles";
import Button from "./Button";

const Calculator = (props) => {
    const[expression, setExpression] = useState('0');
    const[lastNumber, setLastNumber] = useState('');

    const createExpression = (input) => {
        const lastChar = expression.slice(-1);
        const mathOperators = ['+', '-', '*', '/'];

        if (input === '.' && lastNumber.includes('.')) {
            return;
        }

        if (mathOperators.includes(lastChar)&& mathOperators.includes(input)) {
            setExpression(expression => expression.slice(0, -1) + input);
            return;
        }

        if (expression === 'Infinity' && input === '.'|| expression === '-Infinity' && input === '.') {
            setExpression('0.');
        } else {
            setExpression((expression === '0' && input != '.' || expression === 'Infinity' || expression === '-Infinity') ? input : expression + input);
        }
        
        setLastNumber((mathOperators.includes(input)) ? '' : lastNumber + input);
    }

    const calculate = () => {
        let result = eval(expression);
        setExpression(String(result));
        setLastNumber(String(result));
    }

    const calculateExtends = (operation) => {
        switch (operation) {
            case '+/-':
                setExpression(String(eval(expression) * (-1)));
                break;
            case '%':
                setExpression(String(eval(expression) * (0.01)));
                break;
            case 'x^2':
                setExpression(String(Math.pow(eval(expression), 2)));
                break;
            case 'x^3':
                setExpression(String(Math.pow(eval(expression), 3)));
                break;
            case 'sqrt2':
                setExpression(String(Math.sqrt(eval(expression))));
                break;
            case 'sqrt3':
                setExpression(String(Math.pow(eval(expression), 1/3)));
                break;
            case 'ln':
                setExpression(String(Math.log(eval(expression))));
                break;
            case 'log10':
                setExpression(String(Math.log10(eval(expression))));
                break;
            case 'factorial':
                let result = 1;
                if (expression != '0' && expression != '1' ){
                    for (let i = 2; i <= eval(expression); i++) {
                        result *=i;
                    }
                }
                setExpression(String(result));
                break;
            case 'sin':
                setExpression(String(Math.sin(eval(expression))));
                break;
            case 'cos':
                setExpression(String(Math.cos(eval(expression))));
                break;
            case 'tan':
                setExpression(String(Math.tan(eval(expression))));
                break;
        }
    }

    const clear = () => {
        setExpression('0');
        setLastNumber('');
    }

    const visibleSpecial = props.horizontal ?? false;

    const buttons = [
        {
            name: <MathView math={'(x)^{2}'} style={styles.buttonText }/>,
            action: () => calculateExtends('x^2'),
            styles: [styles.buttonSmall, styles.buttonSpecial, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: visibleSpecial
        },
        {
            name: <MathView math={'(x)^{3}'} style={styles.buttonText }/>,
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
            action: () => createExpression('/'),
            styles: [styles.buttonSmall, styles.buttonOperator, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: true
        },
        {
            name: <MathView math={'\\sqrt[2]{(x)}'} style={styles.buttonText }/>,
            action: () => calculateExtends('sqrt2'),
            styles: [styles.buttonSmall, styles.buttonSpecial, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: visibleSpecial
        },
        {
            name: <MathView math={'\\sqrt[3]{(x)}'} style={styles.buttonText }/>,
            action: () => calculateExtends('sqrt3'),
            styles: [styles.buttonSmall, styles.buttonSpecial, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: visibleSpecial
        },
        {
            name: '7',
            action: () => createExpression('7'),
            styles: [styles.buttonSmall, styles.buttonNumber, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: true
        },
        {
            name: '8',
            action: () => createExpression('8'),
            styles: [styles.buttonSmall, styles.buttonNumber, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: true
        },
        {
            name: '9',
            action: () => createExpression('9'),
            styles: [styles.buttonSmall, styles.buttonNumber, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: true
        },
        {
            name: 'x',
            action: () => createExpression('*'),
            styles: [styles.buttonSmall, styles.buttonOperator, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: true
        },
        {
            name: <MathView math={'\\ln{(x)}'} style={styles.buttonText }/>,
            action: () => calculateExtends('ln'),
            styles: [styles.buttonSmall, styles.buttonSpecial, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: visibleSpecial
        },
        {
            name: <MathView math={'\\log_{10}{(x)}'} style={styles.buttonText }/>,
            action: () => calculateExtends('log10'),
            styles: [styles.buttonSmall, styles.buttonSpecial, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: visibleSpecial
        },
        {
            name: '4',
            action: () => createExpression('4'),
            styles: [styles.buttonSmall, styles.buttonNumber, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: true
        },
        {
            name: '5',
            action: () => createExpression('5'),
            styles: [styles.buttonSmall, styles.buttonNumber, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: true
        },
        {
            name: '6',
            action: () => createExpression('6'),
            styles: [styles.buttonSmall, styles.buttonNumber, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: true
        },
        {
            name: '-',
            action: () => createExpression('-'),
            styles: [styles.buttonSmall, styles.buttonOperator, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: true
        },
        {
            name: '(x)!',
            action: () => calculateExtends('factorial'),
            styles: [styles.buttonSmall, styles.buttonSpecial, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: visibleSpecial
        },
        {
            name: 'sin(x)',
            action: () => calculateExtends('sin'),
            styles: [styles.buttonSmall, styles.buttonSpecial, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: visibleSpecial
        },
        {
            name: '1',
            action: () => createExpression('1'),
            styles: [styles.buttonSmall, styles.buttonNumber, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: true
        },
        {
            name: '2',
            action: () => createExpression('2'),
            styles: [styles.buttonSmall, styles.buttonNumber, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: true
        },
        {
            name: '3',
            action: () => createExpression('3'),
            styles: [styles.buttonSmall, styles.buttonNumber, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: true
        },
        {
            name: '+',
            action: () => createExpression('+'),
            styles: [styles.buttonSmall, styles.buttonOperator, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: true
        },
        {
            name: 'cos(x)',
            action: () => calculateExtends('cos'),
            styles: [styles.buttonSmall, styles.buttonSpecial, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: visibleSpecial
        },
        {
            name: 'tan(x)',
            action: () => calculateExtends('tan'),
            styles: [styles.buttonSmall, styles.buttonSpecial, (visibleSpecial) ? styles.buttonHorizontal : []],
            visible: visibleSpecial
        },
        {
            name: '0',
            action: () => createExpression('0'),
            styles: [styles.buttonHuge, styles.buttonNumber, (visibleSpecial) ? styles.buttonHorizontalHuge : []],
            visible: true
        },
        {
            name: ',',
            action: () => createExpression('.'),
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
                <Text style={styles.secondNumber}>
                    {expression} 
                </Text>
            </View>
            <View style={styles.keyboard}>
                {keyboard()}
            </View>
        </View>
    );
}

export default Calculator;
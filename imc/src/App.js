import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function App() {
    
    const [height, setHeight] = useState(0);
    const [mass, setMass] = useState(0);
    const [result, setResult] = useState(0);
    const [resultText, setResultText] = useState("");

    function calculate() {
        const imc = mass/(height*height);
        setResult(imc);

        if(imc < 16) {
            setResultText("Magreza Grave");
        }else if(imc < 17) {
            setResultText("Magreza Moderada");
        }else if(imc < 18.5) {
            setResultText("Magreza Leve");
        }else if(imc < 25) {
            setResultText ("Saudável");
        }else if(imc < 30) {
            setResultText("Sobrepeso");
        }else if(imc < 35) {
            setResultText("Obesidade Grau I");
        }else if(imc < 40) {
            setResultText("Obesidade Grau II");
        }else {
            setResultText("Obesidade Grau III")
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Altura" keyboardType="numeric" style={styles.input} onChangeText={(height)=>{setHeight(height)}}/>
                <TextInput placeholder="Peso" keyboardType="numeric" style={styles.input} onChangeText={(mass)=>{setMass(mass)}}/>
            </View>
            
            <TouchableOpacity onPress={calculate} style={styles.button}>
                <Text style={styles.buttonText}>Calcular</Text>
            </TouchableOpacity>

            <Text style={styles.result}> {result.toFixed(2)} </Text>
            <Text style={[styles.result, {fontSize:30}]}> {resultText} </Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    inputContainer: {
        flexDirection: 'row',
    },
    input: {
        height: 80,
        fontSize: 50,
        textAlign: 'center',
        width: '50%',
        marginTop: 24,
    }, 
    button: {
        backgroundColor: '#1E90FF',
        margin: 50,
        borderRadius: 8,
    },
    buttonText: {
        alignSelf: 'center',
        padding: 30,
        fontSize: 25,
        color: '#F5FCFF',
        fontWeight: 'bold',
    },
    result: {
        alignSelf: 'center',
        fontSize: 50,
        color: 'black',
        padding: 15,
    }
})
import React, {useState} from 'react';
import {Button, Text, TextInput, StyleSheet, View} from 'react-native';


export default function BasicApp(){

    const [value, onChangeText] = useState('Placeholder');
    

    return(
        <View style ={{...styles.container}}>

            <TextInput style = {styles.textinput}
            onChangeText = {text=>onChangeText(text)}
            value = {value} clearTextonFocus = 'false'
            />

            <Button title = 'Clear' onPress={()=>onChangeText('')}/>


            <Text style = {styles.text}> {value} </Text>

        </View>
    );
}

    const styles = StyleSheet.create(
        {
            container:{
                flex:1,
                justifyContent:'center',
                alignItems:'center',
                padding:100,
                backgroundColor:'yellow'
            },
            textinput:{
                color: 'green',
                borderColor: 'black',
                borderWidth: 1,
                width: '100%',
                padding:5,
                margin:10
            },
            text:{
                color: 'black',
            }
        }
    );

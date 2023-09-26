import React, {useState} from 'react';
import {Button, Switch, Text, TextInput, StyleSheet, View} from 'react-native';


export default function BasicApp(){

    const [value, onChangeText] = useState('Placeholder');
    const [backgroundColor, setBackgroundColor] = useState('white');
    const [isLightBackground, setLightBackground] = useState(true);

    const backGroundColorchangeswitch = () => {
        const colorChange = isLightBackground ? 'black' : 'white';
        setBackgroundColor(colorChange);
        setLightBackground(!isLightBackground); };

    return(
        <View style ={{...styles.container, backgroundColor}}>

            <TextInput style = {styles.textinput}
            onChangeText = {text=>onChangeText(text)}
            value = {value} clearTextonFocus = 'false'
            />

            <Button title = 'Clear' onPress={()=>onChangeText('')}/>

            <Switch
                value={!isLightBackground}
                onValueChange={backGroundColorchangeswitch}/>

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
                
            },
            textinput:{
                color: 'green',
                borderColor: 'black',
                borderWidth: 1,
                width: '100%',
                padding:5,
                margin:10,
            },
            text:{
                color: 'black',
            },
        }
    );

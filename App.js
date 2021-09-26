import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text,Switch, View, Button, TextInput, SafeAreaView } from 'react-native';

export default function App() {
  const [getWeight, setWeight] = useState(0);
  const [getHeight, setHeight] = useState(0);
  const [getResult, setResult] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const buttonPressed = () => {
    parseFloat(getWeight);
    parseFloat(getHeight);
    
    var heightSquared = getHeight*getHeight;
    if(isEnabled === true)
    {heightSquared = heightSquared * 703}
    var result = getWeight / heightSquared;
    setResult(result);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.window}>
  
        <View style={styles.header}> 
          <Text style = {styles.heading}>Body Mass Index calculator</Text>
        </View>

        <View style={styles.switch}>
          <Text style= {styles.resultVal}>Toggle between Standard Sl and metric systems</Text>
          <Text style={styles.textSplit}>
            <Text style= {styles.standardSwitch}>Standart (kg/cm2)</Text>
            <Text style= {styles.metricSwitch}> Metric (lb/in)</Text>
          </Text>
          <Switch
            trackColor={{ false: "#00ff00", true: "#00ffff" }}
            thumbColor={isEnabled ?  "#00ffff": "#00ff00"}
            onValueChange={toggleSwitch}
            value={isEnabled}/>
        </View>

        <View style={styles.body}>
          <View>
            
            <Text style ={styles.text}>weight</Text>
            <TextInput 
            style ={styles.input}
            placeholder = 'e.g. 107.43'
            keyboardType = 'decimal-pad'
            onChangeText={weight => setWeight(weight)}/>
            
            <Text style ={styles.text}>height </Text>
            <TextInput
            style = {styles.input}
            placeholder = 'e.g. 6.4'
            keyboardType = 'numeric' 
            onChangeText={height => setHeight(height)}/>
            
            


          </View>
          
          <View style = {styles.buttonContainer}>
            <Button title = 'get BMI' onPress={buttonPressed}/>
          </View>
        

          <StatusBar style="auto" />
        </View>
      
        <View style ={styles.result}>
          <Text style ={styles.text}>result:   <Text >{getResult}</Text></Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#d340e0',
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
  },
  header:{
  width:'100%',
  backgroundColor: '#e9b4ee',
  padding: 20,
  marginTop: 5,
  
  },
  heading: {
    fontSize: 30,
    textAlign: 'center',
    color: '#1e90ff',
    fontWeight: 'bold',
    marginTop: 0,
  },
  body: {
    width:'100%',
    backgroundColor: '#e9b4ee',
    padding: 20,
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: '#00ffff',

  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    margin:10,
    width: 200,
  },
  standardSwitch:{
    color: 'blue',
    backgroundColor: '#00ff00',
    fontSize: 20,
  },
  metricSwitch:{
    width: 200,
    color: 'blue',
    backgroundColor: '#00ffff',
    fontSize: 20,
  },
  
  switch:{
    width:'100%',
    alignItems: 'center',
    backgroundColor: '#e9b4ee',
  },
  result:{
    width:'100%',
    fontSize: 15,
    backgroundColor: '#e9b4ee',
    padding: 10,
    alignItems: 'center',
  },
  text:{

    color: '#1e90ff',
    fontWeight: 'bold',
    backgroundColor: '#e9b4ee',
    fontSize: 20,
  },
  textField:{
    borderColor: '#e9b4ee',
  },
  window:{
    fontWeight: 'bold',
    alignItems: 'center',
    padding: 10,
    width:'90%',
    height: '70%'
    ,
  }
});

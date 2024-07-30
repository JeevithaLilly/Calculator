import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


export const Calculator = () => {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');
  
  //Caluclation method
  const handlePress = (value:any) => {
    if (value === '=') {
      
        setResult(eval(display).toString());
      } 
    else if (value === 'C') {
      setDisplay('');
      setResult('');
    } 
    else if(value=="DL"){
      setResult(result.substring(0,result.length-1))
    }else {
      setDisplay(display + value);
    }
  };

///Comman button 
  const Btn=({title,type}:any)=>(
    <TouchableOpacity
    onPress={() => handlePress(title)
   
  }
    style={{ borderRadius:10,
      elevation:2,
      backgroundColor:type=="equal"?"#19ACFF":"white",
      height:50,
      width:50,
      margin:16
    
    }}>
      <Text style={{
        fontSize:25,
      color:type=="top"?"blue":"black",
      marginTop:5,
      justifyContent:"center",
        alignSelf:"center",
    }}>
    {title}
      </Text>
    
    </TouchableOpacity>
      )

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{display}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.maincontainer}>  
      <Btn title="C" type="top"></Btn>
      <Btn title="DL" type="top"></Btn>
      <Btn title="/" type="top"></Btn>
      <Btn title="%" type="top"></Btn>
      <Btn title="7" type="number"></Btn>
      <Btn title="8" type="number"></Btn>
      <Btn title="9" type="number"></Btn>
      <Btn title="*" type="top"></Btn>
      <Btn title="4" type="number"></Btn>
      <Btn title="5" type="number"></Btn>
      <Btn title="6" type="number"></Btn>
      <Btn title="-" type="top"></Btn>
      <Btn title="1" type="right"></Btn>
      <Btn title="2" type="number"></Btn>
      <Btn title="3" type="number"></Btn>
      <Btn title="+" type="top"></Btn>
      <Btn title="00" type="right"></Btn>
      <Btn title="0" type="right"></Btn>
      <Btn title="." type="right"></Btn>
      <Btn title="=" type="equal"></Btn>
      </View>
 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  maincontainer:{flexDirection:"row",flexWrap:"wrap",
    justifyContent:"center",
      backgroundColor:"white",
      borderTopRightRadius:20,borderTopLeftRadius:20
    },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  displayContainer: {
    flex: 2,
    backgroundColor: '#B2DAFF',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 20,
  },
  displayText: {
    fontSize: 36,
    color: '#333',
  },
  resultText: {
    fontSize: 24,
    color: 'black',
    fontWeight:"600"
  },
  buttonsContainer: {
    flex: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    width: '25%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  buttonText: {
    fontSize: 28,
    color: '#333',
  },
});



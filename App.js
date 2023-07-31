import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {useState} from "react"
import Header from './src/components/Header';

const colors=["#F7DC6F","#A2D9CE","#D7BDE2"]

export default function App() {
  const [isWorking,setIsWorking]= useState(false)
  const [time,setTime]= useState(25*60)
  const [currentTime,setCurrentTime]= useState("Pomo"|"Short"|"Break")

  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingTop:Platform.OS==="android" && 30}}>
        <Text style={styles.text}>Hola perro!</Text>
        <Header time={time}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 32,
    fontWeight: "bold"
  }
});
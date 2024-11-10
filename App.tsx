import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, Platform } from 'react-native';
import React, {useEffect, useState} from "react";
import { Silkscreen_400Regular, useFonts } from "@expo-google-fonts/silkscreen";
import * as SplashScreen from 'expo-splash-screen';
import './styles.css';

import ButtonsGridComp from "./components/ButtonsGridComp";

export default function App() {

  const [loaded, error] = useFonts({Silkscreen_400Regular});
  const [valueX, setValueX] = useState(0);
  const [valueY, setValueY] = useState(0);
  const [valueZ, setValueZ] = useState(0);
  const [hasPresses, setHasPresses] = useState(false);

  const firstEquation: number = hasPresses ? (2*valueX)+11 : 0;
  const secondEquation: number = hasPresses ? (2*valueZ + valueY)-5 : 0;
  const thirdEquation: number = hasPresses ? Math.abs((valueY + valueZ) - valueX) : 0;

  useEffect(()=>{
    if (loaded || error) {
      SplashScreen.hideAsync();
      }
    }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  const setX = (v: number)=>{
    setValueX(v);
    setHasPresses(true);
  };

  const setY = (v: number) => {
    setValueY(v);
    setHasPresses(true);
  };

  const setZ = (v: number) => {
    setValueZ(v);
    setHasPresses(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.credText}>By: DannyB935</Text>
      <View style={styles.rows}>
        <ButtonsGridComp label={"X"} setValue={setX}/>
      </View>
      <View style={styles.rows}>
        <ButtonsGridComp label={"Y"} setValue={setY}/>
      </View>
      <View style={styles.rows}>
        <ButtonsGridComp label={"Z"} setValue={setZ}/>
      </View>
      <View style={styles.numContainer}>
        <Text style={styles.resNumbers}>
          {/*We set the values according the equations in game*/}
          {firstEquation} {secondEquation} {thirdEquation}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090a11cc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rows:{
    marginVertical: 10,
    flexDirection: 'row',
  },
  numContainer:{
    padding: 15,
    marginVertical: 10
  },
  resNumbers:{
    color: 'white',
    fontSize: 63,
    fontWeight: "semibold",
    fontFamily: Platform.select({
      android: 'Silkscreen_400Regular',
      ios: 'Silkscreen_400Regular',
    }),
  },
  credText:{
    color: 'white',
    fontSize: 18,
  }
});

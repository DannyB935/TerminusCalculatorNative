import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import Simbolo_1 from './assets/images/Simbolo_1.jpg';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.rows}>
        <Text style={styles.labels}>X</Text>
        <View style={styles.grid}>
          <TouchableOpacity style={styles.imgBtn}>
            <Image source={Simbolo_1} style={styles.images}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imgBtn}><Text style={styles.simpleText}>Btn1</Text></TouchableOpacity>
          <TouchableOpacity style={styles.imgBtn}><Text style={styles.simpleText}>Btn1</Text></TouchableOpacity>
          <TouchableOpacity style={styles.imgBtn}><Text style={styles.simpleText}>Btn1</Text></TouchableOpacity>
          <TouchableOpacity style={styles.imgBtn}><Text style={styles.simpleText}>Btn1</Text></TouchableOpacity>
          <TouchableOpacity style={styles.imgBtn}><Text style={styles.simpleText}>Btn1</Text></TouchableOpacity>
        </View>
      </View>
      <View style={styles.rows}>
        <Text style={styles.labels}>Y</Text>
      </View>
      <View style={styles.rows}>
        <Text style={styles.labels}>Z</Text>
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
  grid:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '80%',
    maxWidth: '80%'
  },
  imgBtn:{
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 10,
    width: '23%',
    maxWidth: '23%',
  },
  images:{
    height: 70,
    width: 70
  },
  labels: {
    fontSize: 64,
    fontWeight: 'semibold',
    color: '#fff',
    width: '20%',
    maxWidth: '20%',
    paddingHorizontal: 20
  },
  simpleText: {
    color: '#fff'
  }
});

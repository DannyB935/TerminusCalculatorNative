import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import {IBtnGridProps} from "../utils/IBtnGridProps";

import Simbolo_1 from '../assets/images/Simbolo_1.jpg';
import Simbolo_2 from '../assets/images/Simbolo_2.jpg';
import Simbolo_3 from '../assets/images/Simbolo_3.jpg';
import Simbolo_4 from '../assets/images/Simbolo_4.jpg';
import Simbolo_5 from '../assets/images/Simbolo_5.jpg';
import Simbolo_6 from '../assets/images/Simbolo_6.jpg';

export default function ButtonsGridComp(props: IBtnGridProps){
  const { label, setValue } = props;

  const btnList: Array<Object> = [
    { id: 1, imgSrc: Simbolo_1, equals: 22 },
    { id: 2, imgSrc: Simbolo_2, equals: 21 },
    { id: 3, imgSrc: Simbolo_3, equals: 20 },
    { id: 4, imgSrc: Simbolo_4, equals: 11 },
    { id: 5, imgSrc: Simbolo_5, equals: 10 },
    { id: 6, imgSrc: Simbolo_6, equals: 0 }
  ]

  const changeParentValue = (v: number) =>{
    setValue(v);
  };

  return(
    <>
      <Text style={styles.labels}>{label}</Text>
      <View style={styles.grid}>
        {btnList.map((image)=>(
          <TouchableOpacity style={styles.imgBtn} onPress={()=>changeParentValue(image.equals)} key={image.id}>
            <Image source={image.imgSrc} style={styles.images}></Image>
          </TouchableOpacity>
        ))}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
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
    width: 70,
    borderRadius: 10
  },
  labels: {
    fontSize: 64,
    fontWeight: 'semibold',
    color: '#fff',
    width: '20%',
    maxWidth: '20%',
    paddingHorizontal: 20,
    textAlign: "center",
    textAlignVertical: "center"
  }
});
import { View, Text, SafeAreaView ,TextInput,Image, ScrollView, StyleSheet} from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import {  useState } from "react";


export default function Movice() {
    const handelFilter = (text) => {
        setMovice(contents.filter((movice) => movice.name.toLowerCase().startsWith(text.toLowerCase())))
      };
      const [movice, setMovice] = useState( [
            {
              id: 1,
              src: require('../../assets/1s.jpeg'),
              name: 'The Batman',
            }
    
    
      ]);
    const styles =StyleSheet.create({
        container:{ flexDirection: 'row', alignItems: 'flex-start',alignItems:'center',justifyContent:'space-between' ,width:385,backgroundColor:'gray',marginTop:20},
        text1:{color:'white', fontSize:15 ,fontWeight:'bold',marginRight:130},
       img1:{width:100 ,height:100},
        textInut:{width:350 , height:55,borderColor:'gray',borderWidth:1,borderRadius:5,marginHorizontal:'auto' ,paddingHorizontal:10, backgroundColor:'gray'}
    })
  return (
   <SafeAreaView style={{flex:1,backgroundColor:'black'}} >
        <TextInput placeholder="search" onChangeText={handelFilter}  style={ styles.textInut}/>
        <View style={{alignItems:'start' ,padding:40}}>
              <Text style={{color:'white', fontSize:30 ,fontWeight:'bold'}}>Top Searches</Text>
           
            
      </View>
     <ScrollView>
   
      <View style={styles.container}>
         <Image source={require('../../assets/2s.jpeg')} style={styles.img1} />
            <Text style={styles.text1}>citiation</Text>
            <AntDesign name="playcircleo" size={24} color="white" />

      </View>
      <View style={styles.container}>
         <Image source={require('../../assets/3s.jpeg')} style={styles.img1} />
            <Text style={styles.text1}>citiation</Text>
            <AntDesign name="playcircleo" size={24} color="white" />

      </View>
      <View style={styles.container}>
         <Image source={require('../../assets/4x.jpg')} style={styles.img1} />
            <Text style={styles.text1}>citiation</Text>
            <AntDesign name="playcircleo" size={24} color="white" />

      </View>
      <View style={styles.container}>
         <Image source={require('../../assets/5s.jpeg')} style={styles.img1} />
            <Text style={styles.text1}>citiation</Text>
            <AntDesign name="playcircleo" size={24} color="white" />

      </View>
      <View style={styles.container}>
         <Image source={require('../../assets/5s.jpeg')} style={styles.img1} />
            <Text style={styles.text1}>citiation</Text>
            <AntDesign name="playcircleo" size={24} color="white" />

      </View>
      <View style={styles.container}>
         <Image source={require('../../assets/1s.jpeg')} style={styles.img1} />
            <Text style={styles.text1}>citiation </Text>
            <AntDesign name="playcircleo" size={24} color="white" />

      </View>

     </ScrollView>
      

   </SafeAreaView>
  )
}
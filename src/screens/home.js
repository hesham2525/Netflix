import { View, Text, SafeAreaView, Button ,Image} from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Home({navigation}) {
    const nav =useNavigation();
    useEffect(()=>{
        setTimeout(()=>{
          nav.navigate('About')

        },5000)
    })
  return (
    <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'black'}} >
        <Image source={require('../../assets/Netflix-1.jpg')} style={{width:300 ,height:100}} />
        
        
    </SafeAreaView>
  )
}
import { View, Text, SafeAreaView ,Image,ScrollView,StyleSheet} from 'react-native'
import React from 'react'

export default function About() {
  const styles =StyleSheet.create({
    img1:{ width: 100, height: 100, borderRadius: 50, marginRight: 10 },
    img2:{ width: 150, height: 150,  marginRight: 10 },


})
  return (
   <ScrollView  style={{flex:1,backgroundColor:'black'}}>
     <SafeAreaView >
      <View style={{alignItems:'center' }} >
        <Image source={require('../../assets/the-manager-in-the-poster-1_5000x.jpg')} style={{width:300 ,height:400, marginTop:50}} />
      </View>
      <View style={{alignItems:'start' ,padding:40}}>
        <Text style={{color:'white', fontSize:30 ,fontWeight:'bold'}}>Previews</Text>
      </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
          <Image
            source={require('../../assets/download (1).jpeg')}
            style={styles.img1}
          />
          <Image
            source={require('../../assets/download (2).jpeg')}
            style={styles.img1}
          />
          <Image
            source={require('../../assets/download (3).jpeg')}
            style={styles.img1}
          />
          <Image
            source={require('../../assets/download (4).jpeg')}
            style={styles.img1}
          />
          <Image
            source={require('../../assets/images.jpeg')}
            style={styles.img1}
          />
          <Image
            source={require('../../assets/download.jpeg')}
            style={styles.img1}
          />
        </View>
      </ScrollView>
      {/* //////////////////////////// */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start' , marginTop:80 }}>
          <Image
            source={require('../../assets/download (2).jpeg')}
            style={styles.img2}
          />
          <Image
            source={require('../../assets/download (4).jpeg')}
            style={styles.img2}
          />
          <Image
            source={require('../../assets/download (1).jpeg')}
            style={styles.img2}
          />
          <Image
            source={require('../../assets/download (4).jpeg')}
            style={styles.img2}
          />
          <Image
            source={require('../../assets/images.jpeg')}
            style={styles.img2}
          />
          <Image
            source={require('../../assets/download.jpeg')}
            style={styles.img2}
          />
        </View>
      </ScrollView>

      <View style={{alignItems:'start' ,padding:40}}>
        <Text style={{color:'white', fontSize:30 ,fontWeight:'bold'}}>Trending</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start'}}>
          <Image
            source={require('../../assets/1s.jpeg')}
            style={styles.img2}
          />
          <Image
            source={require('../../assets/2s.jpeg')}
            style={styles.img2}
          />
          <Image
            source={require('../../assets/3s.jpeg')}
            style={styles.img2}
          />
          <Image
            source={require('../../assets/4x.jpg')}
            style={styles.img2}
          />
          <Image
            source={require('../../assets/5s.jpeg')}
            style={styles.img2}
          />
          <Image
            source={require('../../assets/download.jpeg')}
            style={styles.img2}
          />
        </View>
      </ScrollView>
      <View style={{alignItems:'start' ,padding:40}}>
        <Text style={{color:'white', fontSize:30 ,fontWeight:'bold'}}>My list</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start'}}>
          <Image
            source={require('../../assets/download (4).jpeg')}
            style={styles.img2}
          />
          <Image
            source={require('../../assets/splash.png')}
            style={styles.img2}
          />
          <Image
            source={require('../../assets/download (1).jpeg')}
            style={styles.img2}
          />
          <Image
            source={require('../../assets/4x.jpg')}
            style={styles.img2}
          />
          <Image
            source={require('../../assets/5s.jpeg')}
            style={styles.img2}
          />
          <Image
            source={require('../../assets/download.jpeg')}
            style={styles.img2}
          />
        </View>
      </ScrollView>


     </SafeAreaView>
   </ScrollView>
  )
}
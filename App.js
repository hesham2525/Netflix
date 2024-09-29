import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from '@expo/vector-icons'; // Import icons from the icon library

import Home from './src/screens/home';
import About from './src/screens/About';
import movice from './src/screens/movice';
import Movice from './src/screens/movice';

export default function App() {
  

  const Drawer =createDrawerNavigator();
  const tab =createBottomTabNavigator();

  return (
   <NavigationContainer>

      {/* <Drawer.Navigator>
         <Drawer.Screen name="Home" component={Home} options={{headerShown:false}} />

         <Drawer.Screen name="About" component={About} />

      </Drawer.Navigator> */}
      
      <tab.Navigator
       screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          // Set different icons for each route
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';

          }else if (route.name === 'search') {
            iconName = focused ? 'search' : 'search';
          } 
          else if (route.name === 'About') {
            iconName = focused ? 'info' : 'info-outline';
          }

          // Return the icon component
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#00ADB5',
        tabBarInactiveTintColor: 'gray',
      })}>
              <tab.Screen name="Home" component={Home} options={{headerShown:false ,tabBarStyle: {display: 'none'}} } />
              <tab.Screen name="About" component={About} options={{headerShown:false}} />
              <tab.Screen name="search" component={Movice} options={{headerShown:false}} />
      </tab.Navigator>


   </NavigationContainer>
    
  );
}
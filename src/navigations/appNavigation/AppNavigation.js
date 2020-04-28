import React,{Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import assets from '../../assets/asset';

import SplashScreen from '../../Scence/SplashScreen/Index';
import LoginScreen from '../../Scence/Login/Index';
import ForgetPassword from '../../Scence/ForgetPassword/Index';
import SignUp from '../../Scence/Signup/Index';
import VerifyNumber from '../../Scence/VerifyNumber/Index';
import IdetityVerification from '../../Scence/IdentityVerification/Index';


const Stack = createStackNavigator();

function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen"> 
        
        <Stack.Screen name="SplashScreen" 
        component={SplashScreen}
        options={{title:null,headerShown:false}}/>

        <Stack.Screen name="Login"
        component={LoginScreen}
        options={{title:null,headerShown:false}}/>

        <Stack.Screen name="ForgotPassword"
        component={ForgetPassword}
        options={{title:"Forgot Password",
        headerTintColor:assets.color.white,
        headerStyle:{backgroundColor:"red"}}}/>

        <Stack.Screen name="SignUp"
        component={SignUp}
        options={{title:"Sign Up",
        headerTintColor:assets.color.white,
        headerStyle:{backgroundColor:"red"}}}/>


        <Stack.Screen name="VerifyNumber"
        component={VerifyNumber}
        options={{title:"Verification",
        headerTintColor:assets.color.white,
        headerStyle:{backgroundColor:"red"}}}/>

        <Stack.Screen name="IdentityVerification"
        component={IdetityVerification}
        options={{title:"Identity Verification",
        headerTintColor:assets.color.white,
        headerStyle:{backgroundColor:"red"}}}/>

      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default App;
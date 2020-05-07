import React,{Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import assets from '../../assets/asset';

import SplashScreen from '../../scence/SplashScreen/Index';
import LoginScreen from '../../scence/Login/Index';
import ForgetPassword from '../../scence/ForgetPassword/Index';
import SignUp from '../../scence/Signup/Index';
import VerifyNumber from '../../scence/VerifyNumber/Index';
import IdetityVerification from '../../scence/IdentityVerification/Index';
import SignUp_Detail from '../../scence/SignUp_Detail/Index';
import MatchProfile from '../../scence/MatchProfile/Index';
import MyProfifle from '../../scence/MyProfile/Index';

const Stack = createStackNavigator();

function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="MyProfile"> 
        
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
        headerStyle:{backgroundColor:assets.color.theme }}}/>

        <Stack.Screen name="SignUp"
        component={SignUp}
        options={{title:"Sign Up",
        headerTintColor:assets.color.white,
        headerStyle:{backgroundColor:assets.color.theme}}}/>


        <Stack.Screen name="VerifyNumber"
        component={VerifyNumber}
        options={{title:"Verification",
        headerTintColor:assets.color.white,
        headerStyle:{backgroundColor:assets.color.theme}}}/>

        <Stack.Screen name="IdentityVerification"
        component={IdetityVerification}
        options={{title:"Identity Verification",
        headerTintColor:assets.color.white,
        headerStyle:{backgroundColor:assets.color.theme}}}/>

        <Stack.Screen name="SignUp_Detail"
        component={SignUp_Detail}
        options={{title:"Details",
        headerTintColor:assets.color.white,
        headerStyle:{backgroundColor:assets.color.theme}}}/>

        <Stack.Screen name="MatchProfile"
        component={MatchProfile}
        options={{title:"Match Profile",
        headerTintColor:assets.color.white,
        headerStyle:{backgroundColor:assets.color.theme}}}/>

        <Stack.Screen name="MyProfile"
        component={MyProfifle}
        options={{title:"Profile",
        headerTintColor:assets.color.white,
        headerStyle:{backgroundColor:assets.color.theme}}}/>

      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default App;
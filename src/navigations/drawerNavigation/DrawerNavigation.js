import { DrawerItem, createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import React, { ReactElement } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {SideDrawer} from "../../component/Drawer/SideDrawer" 

import { useSafeArea } from 'react-native-safe-area-context';


import MyProfile from "../../scence/MyProfile/Index";

const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function CustomDrawerContent({ drawerPosition, navigation }): ReactElement {
  const insets = useSafeArea();

  return (
    <SideDrawer></SideDrawer>
  );
}

function Navigator(): ReactElement {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props): ReactElement => (
            <CustomDrawerContent {...props} />
          )}>

        </Drawer.Navigator>
      </NavigationContainer>
    
    );
  }

  export default Navigator;
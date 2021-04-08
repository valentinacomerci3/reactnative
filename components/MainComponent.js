import React, { Component } from "react";
import Directory from "./DirectoryComponent";
import CampsiteInfo from './CampsiteInfoComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
//we deleted the CAMPSITE import cause we wont use it here anymore
//main component is a central hub that holds all navigators like it held routes in react

//funciton with components available for the stack in argument
const DirectoryNavigator = createStackNavigator(
    {
        Directory: { screen: Directory },
        CampsiteInfo: { screen: CampsiteInfo }
    },
    //optional second argument
    //we are setting default options and style
    //for more properties available read documentation
    {
        initialRouteName: 'Directory',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

//we'll pass what we created to this function
//connects navigator to reactnative app
const AppNavigator = createAppContainer(DirectoryNavigator);


class Main extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    //code to compensate for possible discrepancies btw android and ios
                    paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
                }}>
                <AppNavigator />
            </View>
        );
    }
}

export default Main;

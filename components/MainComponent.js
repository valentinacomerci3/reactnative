import React, { Component } from "react";
import Directory from "./DirectoryComponent";
import CampsiteInfo from './CampsiteInfoComponent';
import { View } from 'react-native';
import { CAMPSITES } from "../shared/campsites";

//this is a container component 
//will be parent to presentational component
class Main extends Component {
    //need a constructor to hold state data
    //a space has to be reserved in the state to keep track of which cmapsite has been selected
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            selectedCampsite: null
        };
    }
    //event handler that will update "selectedCampsite:null" when campsite is selected
    //and so update the general state
    onCampsiteSelect(campsiteId) {
        this.setState({ selectedCampsite: campsiteId });
    }
    //return the components and passing state data and props
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Directory
                    campsites={this.state.campsites}
                    onPress={campsiteId => this.onCampsiteSelect(campsiteId)}
                />
                <CampsiteInfo
                    campsite={this.state.campsites.filter(
                        campsite => campsite.id === this.state.selectedCampsite)[0]}
                />
            </View>
        );
    }
}

export default Main;
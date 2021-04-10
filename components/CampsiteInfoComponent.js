import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';

function RenderCampsite({ campsite }) {

    if (campsite) {
        return (
            <Card
                featuredTitle={campsite.name}
                image={require('./images/react-lake.jpg')}
            >
                <Text style={{ margin: 10 }}>
                    {campsite.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

//this was a funcitonal component
//we convwerted in class comp so 
//we gave it constructor and not passed state through props
//no we access props with this.state.
class CampsiteInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES
        };
    }

    static navigationOptions = {
        title: 'Campsite Information'
    }

    render() {
        //getting the parameter we just gave to the navigation function in directory

        const campsiteId = this.props.navigation.getParam('campsiteId');
        const campsite = this.state.campsites.filter(campsite => campsite.id === campsiteId)[0];
        return <RenderCampsite campsite={campsite} />;
    }
}

export default CampsiteInfo;
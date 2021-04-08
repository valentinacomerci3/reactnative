import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

function RenderCampsite({ campsite }) {
    //make sure it is not null or not define
    //if it exist it will return the card
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
    //if we dont get a valid campsite object well return empty view
    return <View />;
}
//functional component that will receive props
function CampsiteInfo(props) {
    //from its props we pull out a campsite object 
    //and send it to other component
    return <RenderCampsite campsite={props.campsite} />;
}

export default CampsiteInfo;
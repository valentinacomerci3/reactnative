import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';

//the state is here now
class Directory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES
        };
    }
    //configure text for header title on the navigator screen
    //static keyword set method on class and not object 
    static navigationOptions = {
        title: 'Directory'
    }
    // because we just configured this component as screen 
    //it automatically receives the navigation prop and convenience functions
    //ex navigate, go back, params etc
    //here we use navigation to route to the campsites when user presses on it
    render() {
        //here we destructure out of all the navigation props
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({ item }) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    //here we call the navigate function with 2 arg
                    //one for arrivo and one correct obj to pass
                    onPress={() => navigate('CampsiteInfo', { campsiteId: item.id })}
                    leftAvatar={{ source: require('./images/react-lake.jpg') }}
                />
            );
        };

        return (
            <FlatList
                data={this.state.campsites}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Directory;

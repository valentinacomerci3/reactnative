import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';
import { Tile } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        campsites: state.campsites
    };
};

//the state is here now
class Directory extends Component {

    
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
        const renderDirectoryItem = ({item}) => {
            return (
                <Tile
                    title={item.name}
                    caption={item.description}
                    featured
                    onPress={() => navigate('CampsiteInfo', { campsiteId: item.id })}
                    imageSrc={{uri: baseUrl + item.image}}
                />
            );
        };

        return (
            <FlatList
                data={this.props.campsites.campsites}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default connect(mapStateToProps)(Directory);

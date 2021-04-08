import React from 'react';

//importing components from reactnative
//these two kinda work together like ul and li
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

//create functional components that receives props from parent Main
function Directory(props) {
    //function that defines how to render each item
    const renderDirectoryItem = ({ item }) => {
        return (
            <ListItem
                //
                title={item.name}
                subtitle={item.description}
                onPress={() => props.onPress(item.id)}
                //notice we need two sets of curly brace one for jsx one for obj literals
                leftAvatar={{ source: require('./images/react-lake.jpg') }}
            />
        );
    };
    //first we created this component
    return (
        //this components expect 3 props
        <FlatList
            //1- data prop with an array 
            data={props.campsites}
            //2- render-item prop will specify how to render each item in list
            //takes a function name that we'll define
            renderItem={renderDirectoryItem}
            //3-set a prop to use as a unique key
            //we'll use the id since every item has a differnt one
            // we have to convert it with to string since it expects a string
            keyExtractor={item => item.id.toString()}
        />
    );
}

export default Directory;

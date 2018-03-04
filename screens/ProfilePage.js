import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    StyleSheet,
    
} from 'react-native';

import ProfileHeader from '../components/ProfileHeader.js';
import ProfileCompleted from '../components/ProfileCompleted.js';
import ProfileActive from '../components/ProfileActive.js';


export default class ProfilePage extends Component {
    render() {
        return(
            <View style={styles.container}>

                <ProfileHeader />
                <ProfileCompleted />
                <ProfileActive />
                

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'silver',
    }
});

AppRegistry.registerComponent('ProfilePage', () => ProfilePage);
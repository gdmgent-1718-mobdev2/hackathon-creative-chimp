import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    ListView,
    FlatList,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import Head from '../components/header';
import { friends } from '../config/friends';
import { firebaseInit } from '../config/firebaseconfig';

class Friends extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
          isLoading: true,
          friends: {}

        }
      }

      componentWillMount() {
        this.getFriends();
      }

      getFriends = () => {
          const friends = [];

          firebaseInit.database().ref('friends').on('value', (snap) => {
            snap.forEach((child) => {
              friends.push({
                name: child.val().name,
              })
            })
            this.setState({
                friends: friends
            })
          })
      }
    render() {
        return (
            <ScrollView>
                <List>
                   {friends.map((friend) =>(
                       <ListItem 
                       key={friend.name}
                       roundAvatar
                       avatar={friend.avatar}
                       title={friend.name}
                       />
                   ))}
                </List>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Friends;
import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    ListView,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import { List, ListItem, Card } from 'react-native-elements';
import { challenges } from '../config/challenges';
import ProgressBar from '../components/progressBar';
import { firebaseInit } from '../config/firebaseconfig';

class Feed extends Component {
    constructor(props) {
        super(props);
        this.challengesRef = firebaseInit.database().ref();
        const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
          isLoading: true,
          challenges: {}
        }
      }

      onDetailChallenge = (challenge) => {
          this.props.navigation.navigate('ChallengeDetails', {...challenge});
      }

      componentWillMount() {
        this.getChallenges();
      }

      getChallenges = () => {
        const challenges = [];

        firebaseInit.database().ref('challenges').on('value', (snap) => {
          snap.forEach((child) => {
            challenges.push({
              title: child.val().title,
              coins: child.val().coins
            })
          })
          this.setState({
            challenges: challenges
          })
        })
      }

      renderRow = ({item, index}) => {
        return (
       challenges.map((challenge) => {
         console.log(challenge);
         return (
        <Card
                  title={null}
                  containerStyle={styles.card}
                >
                <TouchableOpacity onPress={() => this.onDetailChallenge(challenge)}>
                <Text style={styles.titleText}>{challenge.title}</Text>
                <View style={styles.coinContainer}>
                <Image source={require("../assets/img/coin.png")} />
                <Text style={styles.coinText}>{challenge.coins}</Text>
                </View>
                </TouchableOpacity>
                </Card>
       )})
        )
      }
    
      componentDidMount() {
        const self = this;
        setTimeout(function () {
            self.setState({ isLoading: false });
        }, 1);

      }
      render() {
        return (
            this.state.isLoading ? 
            <View>
                <ProgressBar/>
            </View> :
          <View> 
              
          <FlatList 
            data={this.state.challenges}
            renderItem={this.renderRow}
            keyExtractor={(item, index) => index}
          />
          </View>
        )
      }
}



const styles = StyleSheet.create({
  
  MainContainer: {
    backgroundColor: 'white',

  },
  card: {

      height: 162,
      marginBottom: 10,
      borderRadius:20,
  },
 
  titleText: {
      fontSize: 24,
      marginTop: 20,
      color: '#60D5C7',
  },
  coinText: {
      color: '#EAE466',
      fontSize: 18,

  },

  coinContainer: {
      marginTop: 30,
      flexDirection: 'row',
      flexWrap: 'wrap',
      }
})



export default Feed;
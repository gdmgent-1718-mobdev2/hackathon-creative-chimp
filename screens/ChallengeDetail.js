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
import { Button } from '../components/Button';

class ChallengeDetail extends Component {

      render() {
        const { title, descr, coins } = this.props.navigation.state.params;
        return (
            <Card
                  title={null}
                  containerStyle={styles.card}
                >
                <TouchableOpacity>
                <Text style={styles.titleText}>{title}</Text>
                <Text style={styles.descText}>{descr}</Text>
                <View style={styles.coinContainer}>
                <Image source={require("../assets/img/coin.png")} />
                <Text style={styles.coinText}>{coins}</Text>
                <Button style={styles.button}>Accept this challenge</Button>
                </View>
                </TouchableOpacity>
                </Card>
        )
      }
}

const styles = StyleSheet.create({
        card: {
            height: 350,
            marginBottom: 10,
            backgroundColor: 'lightgreen',
            borderRadius: 20,
        },
        titleText: {
            marginLeft: 15,
            fontSize: 34,
            marginTop: 40,
            color: '#60D5C7',
        },
        descText: {
            marginLeft: 15,
            marginTop: 20,
            marginRight: 15,
            lineHeight: 30,
            marginBottom: 30,
            fontSize: 25,
            color: '#FFFFFF',
            fontWeight: 'bold',
        },
        coinText: {
            color: '#EAE466',
            fontSize: 18,
    
        },
        coinContainer: {
            marginBottom: 30,
            flexDirection: 'row',
            flexWrap: 'wrap',
        },
        button: {
            borderRadius: 20,
            color: '#CECECE',
            backgroundColor: '#FFFFFF',
            marginTop: 40
        },
        hyperlink: {
            textAlign: 'center',
            color: '#CECECE',
            fontSize: 2,
        }
    })



export default ChallengeDetail;
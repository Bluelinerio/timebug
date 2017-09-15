import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  View,
  ActivityIndicator,
  Image, ScrollView
} from 'react-native';
import Markdown from 'react-native-easy-markdown';
import Button from 'react-native-button';
import {createClient} from 'contentful';
import {
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_CONTENT_DAY,
  CONTENTFUL_SPACE
} from '../constants/config'
import getImageUrl from '../utils/getImageUrl';

const windowheight = Dimensions.get('window').height;


export default class DayIntroducing extends Component {
  static navigationOptions = {
    title: 'DAY 1',
    headerTitleStyle: {textAlign: 'center', alignSelf: 'center'},
    headerStyle: {
      backgroundColor: '#00D2F5',
    },
    headerTintColor: 'white',
  };

  constructor() {
    super();
    this.state = {
      day: {},
      loading: false
    };
    this.changeTitle = this.changeTitle.bind(this);
  }

  componentDidMount() {
    this.getContentFromContentful();
  }

  changeTitle = (titleText) => {
    const {setParams} = this.props.navigation;
    setParams({title: titleText})
  };

  getContentFromContentful() {
    this.setState({
      loading: true
    });
    const client = createClient({
      accessToken: CONTENTFUL_ACCESS_TOKEN,
      space: CONTENTFUL_SPACE
    });

    client.getEntries({
      'fields.number': 1,
      content_type: CONTENTFUL_CONTENT_DAY
    }).then((response) => {
      this.setState({
        day: response.items.map((page) => {
          return page.fields;
        })[0],
        loading: false
      })
    }).catch((error) => {
      this.setState({
        loading: false
      });
      console.log(error)
    });
  }

  render() {
    if (this.state.loading) {
      return <ActivityIndicator size="large"/>;
    }

    let {day} = this.state;
    return (
      <View style={styles.screen}>
        {day.icon && <Image style={styles.image} source={{uri: getImageUrl(day.icon)}}/>}
        <Text style={[styles.text, styles.subtitle]}>{day.subtitle}</Text>
        <Text style={[styles.text, styles.title]}>{day.title}</Text>
        <ScrollView style={styles.description}>
          <Markdown
            markdownStyles={{
            u: {
              fontWeight: 'bold',
            },
            block: {
              textAlign: 'center',
              alignSelf: 'center',
              fontSize: 14,
              marginBottom: 15,
              flexWrap: 'wrap',
              flexDirection: 'row'
            }
          }}>
            {day.description}
          </Markdown>
        </ScrollView>

        <View style={styles.buttonWrapper}>
          <Button containerStyle={styles.wideButton}
                  onPress={() => this.props.navigation.navigate('DayAssignments', {assignments: day.refAssignment.map(item => item.fields)})}>
            <Text style={styles.wideButtonText}>BEGIN</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 25
  },
  text: {
    color: '#000000',
    fontSize: 12,
    textAlign: 'center'
  },
  subtitle: {
    color: '#4c82cd',
    paddingHorizontal: 15,
    fontSize: 15,
  },
  title: {
    color: '#4c82cd',
    fontSize: 20,
    paddingBottom: 20,
    fontWeight: 'bold',

  },
  image: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150
  },
  wideButton: {
    position: 'absolute',
    borderWidth: 2,
    borderColor: '#00D2F5',
    height: 50,
    minWidth: 200,
    paddingHorizontal: 50,
    borderRadius: 150,
    alignSelf: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  wideButtonText: {
    color: '#00D2F5',
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'center',
  },
  buttonWrapper: {
    flex: 1,
    position: 'absolute',
    height: 100,
    backgroundColor: 'rgba(255,255,255,0.85)',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    zIndex: 999
  },
  description: {
    flex: 1,
    paddingBottom: 300
  }
});
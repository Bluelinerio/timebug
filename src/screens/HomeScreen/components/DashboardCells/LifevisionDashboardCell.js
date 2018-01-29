import * as React from 'react'
import {
  Image,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import TouchableBounce 			  from 'react-native/Libraries/Components/Touchable/TouchableBounce'
import glamorous              from 'glamorous-native'
import LinearGradient         from 'react-native-linear-gradient';

import styles                 from '../../styles/dashbaord.styles'
import PhaseProgress          from '../../../../components/PhaseProgress'
import TouchableRoundedImage  from '../../../../components/TouchableRoundedImage';
import OnLayout               from '../../../../components/OnLayout';

const Container = glamorous.view(styles.dashboardContainer);
const Card = glamorous(TouchableBounce)(styles.dashboardCardWide);
const CardHeader = glamorous.view(styles.header)
const Row = glamorous.view(styles.suggestionRow);
const BottomRow = glamorous.view(styles.suggestionRowBottom);

const GradientWithTwoColors = ({startColor='#FF24D8', endColor ='#6AC2ED', children, style }) => (
  <LinearGradient
    style={style || {		
      flex: 2,
      borderRadius: 6,
    }}
    colors={[startColor, endColor]}
    start={{ x: 1, y: 0 }}
		end={{ x: 0, y: 1 }}
  >
  {children}
  </LinearGradient>
);

const Highlight = ({children, startColor='#FF24D8', endColor ='#6AC2ED'}) => (
  <GradientWithTwoColors style={styles.bigSuggestionWithText} startColor={startColor} endColor={endColor}>
    <View>
      {children}
    </View>
  </GradientWithTwoColors>
)

const BackgroundImage = glamorous.image(styles.backgroundImage, (props) => ({
  // here we tint it based on props...
  tintColor:'blue'
}));

const Header = ({date, source, title, titleColor, avatar}) => (
  <CardHeader style={styles.header}>
    <View>
      {date && <Text style={styles.date}>{date}</Text>}
      <Text style={[styles.title, styles.strong, { color: titleColor }]}> {title}</Text>
    </View>
    <TouchableOpacity>
      {source && 
        <Image
          style={styles.avatar}
          source={avatar}
        />
      }
    </TouchableOpacity>
  </CardHeader>
)

export default () => (
  <Container style={{flex:1}} >
    <Header 
      title='Lifevision' 
      titleColor="black"
    />
    <Card>
      <Row>
        <Highlight startColor={'white'} endColor={'#ccc'}> 
          <Text style={[styles.suggestionText], { paddingVertical: 10}}>
            {`\nAwesome! Over the last week you have completed `}
            <Text style={styles.bold} >{`3`}</Text>
            {` workbooks! \nyou spent `}
            <Text style={styles.bold} >{`35min`}</Text>
            {` time on this month, (for each phase completed)`} 
            {`you have completed`}
            <Text style={styles.bold} >{`x`}</Text>
            {` froms in the `}
            <Text style={[styles.strong, {color: '#F89A1F'}]} >{`Self Assesment`}</Text>
            
            {` phase.\nYou are `}
            <Text style={styles.bold} >{`54%`}</Text>
            {`  through your journey.\n\n`}
            <Text style={styles.bold} >{`Meditation Phase`}</Text>
            {`\nYou are have just crossed the a third of your journey!`}
          </Text>
        </Highlight>
      </Row>
      <BottomRow>
      </BottomRow>
        <OnLayout 
          render={({width}) => width && <PhaseProgress width={width} /> || null }
        />
    </Card>
  </Container>
)
// @flow
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
import { 
  MEDITATION,
  SELF_ASSESSMENT,
  VISION_CREATION,
  COMPLETE,
}                             from '../../../../services/cms'

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


export type Props = { 
  phaseColors: { 
    [MEDITATION]: string,
	  [SELF_ASSESSMENT]: string,
	  [VISION_CREATION]: string,
	  [COMPLETE]: string
  }
}

const RowContent = ({ phaseColors } : Props) => (
  <View> 
    <Text style={[styles.suggestionText], { paddingVertical: 10}}>
      <Text style={styles.bold} >{`The below text is an example of a woring protoype of the Lifevision Cell Content.`}</Text>
      {`\n---\n`}
      {`\nAwesome! Over the last week you have completed `}
      <Text style={styles.bold} >{`3`}</Text>
      {` workbooks! \nyou spent `}
      <Text style={styles.bold} >{`35min`}</Text>
      {` time on this month, (for each phase completed)\n`} 
      {`You have completed `}
      <Text style={styles.bold} >{`x`}</Text>
      {` workbooks in the `}
      <Text style={[styles.strong, {
        color: phaseColors[SELF_ASSESSMENT]}
      ]}>
        {`Self Assesment Phase`}
      </Text>
      
      {` phase.\nYou are `}
      <Text style={styles.bold} >{`54%`}</Text>
      {`  through your journey.\n\n`}
      <Text style={[styles.bold, {
        color: phaseColors[MEDITATION]}
      ]}>
        {`Meditation Phase`}
      </Text>
      {`\nYou just crossed a third of your journey! Congratulations!\n`}
    </Text>
  </View>
)

export default (props : Props) => (
  <Container style={{flex:1}} >
    <Header 
      title='Lifevision' 
      titleColor="black"
    />
    <Card>
      <Row>
        <RowContent {...props}/>
      </Row>
      <BottomRow>
      </BottomRow>
        <OnLayout 
          render={({width}) => width && <PhaseProgress width={width} /> || null }
        />
        <Text style={[styles.suggestionText], { paddingVertical: 12, fontStyle:'italic', color:'#ccc'}}>
          {`The legend of your progress through your journey`}
        </Text>
    </Card>
  </Container>
)
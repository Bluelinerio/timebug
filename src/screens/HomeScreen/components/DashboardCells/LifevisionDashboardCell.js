// @flow
import * as React from 'react'
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  Platform,
  ScrollView
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

const Highlight = ({children, startColor='white', endColor ='#f8f8f8', gradientStyle}) => (
  <LinearGradient
    style={gradientStyle || { flex: 1 }}
    colors={[startColor, endColor]}
    start={{ x: 1, y: 0 }}
		end={{ x: 0, y: 1 }}
  >
    <View>
      {children}
    </View>
  </LinearGradient>
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

import Markdown from '../../../../Modules/Markdown';
  // <Highlight> 
  //   <Markdown
	// 		markdownStyles={{
	// 			...markdownStyles,
	// 			block: {
	// 				...markdownStyles.block,
	// 				width
	// 			},
	// 			list: {
	// 				width
	// 			}
	// 		}}
	// 	>
	// 		{text}
	// 	</Markdown>

const RowContent = ({ phaseColors } : Props) => (
  <View> 
    <Text style={[styles.suggestionText,{ color: '#ccc'}], { paddingVertical: 10}}>
      <Text style={styles.bold} >{`The below is an example of a how a Dashboard Cell Content will look like when you start using the app.`}</Text>
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

    // <Row>
    //   <RowContent {...props}/>
    // </Row>
import { Pages } from 'react-native-pages';
import { Array } from 'tcomb-validation';

const horizontalPadding = 16;

export default (props : Props) => (
  <View style={{
		...Platform.select({
			android: { elevation: 16 },
			ios: {
				shadowColor: "black",
				shadowOffset: {
					width: 0,
					height: 16
				},
				shadowOpacity: 0.2,
				shadowRadius: 16
			}
		})
  }}>
    <Header 
      title='Life Vision' 
      titleColor="black"
    />
    <ScrollView 
      style={{ 
        marginTop: 20
      }}
      horizontal={true}
      contentInset={{
        top:0,
        bottom:0,
        left:horizontalPadding,
        right:0
      }}
      contentOffset={{
        x:-horizontalPadding,
        y:0
      }}
      contentContainerStyle={{}}
    >  
      {
        [1,2].map((value, index ) => (
          <Highlight
            gradientStyle={{
              marginRight: 10,
              paddingTop:10,
              marginBottom:10,
              borderRadius: 6
            }} 
            key={index}
          >
            <OnLayout 
              render={({width}) => width && <PhaseProgress width={width} /> || null }
            />
            <Text style={[styles.suggestionText,{ color: '#ccc'}]}>
              {`The legend of your progress through your journey`}
            </Text>
          </Highlight>
        ))
      }
    </ScrollView>
    <Card>
    </Card>
  </View>
)
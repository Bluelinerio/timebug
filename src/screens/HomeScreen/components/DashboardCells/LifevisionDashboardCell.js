// @flow
import * as React from 'react';
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
import HighlighRow    from '../../../../components/HighlighRow';
import PhaseProgressContainer from '../../../../containers/PhaseProgressContainer'
import User                   from '../../../../containers/User'
import { 
  MEDITATION,
  SELF_ASSESSMENT,
  VISION_CREATION,
  COMPLETE
} from '../../../../services/cms';

const Card = glamorous(TouchableBounce)(styles.dashboardCardWide);
const CardHeader = glamorous.view(styles.header);
const Row = glamorous.view(styles.suggestionRow);
const BottomRow = glamorous.view(styles.suggestionRowBottom);

const BackgroundImage = glamorous.image(styles.backgroundImage, (props) => ({
  // here we tint it based on props...
  tintColor: 'blue'
}));

const Header = ({ date, source, title, titleColor, avatar }) => (
  <CardHeader style={styles.header}>
    <View>
      {date && <Text style={styles.date}>{date}</Text>}
      <Text style={[styles.title, styles.strong, { color: titleColor }]}>
        {' '}
        {title}
      </Text>
    </View>
    <TouchableOpacity>
      {source && <Image style={styles.avatar} source={avatar} />}
    </TouchableOpacity>
  </CardHeader>
);

export type Props = {
  phaseColors: {
    [MEDITATION]: string,
    [SELF_ASSESSMENT]: string,
    [VISION_CREATION]: string,
    [COMPLETE]: string
  }
};

import Markdown from '../../../../Modules/Markdown';
  // <HighlighRow> 
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
      <Text style={styles.bold}>{`3`}</Text>
      {` workbooks! \nyou spent `}
      <Text style={styles.bold}>{`35min`}</Text>
      {` time on this month, (for each phase completed)\n`}
      {`You have completed `}
      <Text style={styles.bold}>{`x`}</Text>
      {` workbooks in the `}
      <Text
        style={[
          styles.strong,
          {
            color: phaseColors[SELF_ASSESSMENT]
          }
        ]}
      >
        {`Self Assesment Phase`}
      </Text>

      {` phase.\nYou are `}
      <Text style={styles.bold}>{`54%`}</Text>
      {`  through your journey.\n\n`}
      <Text
        style={[
          styles.bold,
          {
            color: phaseColors[MEDITATION]
          }
        ]}
      >
        {`Meditation Phase`}
      </Text>
      {`\nYou just crossed a third of your journey! Congratulations!\n`}
    </Text>
  </View>
);
// <Row>
//   <RowContent {...props}/>
// </Row>

const horizontalPadding = 16;

const Container = glamorous.view({
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
})

const HorizontalScrollView = (props) => (
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
      {...props}
    />
)


const Main = props => (
  <Container>
    <Header title="Life Vision" titleColor="black" />
    <HorizontalScrollView>
      {
        <HighlighRow style={styles.leaderboardContainer}>
          <OnLayout 
            render={({width}) => width > 0 ? (<PhaseProgressContainer width={width} />) : null }
          />
          <Text
            style={[
              styles.suggestionText,
              {
                color: '#ccc'
              }
            ]}
          >
            {`The legend of your progress through your journey`}
          </Text>
        </HighlighRow>

      }
    </HorizontalScrollView>
  </Container>
);

export default (props: Props) => (
  <User renderWithState={() => <Main />} renderWithUser={() => <Main />} />
);

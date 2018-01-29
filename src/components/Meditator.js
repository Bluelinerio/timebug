// @flow
import * as React from 'react';
import {
  Platform,
  Text, 
  Image
} from 'react-native'
import {
	human,
	systemWeights,
	iOSColors,
	iOSUIKit,
	material,
  sanFranciscoWeights,
	robotoWeights
} from "react-native-typography";



const randomCharacters = () => {
  const meditators = [
    `🧘‍♂️`,
    `🧘🏻‍♂️`,
    `🧘🏼‍♂️`,
    `🧘🏽‍♂️`,
    `🧘🏾‍♂️`,
    `🧘🏿‍♂️`,
    `🧘‍♀️`,
    `🧘🏻‍♀️`,
    `🧘🏼‍♀️`,
    `🧘🏽‍♀️`,
    `🧘🏾‍♀️`,
    `🧘🏿‍♀️`
  ];
  return meditators[Math.floor(Math.random() * meditators.length)]
}

const randomImages = () => {
  const meditators = [
    require('../resources/images/Meditators/Meditator1.png'),
    require('../resources/images/Meditators/Meditator10.png'),
    require('../resources/images/Meditators/Meditator12.png'),
    require('../resources/images/Meditators/Meditator2.png'),
    require('../resources/images/Meditators/Meditator3.png'),
    require('../resources/images/Meditators/Meditator4.png'),
    require('../resources/images/Meditators/Meditator5.png'),
    require('../resources/images/Meditators/Meditator6.png'),
    require('../resources/images/Meditators/Meditator7.png'),
    require('../resources/images/Meditators/Meditator8.png'),
  ];
  return meditators[Math.floor(Math.random() * meditators.length)]
}

export const randomMeditatorIndex = Platform.select({
  ios: randomImages,
  android: randomImages 
})

export default () => (
  <Image 
    style={{
      width: 75,
      height: 75,
      alignSelf:'center'
    }} 
    source={randomImages()}
  />
)


// const char = randomImages()
// export default () => (
//   <Text style={{
// 		...Platform.select({
// 			android: { 
// 				...material.display3Object,
// 			},
// 			ios: {
// 				...material.display3Object,
// 				//...human.largeTitleObject,
// 			}
// 		}),
// 		textAlign:'center'
// 	}}>
//     {`${char}`}
//   </Text>
// )

//export default () => null
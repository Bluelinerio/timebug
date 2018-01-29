// @flow
import * as Recat from 'react';
import {
  Platform,
  Text, 
  Image
} from 'react-native'



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
  return meditators[Math.floor(Math.random() * meditators.length)
}
const randomImages = () => {
  const meditators = [
    require(`../resources/images/Meditators/🧘‍♀️.png`),
    require(`../resources/images/Meditators/🧘‍♂️.png`),
    require(`../resources/images/Meditators/🧘🏻‍♀️.png`),
    require(`../resources/images/Meditators/🧘🏼‍♀️.png`),
    require(`../resources/images/Meditators/🧘🏼‍♂️.png`),
    require(`../resources/images/Meditators/🧘🏽‍♀️.png`),
    require(`../resources/images/Meditators/🧘🏽‍♂️.png`),
    require(`../resources/images/Meditators/🧘🏾‍♀️.png`),
    require(`../resources/images/Meditators/🧘🏾‍♂️.png`),
    require(`../resources/images/Meditators/🧘🏿‍♀️.png`),
    require(`../resources/images/Meditators/🧘🏿‍♂️.png`),
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
      width:75,
      height:75
    }} 
    source={{randomImages()}}
  >
)

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
// })
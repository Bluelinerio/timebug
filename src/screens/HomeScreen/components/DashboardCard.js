import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Defs, Stop, Circle, Rect, G, Path, LinearGradient, Svg } from 'react-native-svg';
import SvgUri from 'react-native-svg-uri';

export default TestSvgUri = () => (
  <View style={{flex: 1 }}>
    <SvgUri
      width="200"
      height="200"
      source={{uri:'https://thenewcode.com/assets/images/thumbnails/homer-simpson.svg'}}
    />
  </View>
);

// export default () =>
//   <Svg width="371px" height="208px" viewBox="0 0 371 208">
//     <Defs>
//         <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
//             <Stop stop-color="#40BCF9" offset="0%"></Stop>
//             <Stop stop-color="#1E87F0" offset="100%"></Stop>
//         </LinearGradient>
//         <Rect x="0" y="0" width="370" height="208" rx="6"></Rect>
//         <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-5">
//             <Stop stop-color="#40BCF9" offset="0%"></Stop>
//             <Stop stop-color="#1E87F0" stop-opacity="0" offset="100%"></Stop>
//         </LinearGradient>
//         <Circle id="path-6" cx="220.698039" cy="348.142852" r="125"></Circle>
//         <Circle id="path-8" cx="166.540734" cy="166.916638" r="125"></Circle>
//     </Defs>
//     <G id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
//       <G id="Card">
//         <G id="Triangle-Pattern">
//             <G id="Mask">
//                 <use fill="black" fill-opacity="1" filter="url(#filter-4)"></use>
//                 <use fill="url(#linearGradient-1)" fill-rule="evenodd"></use>
//             </G>
//             <G mask="url(#mask-3)">
//                 <G transform="translate(306.220155, 140.666517) rotate(-371.000000) translate(-306.220155, -140.666517) translate(112.720155, -116.833483)">
//                     <G id="Oval-6" transform="translate(220.698039, 348.142852) rotate(-25.000000) translate(-220.698039, -348.142852) ">
//                         <use fill="black" fill-opacity="1" filter="url(#filter-7)"></use>
//                         <use fill="url(#linearGradient-5)" fill-rule="evenodd"></use>
//                     </G>
//                     <G id="Oval-6-Copy-3" transform="translate(166.540734, 166.916638) rotate(-25.000000) translate(-166.540734, -166.916638) ">
//                         <use fill="black" fill-opacity="1" filter="url(#filter-9)"></use>
//                         <use fill="url(#linearGradient-5)" fill-rule="evenodd"></use>
//                     <G/>
//                 </G>
//             </G>
//         </G>
//       </G>
//     </G>
//     </G>
// </Svg>
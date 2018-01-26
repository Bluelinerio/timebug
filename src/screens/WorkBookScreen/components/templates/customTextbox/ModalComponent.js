// import React                                           from 'react';
// import Modal from "react-native-modal";
// import { StyleSheet, Button, View, Text, TextInput, Platform, PixelRatio } from 'react-native';

// export default class MyComponent extends React.Component {
//   state = {
//     modalVisible: false,
//   };

//   openModal() {
//     this.setState({modalVisible:true});
//   }

//   closeModal() {
//     this.setState({modalVisible:false});
//   }

//   render() {
//     return (
//         <View style={styles.container}>
//           <Modal
//               visible={this.state.modalVisible}
//               animationIn={'fadeIn'}
//               animationOut={'fadeOut'}
//               animationInTiming={500}
//               onRequestClose={() => this.closeModal()}
//           >
//             <View style={styles.modalContainer}>
//               <View style={styles.innerContainer}>
//                 <Text>This is content inside of modal component</Text>
//                 <Button
//                     onPress={() => this.closeModal()}
//                     title="Close modal"
//                 >
//                 </Button>
//               </View>
//             </View>
//           </Modal>
//           <Button
//               onPress={() => this.openModal()}
//               title="Open modal"
//           />
//         </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     borderWidth:1,
//     borderColor:'green'
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: 'grey',
//   },
//   innerContainer: {
//     alignItems: 'center',
//   },
// });



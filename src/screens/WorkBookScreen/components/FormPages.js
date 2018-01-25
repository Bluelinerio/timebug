import React, { Children } from 'react';
import { Animated, KeyboardAvoidingView, View, Platform } from 'react-native';
import { Pages } from 'react-native-pages';

const Container = (props) => {
  if(Platform.OS === 'ios') {
    return <KeyboardAvoidingView {...props} />
  } else {
    return <View {...props} />
  }
}

export default class FormPages extends Pages {
  componentWillReceiveProps(props) {
    let { progress, page } = props;
  
    if (progress !== this.props.progress) {
      progress.setValue(this.progress);
      this.setState({ progress });
    }
    
    if (props.page !== null && this.props.page !== props.page) {
      this.scrollToPage(props.page);
    }
  }

  renderPage(page, index) {
    let { width, height, progress } = this.state;
    let { children, horizontal, rtl } = this.props;
    let pages = Children.count(children);
  
    let pageStyle = (horizontal && rtl)?
      styles.rtl:
      null;
  
    /* Adjust progress by page index */
    progress = Animated.add(progress, -index);
  
    return (
      
      <Container 
        style={[{ width, height, justifyContent: 'center' }, pageStyle]}
        contentContainerStyle={[{ width, height, justifyContent: 'center' }, pageStyle]}
      >
        {React.cloneElement(page, { index, pages, progress })}
      </Container>
    );
  }
}

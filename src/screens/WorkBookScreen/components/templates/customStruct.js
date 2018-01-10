import React, { Children } from 'react';
import { View, Text, Animated, KeyboardAvoidingView } from 'react-native';
import { Pages } from 'react-native-pages';

class FormPages extends Pages {
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
      <KeyboardAvoidingView style={[{ width, height, justifyContent: 'center' }, pageStyle]}>
        {React.cloneElement(page, { index, pages, progress })}
      </KeyboardAvoidingView>
    );
  }
}

function struct(locals) {
  let pagesRef = null;
  if (locals.hidden) {
    return null;
  }

  const stylesheet = locals.stylesheet;
  const fieldsetStyle = stylesheet.fieldset;
  let controlLabelStyle = stylesheet.controlLabel.normal;

  if (locals.hasError) {
    controlLabelStyle = stylesheet.controlLabel.error;
  }

  const label = locals.label ? <Text style={controlLabelStyle}>{locals.label}</Text> : null;
  const error = locals.hasError && locals.error ? <Text accessibilityLiveRegion="polite" style={stylesheet.errorBlock}>{locals.error}</Text> : null;

  const rows = locals.order.map(function (name) {
    return locals.inputs[name];
  });

  const filteredRows = rows.filter(input => {
    return !input.props.options || (input.props.options && !input.props.options.hidden);
  })
  
  let page = null;
  if (locals.changedPage) {
    page = 0;
  }

  if(locals.path.length > 0) {
    return (
      <View style={{ flex: 1 }}>
        {label}
        {error}
        <View style={{flex: 1, justifyContent: 'center'}}>
          {rows}
        </View>
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1 }}>
        {error}
        {locals.label ? (
          <FormPages 
            page={page} 
            horizontal={false} 
            containerStyle={{ 
              padding: 
              20}} 
            indicatorColor="#CCC"
          >
            <Text style={stylesheet.formLabel}>{locals.label}</Text>
            {filteredRows}
          </FormPages>
        ) : (
          <FormPages page={page} horizontal={false} containerStyle={{ padding: 20}} indicatorColor="#CCC">
            {filteredRows}
          </FormPages>
        )}
      </View>
    );
  }
}

module.exports = struct;

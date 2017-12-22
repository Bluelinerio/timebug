import t             from 'tcomb-form-native/lib';
import templates     from "tcomb-form-native/lib/templates/bootstrap/index";
import stylesheet    from "tcomb-form-native/lib/stylesheets/bootstrap";
import i18n          from "tcomb-form-native/lib/i18n/en";
import customList    from './customList';
import customTextBox from './customTextBox';
import customStruct from './customStruct';
import { Animated, KeyboardAvoidingView } from 'react-native';
import { Pages } from 'react-native-pages';
import React, { Children } from 'react';

Pages.prototype.renderPage = function(page, index) {
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

const customTemplates = {
  ...templates,
  list: customList,
  textbox: customTextBox,
  struct: customStruct,
};

const customStylesheet= {
  ...stylesheet,
  formLabel: {
    textAlign: 'center',
    fontSize: 26,
    paddingVertical: 20,
  }
};

t.form.Form.templates  = customTemplates;
t.form.Form.stylesheet = customStylesheet;
t.form.Form.i18n       = i18n;

t.form.Form.defaultProps = {
  templates: customTemplates,
  stylesheet: customStylesheet,
  i18n: t.form.Form.i18n,
};

export default t;



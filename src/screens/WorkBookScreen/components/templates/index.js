import { 
  Animated, 
  KeyboardAvoidingView 
} from 'react-native';
import { Pages } from 'react-native-pages';
import React, { Children } from 'react';

import t                from 'tcomb-form-native/lib';
import { getTypeInfo}   from 'tcomb-form-native/lib/util';
import templates        from "tcomb-form-native/lib/templates/bootstrap/index";
import stylesheet       from "tcomb-form-native/lib/stylesheets/bootstrap";
import i18n             from "tcomb-form-native/lib/i18n/en";

import customList       from './customList';
import customTextBox    from './customTextbox';
import customStruct     from './customStruct';
import select           from './select';

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
  select
};

const customStylesheet= {
  ...stylesheet,
  formLabel: {
    textAlign: 'center',
    fontSize: 26,
    paddingVertical: 20,
  },
  helpBlock: {
    normal: {
      ...stylesheet.helpBlock.normal,
      marginTop: 4,
      paddingHorizontal: 4,
      fontStyle:'italic'
    },
    error: {
      ...stylesheet.helpBlock.normal,
      marginTop:4,
      paddingHorizontal: 4,
      fontStyle:'italic'
    }
  },
  pickerContainer: {
    normal: {
      flexDirection: 'row',
      height: 48,
      borderWidth: 1,
      borderRadius: 4,
      borderColor: '#CCC',
      padding: 8,
      backgroundColor: '#FFFFFF',
    },
    error: {
      flexDirection: 'row',
      height: 48,
      borderWidth: 1,
      borderRadius: 4,
      borderColor: '#a94442',
      padding: 8,
      backgroundColor: '#FFFFFF',
    },
    open: { }
  },
  pickerLabelStyle: {
    normal: {
      fontSize: 17,
      alignSelf: 'center',
    }
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


// Override Struct methods to reset to page 0 after changing form

t.form.Struct.prototype.shouldComponentUpdate = function(nextProps, nextState) {
  const should =
    nextState.value !== this.state.value ||
    nextState.hasError !== this.state.hasError ||
    nextProps.options !== this.props.options ||
    nextProps.type !== this.props.type ||
    nextState.changedPage !== this.state.changedPage;
  return should;
}

t.form.Struct.prototype.componentWillReceiveProps = function(nextProps) {
  let changedPage = false;
  if (nextProps.type !== this.props.type) {
    this.typeInfo = getTypeInfo(nextProps.type);
    changedPage = true;
  }
  this.setState({ value: this.getTransformer().format(nextProps.value), changedPage });
}

t.form.Struct.prototype.componentDidUpdate = function() {
  if (this.state.changedPage) {
    this.setState({ changedPage: false })
  }
}

t.form.Struct.prototype.getChangedPage = function() {
  return this.state.changedPage;
}

t.form.Struct.prototype.getLocals = function() {
  const templates = this.getTemplates();
  const locals = {
    topLevel: this.props.options.topLevel || false,
    path: this.props.ctx.path,
    error: this.getError(),
    hasError: this.hasError(),
    label: this.getLabel(),
    onChange: this.onChange.bind(this),
    config: this.getConfig(),
    value: this.state.value,
    hidden: this.props.options.hidden,
    stylesheet: this.getStylesheet()
  }
  locals.order = this.getOrder();
  locals.inputs = this.getInputs();
  locals.template = templates.struct;
  locals.changedPage = this.state.changedPage;
  return locals;
}

export default t;



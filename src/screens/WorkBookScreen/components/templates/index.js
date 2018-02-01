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
import customStylesheet from '../../styles/templates/index'

if(__DEV__) {
  function assert(condition, error) {
    if(!condition) throw error
  }
  assert(typeof customStylesheet.textbox.normal === 'object', 'error');
  assert(typeof customStylesheet.textbox.error === 'object', 'error');
  assert(typeof customStylesheet.textbox.notEditable === 'object', 'error');
}

const customTemplates = {
  ...templates,
  list: customList,
  textbox: customTextBox,
  struct: customStruct,
  select
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



import t             from 'tcomb-form-native/lib';
import { getTypeInfo} from 'tcomb-form-native/lib/util';
import templates     from "tcomb-form-native/lib/templates/bootstrap/index";
import stylesheet    from "tcomb-form-native/lib/stylesheets/bootstrap";
import i18n          from "tcomb-form-native/lib/i18n/en";
import customList    from './customList';
import customTextBox from './customTextBox';
import customStruct from './customStruct';

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



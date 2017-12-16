## Tcomb Templates

A template is a function with the following signature:

```
(locals: Object) => ReactElement
```

where `locals` is an object contaning the "recipe" for rendering the input and it's built for you by tcomb-form-native.
Let's see an example: the `locals` object passed in the `checkbox` template:

```js
type Message = string | ReactElement

{
  stylesheet: Object, // the styles to be applied
  hasError: boolean,  // true if there is a validation error
  error: ?Message,    // the optional error message to be displayed
  label: Message,     // the label to be displayed
  help: ?Message,     // the optional help message to be displayed
  value: boolean,     // the current value of the checkbox
  onChange: Function, // the event handler to be called when the value changes
  config: Object,     // an optional object to pass configuration options to the new template

  ...other input options here...

}
```
## Customization

There are 2 ways of customizing tcomb templates:

### Customizing base component templates

This lets you modify the default template of only the following components:

- textbox
- select
- datepicker
- struct
- list

#### Example
```js
import t             from 'tcomb-form-native/lib';
import templates     from "tcomb-form-native/lib/templates/bootstrap/index";

function customeTextBox(locals) {
  var containerStyle = {...};
  var labelStyle = {...};
  var textboxStyle = {...};

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{locals.label}</Text>
      <TextInput style={textboxStyle} />
    </View>
  );
}

const customTemplates = {
  ...templates,
  textbox: customeTextBox,
};

// override globally the default layout
t.form.Form.templates  = customTemplates;
```

### Adding a custom template to a field

This is the most powerful option of customization, which lets you add custom components to a single field.

TComb doesn't let you add new types other than:

- textbox
- select
- datepicker
- struct
- list

But what you can do is extend these types with custom components, in the example below, you will see how to modify a `t.Number` field which component type is a `textbox`, but we create a custom template around it to have a component with a picker of numbers.

#### Example

```js
const Person = t.struct({
  name: t.String,
  age: t.Number
});

function customAgePicker(locals) {
  return (
    <Picker selectedValue={locals.value} onValueChange={(itemValue, itemIndex) => locals.onChange(itemValue))}>
      {ages.map(age => {
        <Picker.Item label={age} value={age} />
      })}
    </Picker>
  );
}

const options = {
  fields: {
    age: {
      template: customAgePicker
    }
  }
};

/*
 <Form ref="form"
  type={Person}
  options={options} // Pass options prop to Form component
  value={value}
/>
*/
```

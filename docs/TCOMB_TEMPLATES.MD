`tcomb-form-native` comes with a default layout, i.e. a bunch of templates, one for each component.

You can customize the layout by setting custom templates:

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

You can also override the template locally:

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

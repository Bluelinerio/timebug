This app uses tcomb-form-native(https://github.com/gcanti/tcomb-form-native/), a forms library for react-native.

tcomb contains a type system(struct, String, Number etc.). It builds a model from the types, and passes the model to our <FormComponent> as props. Ex:

---WorkBookScreenContainer.js imports and renders <FormComponent>

const progress = state.user.progress;
  const model = state.form.model;
  const formData = state.form.data;
  const isPending = state.network.isPending;
  const color = state.steps.colors.steps[state.steps.currentStep.number];


//render
 <FormComponent
                ref={form => (this.form = form)}
                model={model}
                formData={formData}
                progress={progress}
                onChange={this.onChange}
              />

{model} is defined in form.saga.js as whatever form the user is on. 
    --let model = formConfig[ currentStep ][ currentForm ];

this contains a type, a single or nested structure of tcomb types which constitutes the form.
--  type: t.struct({
      id:t.maybe(t.String),
      memory: t.String,
      areaOfLife: t.maybe(AreaOfLife),
      stageOfLife: t.maybe(StageOfLife)
    })

also contains passes 'options' to props:
-- options: {
      fields: {
        id: {
          hidden: true
        },
        stageOfLife: {
          label: "At what stage of your life was it?"
        },
        memory: {
          label: "Describe what happened",
          numberOfLines: 3
        },
        areaOfLife: {
          label: "What area of life does this belong to?"
        },
      }
    }

The tcomb Form component behaves like a Controlled Component - state is updated onChange, as defined in WorkBookscreenContainer.js

  onChange() {
    let value = this.form.refs.form.getValue(); //update the value of the field
    this.setState({
      isInvalid: !value  //if there is no value, form isInvalid, or vice versa.
    });
  }
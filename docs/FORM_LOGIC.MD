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


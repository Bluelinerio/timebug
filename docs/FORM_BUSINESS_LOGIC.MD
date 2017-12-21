The form business logic lets you modify the form model when a field of the form changes.

## How it works

You need to add a variable named `businessLogic` to the step file, which follows the same structure as the forms, kind of explained below:

```js
type BusinessLogicAction = {
  type: string,
  fieldName: string, // The name of the field that changed
  fieldValue: any, // The new value of the form that changed
  path: [string], // The path of the field, ie. lists, sub-structs
  value: any, // The form value
  step: number, // Current step id
  form: number // Current form id
}

type BusinessLogicReturn {
  model: any
}

const formModels = {
  [formId: Number]: {
    title: string,
    type: t.struct
  }
}

export const businessLogic = {
  [formId: Number]: {
    [formField]: function * (action: BusinessLogicAction): BusinessLogicReturn {
      return {
        model: {}
      }
    }
  }
}
```

You can have a function to handle the changes in one of the form fields, which receives the action with the field name and value that changed, as well as the whole form value. This function needs to return a form model.

## Example

```js
const formModels = {
  1: {
    title: "Business logic example",
    type: t.struct({
      gender: t.enums.of(['Male', 'Female', 'Other'])
    }),
  }
}

export const businessLogic = {
  1: {
    gender: function * (action) {
      if (action.fieldValue === 'Other') {
        return {
          model: {
            type: t.struct({
              gender: t.enums.of(['Male', 'Female', 'Other']),
              otherGender: t.String
            })
          }
        };
      } else {
        return {
          model: formModels[1]
        }
      }
    }
  }
};

export default formModels;
```
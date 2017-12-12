## Background:

The app uses react-native and [tcomb-form-native](https://github.com/gcanti/tcomb-form-native/), for render forms.

## Components

## Top Level Each form has the following parts:
- Main Data entry Component
- Submit Button
   - Enabled by vaidation from Data entry component.
- Back buttton if possible to go back.
   - Enabled if there are previous forms.

## The Main Data entry Component of each Form can be the following
- Group Entry
    - Contains one or more of the following items
- List Entry
    - Contains add and remove items.
- Short Text 
    - Subtypes:
        - Email validation
        - 
- Long Text
    - min/max characters.
//- Yes/No
- Multiple Choice (max 8 Items)
    - Required  (yes/no)
    - Multiple selections (yes/no)
    - randomize order (yes/no)
    - Add 'other' (yes/no)
- Number
- Dropdown
-   Date, Time, Range
- Pickers:
- Statement (no entry text component)

The top level Component that presents the Form contains the Four basic types of components needed:
-Text inputs
-Textarea inputs
-Lists
-Submit buttons

*** ALL components must hold state, at least between sessions - this is an app that ideally engages the user for 5 years, and they must be able to retreieve previous forms and edit their answers if necessary.

Examples for desired UX interaction may be referenced here: https://amos43.typeform.com/to/Ft4cFA?name=xxxxx&email=xxxxx&last_name=xxxxx&max_budget=xxxxx&min_budget=xxxxx


## Compoenent details
1)Short text

- Must always hold state - should maintain value after entered, including in between sessions, so a user can always go back and edit.
- A submit or 'ok' button can appear once the input is valid. We can check for validation using tcomb-validation(https://github.com/gcanti/tcomb-validation/blob/master/README.md). See typeform text inputs for an example of how this should look.

2)Long text
- Must behave and function exactly like Text input, but larger space. This does not appear to be available by default in tcomb-react-native library(tcomb documentation says this is possible by setting an option 'type: textarea' but this has not worked for me.)


3)List Entry
- List of items, each item must contain a select box(options popualted by const of t-comb type enums generated in forms/contents.js), a '+' button for adding list items and a '-' button for removing.
- Must always hold state - should maintain value after entered, including in between sessions, so a user can always go back and edit. Options are generated from const of type enums - in some forms, options should not be reusable.
  - Example - Step 3(form 1):
     The select box populates options from const CharachterStrengths defined in contens.js of forms directory. When a charachter strength is selected, it should not be available in further list items - this component should contain an onChange prop which updates state and removes previously selected options from the list.
- Must have an option for min and max items.
- Must have a placeholder option of null value.

4)Multiple Choice (max 8 Items)
- Multiple choice will be written as a t-comb type 'struct' with choices nested in the struct as t-comb type 'booleans', which display as iOS switches. Can have the following parameters. 
    - Required  (yes/no): By default, all fields required, so at least one multiple choice value must be selected for the 
    - Multiple selections (yes/no)
    - randomize order (yes/no)
    - Add 'other' (yes/no)









4)Submit Button
- Text should read "SKIP" if entire form is invalid, and "NEXT". We can check this using getValue() (https://github.com/gcanti/tcomb-form/blob/master/GUIDE.md#getvalue).



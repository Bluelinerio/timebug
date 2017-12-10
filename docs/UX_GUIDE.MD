This app uses react-native and tcomb-form-native(https://github.com/gcanti/tcomb-form-native/), a forms library for react-native.

There are four basic types of components needed.There may be variations of some components depending on the desired user interaction:

---Text inputs
---Textarea inputs
---List items
---Submit buttons

*** ALL components must hold state, at least between sessions - this is an app that ideally engages the user for 5 years, and they must be able to retreieve previous forms and edit their answers if necessary.

Examples for desired UX interaction may be referenced here: https://amos43.typeform.com/to/Ft4cFA?name=xxxxx&email=xxxxx&last_name=xxxxx&max_budget=xxxxx&min_budget=xxxxx

1)Text Inputs
-- Must always hold state - should maintain value after entered, including in between sessions, so a user can always go back and edit. 
-- A submit or 'ok' button can appear once the input is valid. We can check for validation using tcomb-validation(https://github.com/gcanti/tcomb-validation/blob/master/README.md). See typeform text inputs for an example of how this should look.

2)Textarea inputs
-- Must behave and function exactly like Text input, but larger space. This does not appear to be available by default in tcomb-react-native library(tcomb documentation says this is possible by setting an option 'type: textarea' but this has not worked for me.)


3)List items
-- Must always hold state - should maintain value after entered, including in between sessions, so a user can always go back and edit. Options are generated from const of type enums - in some forms, options should not be reusable, so list component should contain an onChange prop which updates state. 
  -- Example - Step 3(form 1):
     The select box populates options from const CharachterStrengths defined in contens.js of forms directory. When a charachter strength is selected, it should not be available in further list items - this component should contain an onChange prop which updates state and removes previously selected options from the list.













-----------------------------------------------------------------------------------------------------------------------------------------

-- Example - Step 


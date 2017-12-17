This saga takes care of

1. Changing the form model if there's a change in user progress.
2. Saving the values of the current form in the Redux state.

## Changing the form model if there's a change in user progress.

If the user is logged in, it will look out the form model according to the step and form the user is currently in, and update the model in the Redux state, which will be used in the `FormComponent`.

##  Saving the values of the current form in the Redux state.

When the Next button of each form it's pressed, an action is dispatched, which this saga listens to in order to store the form value in the Redux state. Following this it will update the user with the new progress, which would be one of the following:

1. The next form in the current step
2. The next step if the saved form was the last one in the step.
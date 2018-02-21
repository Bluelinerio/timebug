import * as React                   from 'react'
import Button                       from '../../../components/Button'
import User                         from '../../../containers/User'
import LoginWithFbButtonContainer   from './LoginWithFbButtonContainer';
import BeginExerciseButtonContainer from './BeginExerciseButtonContainer'

export default () => (
  <User 
    renderWithUser={() => <BeginExerciseButtonContainer /> }
    renderWithAuthenticating={() => (
        <Button
          backgroundColor='white'
          text='Loading...'
          disabled={true}
        />
      )
    }
    renderWithUndetermined= {() => null } 
    renderWithAnonymous={() => (<LoginWithFbButtonContainer />)}
  />
)

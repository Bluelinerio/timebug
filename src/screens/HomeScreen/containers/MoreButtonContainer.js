import * as React                   from 'react'
import Button                       from '../../../components/Button'
import User                         from '../../../containers/User'
import MoreCell                     from '../components/DashboardCells/MoreCell'

export default () => (
  <User 
    renderWithUser={() => (
        <MoreCell onPress={() => null}/>
      )
    }
    renderWithAnonymous={() => (
      <MoreCell onPress={() => null}/>
      ) 
    }
    renderWithUndetermined= {() => null } 
  />
)
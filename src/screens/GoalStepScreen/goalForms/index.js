import t from '../components/form'

export default {
  1: {
    type: t.struct({
      goalSteps: t.list(
        t.struct({
          step: t.String
        })
      )
    }),
    options: {
      label:
        'Add some steps that could help you in the completion of your goal!',
      fields: {
        goalSteps: {
          item: {
            auto: 'none',
            fields: {
              step: {
                label: 'Some label'
              }
            }
          }
        }
      }
    }
  }
}

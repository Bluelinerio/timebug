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
        'Steps that could help you reach your goal',
      fields: {
        goalSteps: {
          item: {
            auto: 'none',
            fields: {
              step: {
                label: 'A step to complete my goal...'
              }
            }
          }
        }
      }
    }
  }
}

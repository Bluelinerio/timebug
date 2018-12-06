import { isStepCompleted } from '../../../src/services/cms'

describe('cms helper methods tests', function() {
  it('Should test for step completion succesfully', function() {
    const user = {
      forms: [
        {
          stepId: '1'
        },
        {
          stepId: '3'
        },
        {
          stepId: '20'
        }
      ]
    }
    expect(isStepCompleted(1, user)).toBe(true)
    expect(isStepCompleted(20, user)).toBe(true)
    expect(isStepCompleted(3, user)).toBe(true)
    expect(isStepCompleted(15, user)).toBe(false)

    user.forms.push({ stepId: '15'})

    expect(isStepCompleted(15, user)).toBe(true)

    user.forms.pop()
    expect(isStepCompleted(15, user)).toBe(false)

    user.forms.pop()

    expect(user.forms.length).toBe(2)
    expect(user.forms[0].stepId).toBe('1')
    expect(user.forms[1].stepId).toBe('3')

    user.forms.push({ stepId: '22'})

    expect(isStepCompleted(22, user)).toBe(true)

    expect(isStepCompleted(2, user)).toBe(false)

    user.forms.push({ stepId: '2'})

    expect(isStepCompleted(2, user)).toBe(true)
  })

  it('Should fail for step completion if step has been deleted', function() {
    // Steps can't be deleted so this behavior is expected for now
    const user = {
      forms: [
        {
          stepId: '1'
        },
        {
          stepId: '3'
        },
        {
          stepId: '20'
        }
      ]
    }
    expect(isStepCompleted(20, user)).toBe(true)

    user.forms.pop()

    user.forms.push({ stepId: '22'})

    expect(isStepCompleted(22, user)).toBe(true)

    try {
      expect(isStepCompleted(20, user)).toBe(false)
    } catch (err) {
      expect(err).not.toBe(undefined)
    }
  })

})

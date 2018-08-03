import { view, set, over } from 'ramda'
import { dataLens, formLens, formTimeStampLens } from '../formData.lenses'
import { formData } from '../rootReducer.lenses'

describe('dataLens', () => {
  const data = 'DATA'
  it('returns data', () => expect(view(dataLens, { data })).toEqual(data))
})

const form = 'Form'
const stepId = '1'
const formId = '1'

describe('formLens', () => {
  const state = {
    formData: {
      data: {
        [stepId]: {
          [formId]: form
        }
      }
    }
  }
  it('returns form', () => {
    expect(view(formLens({ stepId, formId }), view(formData, state))).toEqual(form)
  })
})

describe('formTimeStampLens', () => {
  const timeStamp = 1231234124
  describe('if evaluated with no arg', () => {
    const state = {
      formData: {
        timeStamp
      }
    }

    it('returns top', () => {
      expect(view(formTimeStampLens(), view(formData, state))).toEqual(timeStamp)
    })
    it('sets top', () => {
      expect(set(formTimeStampLens(), timeStamp, {})).toEqual(view(formData, state))
    })
  })

  describe('if evaluated with object with stepId', () => {
    it('returns top', () => {
      const stepId = '1'
      const state = {
        formData: {
          data: {
            [stepId]: {
              timeStamp
            }
          }
        }
      }

      expect(view(formTimeStampLens({ stepId }), view(formData, state)) ).toEqual(
        timeStamp
      )
    })
  })

  describe('if evaluated with object with stepId and formId', () => {

    it('returns top', () => {
      const stepId = '1'
      const state = {
        formData: {
          data: {
            [stepId]: {
              [formId] : {
                timeStamp
              }
            }
          }
        }
      }

      expect(view(formTimeStampLens({ stepId, formId }), view(formData, state)) ).toEqual(
        timeStamp
      )
    })
  })
})

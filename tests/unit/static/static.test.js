import { getInsight } from '../../../src/static/insights'

describe('Tests related to static calls', function() {
  it('should get the insight for a step', function() {
    const insight = getInsight(1)
    expect(typeof insight).toBe('string')
  })

  it('should return undefined if insight or step do not exist', function() {
    const insight = getInsight('123123')
    expect(insight).toBe(undefined)
  })
})

import { countConsecutiveDays } from '../../../src/screens/MyJourneyScreen/containers/FormConsumers/containers/Form1/MeditationCheckinContainer'

describe('form 1 tests', function() {
  it('Should count consecutive days correctly', function() {
    const days = ['12/24/2018', '12/25/2018', '12/26/2018']
    expect(countConsecutiveDays(days)).toBe(3)
  })

  it('Should skip non consecutive days to the latest one', function() {
    const days = ['12/24/2018', '12/25/2018', '12/26/2018', '12/28/2018']
    expect(countConsecutiveDays(days)).toBe(1)
  })

  it('Should correctly measure the most recent day (today)', function() {
    const days = [
      '12/24/2018',
      '12/25/2018',
      '12/26/2018',
      '12/28/2018',
      '12/29/2018',
      '12/30/2018',
      '12/31/2018',
      '01/01/2019',
    ]
    expect(countConsecutiveDays(days)).toBe(5)
  })
})

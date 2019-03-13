import { v4_migration } from '../../../src/redux/reducers/awards.reducer'
import dummyState from '../../dummy.state.json'

const expectedKeysInState = [
  'daily_timebug_planner_tool',
  'board_of_advisors_tool',
]

describe('Migration tests for tools', function() {
  it('Should migrate v3 data sample correctly', function() {
    const state = dummyState.awards
    const newState = v4_migration(state)
    const [daily_timebug, board_of_advisors] = expectedKeysInState
    expect(newState.data).toHaveProperty(daily_timebug)
    expect(newState.data).toHaveProperty(board_of_advisors)
  })
})

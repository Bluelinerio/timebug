import t from "../components/templates";
import { PillarsOfLife, Emotion, InteractionFrequency, GoalYears, PercentSelector, OneToTenScale, GoalProcess, DescribeProcess } from "./contents";

export default {

	1: {
		type: t.struct({
			id: t.maybe(t.String),
			goals: t.list(
				t.struct({
					goal: t.String,
					percentCompleted: PercentSelector,
					satisfactionLevel: OneToTenScale,
					goalProcess: GoalProcess
				})
			)
		}),
		options: {
			label: 'What were your top goals over the past 5 years?',

			fields: {
				id: {
					hidden: true
				},
				goals: {
					item: {
						fields: {
							goal: {
								label: 'Goal',
								//error:'Please enter a goal.'

							},
							percentCompleted: {
								label: 'How far did you get with this goal?(as a percentage)?'
							},
							satisfactionLevel: {
								label: 'How satisfied are you with the effort (time & energy) you committed to each goal and the corresponding goal outcome?',
								help: '1= hardly satisfied, 10= completely satisfied'
							},
							goalProcess: {
								label: 'How would you describe your goal-process?',
								//error:'How much time and energy have you invested?'
							},

						},
					},
					label: "Top 10-15 Goals",
					disableOrder: true,
					maxLines: 15,
					config: {
						maxLines: 15,
					},
				},
			}
		},
		value: {
			fields: {
				id: 'step11+v0.0.0.1'
			}
		}
	},
	2: {
		type: t.struct({
			goalTracking: t.struct({
				year1: t.Boolean,
				year2: t.Boolean,
				year3: t.Boolean,
				year4: t.Boolean,
				year5: t.Boolean
			}),
		}),
		options: {
			label: 'During the past 5 years, what years did you track your goals?'
		},
		fields: {
			goalTracking: {
				options: {
					auto: 'labels'
				}
			}
		}
	},
	3: {
		type: t.struct({
			emotions: t.list(Emotion)
		}),
		options: {
			label: 'What main emotions have you felt over the past 5 years?'
		},
		fields: {
			emotions: {
				options: {
					auto: 'labels'
				}
			}
		}
	}

};



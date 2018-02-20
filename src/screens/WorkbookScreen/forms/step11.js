import t from "../components/templates";
import { PillarsOfLife, Emotion, InteractionFrequency, GoalYears, PercentSelector, OneToTenScale, GoalProcess, DescribeProcess } from "./contents";

export default {

	1: {
		type: t.struct({
			id:t.maybe(t.String),
			field: t.list(
				t.struct({
					goal: t.String,
					percentCompleted: PercentSelector,
					satisfactionLevel: OneToTenScale,
					goalProcess: GoalProcess,
					goalTracking: t.struct({
						year1:t.Boolean,
						year2:t.Boolean,
						year3:t.Boolean,
						year4:t.Boolean,
						year5:t.Boolean
					}),
					emotions:t.list(Emotion)
				})
			)
		}),
		options: {
			fields: {
				id: {
					hidden: true
				},
				field: {
					label:'What were your top goals over the past 5 years?',
					item: {
						fields: {
							goal: {
								placeholder: 'Goal',
								//error:'Please enter a goal.'

							},
							percentCompleted: {
								label:'How far did you get with this goal?(as a percentage)?'
							},
							satisfactionLevel: {
								label:'How satisfied are you with the effort (time & energy) you committed to each goal and the corresponding goal outcome?',
								help:'1= hardly satisfied, 10= completely satisfied'
							},
							goalProcess: {
								label: 'How would you describe your goal-process?',
								//error:'How much time and energy have you invested?'
							},
							goalTracking: {
								label:'During the past 5 years, what years did you track your goals?'
							},
							emotions: {
								label:'What main emotions have you felt over the past 5 years?'
							}

						},
					},
					auto: 'none',
					label: "Top 10-15 Goals",
					disableOrder: true,
					maxLines: 15,
					config: {
						maxLines: 15,
					},
				},
			}
		},
		value : {
			fields: {
				id: 'step11+v0.0.0.1'
			}
		}
	}

};



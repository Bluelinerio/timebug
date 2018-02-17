import t from "../components/templates";
import { LifeCategory, InteractionFrequency, GoalYears, PercentSelector, OneToTenScale, UseWearableTech, DescribeProcess } from "./contents";

export default {

	1: {
		type: t.struct({
			id:t.maybe(t.String),
			field: t.list(
				t.struct({
					goal: t.String,
					percentCompleted: PercentSelector,
					satisfactionLevel: OneToTenScale,
					investedTimeEnergy: OneToTenScale,
					requiredTimeEnergy: OneToTenScale
				})
			)
		}),
		options: {
			label: "Gather all of your previous goal data, including time spent and key achievements over the past 5 years. You can start with last year if you feel overwhelmed assessing all 5 years.",					
			fields: {
				id: {
					hidden: true
				},
				field: {
					item: {
						fields: {
							goal: {
								placeholder: 'Goal',
								error:'Please enter a goal.'

							},
							percentCompleted: {
								error:'How far along are you to completing this goal?'
							},
							satisfactionLevel: {
								placeholder: 'Satisfaction Level(1-10 scale)',
								error:'How satisfied are you with your progress?'
							},
							investedTimeEnergy: {
								placeholder: 'Invested Time/Energy(1-10 scale)',
								error:'How much time and energy have you invested?'
							},
							requiredTimeEnergy: {
								placeholder: 'Required Time/Energy',
								error:'How much time and energy is required?'
							},

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
	},
	2: {
		type: t.struct({
			describeProcess: DescribeProcess,
			goalYears: t.struct({
				option1: t.maybe(t.Boolean),
				option2: t.maybe(t.Boolean),
				option3: t.maybe(t.Boolean),
				option4: t.maybe(t.Boolean),
				option5: t.maybe(t.Boolean)
			}),
			useWearableTech: UseWearableTech
    }),
		options: {
			label: "Outline the Goal-Setting & Tracking Process that you have followed over the past 5 years.",
			fields: {
					describeProcess: {
						label: 'How do you describe the process?(Select one)',
						error:'Please select a value.'
					},			
					goalYears: {
						label: 'Have you written down your goals annually?(Check each year that you have done this for)',
						fields: {
							option1: {
								label: "2011"
							},
							option2: {
								label: "2012"
							},
							option3: {
								label: "2013"
							},
							option4: {
								label: "2014"
							},
							option5: {
								label: "2015"
							}
						}
					},		
					useWearableTech: {
						label: 'Do you use wearable teach, websites and/or spreadsheets to manage your time and goals?(select one)',
						error:'Please select a value.'
					}
			},
		}
	},
	3: {
		type: t.struct({
			id:t.maybe(t.String),
			description: t.String
		}),
		options: {
			auto: 'none',
			disableOrder: true,
			fields: {
				id: {
					hidden: true
				},
				description: {
					label: "In a few sentences, and descriptive key words, assess how your life has been, and how you have done over the past 5 years.",
					error:'This will help you to reflect on your strongest areas, and areas where improvement is needed.'
				}
			}
		}
	}

};


import t from "../components/templates";
import { LifeCategory, InteractionFrequency } from "./contents";

export default {

	1: {
		title: "Gather all of your previous goal data, including time spent and key achievements over the past 5 years. You can start with 2015 if you feel overwhelmed assessing all 5 years.",
		type: t.struct({
			id:t.maybe(t.String),
			field: t.list(
				t.struct({
					goal: t.String,
					percentGoalCompleted: t.Number,
					satisfactionLevel: t.Number,
					investedTimeEnergy: t.Number,
					requiredTimeEnergy: t.maybe(t.Number)

				})
			)
		}),
		options: {
			fields: {
				id: {
					hidden: true
				},
				field: {
					item: {
						fields: {

							goal: {
								placeholder: 'Goal'
							},
							percentGoalCompleted: {
								placeholder: '% of Goal Completed'
							},
							satisfactionLevel: {
								placeholder: 'Satisfaction Level(1-10 scale)'
							},
							investedTimeEnergy: {
								placeholder: 'Invested Time/Energy(1-10 scale)'
							},
							requiredTimeEnergy: {
								placeholder: 'Required Time/Energy'
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
		title: "Outline the Goal-Setting & Tracking Process that you have followed over the past 5 years.",
		type: t.struct({
			list1: t.struct({
				option1: t.maybe(t.Boolean),
				option2: t.maybe(t.Boolean),
				option3: t.maybe(t.Boolean),
				option4: t.maybe(t.Boolean),
				option5: t.maybe(t.Boolean)
			}),
			list2: t.struct({
				option1: t.maybe(t.Boolean),
				option2: t.maybe(t.Boolean),
				option3: t.maybe(t.Boolean),
				option4: t.maybe(t.Boolean),
				option5: t.maybe(t.Boolean)
			}),
			list3: t.struct({
				option1: t.maybe(t.Boolean),
				option2: t.maybe(t.Boolean),
				option3: t.maybe(t.Boolean),
				option4: t.maybe(t.Boolean)
			})

		}),
		options: {
			fields: {
				list1: {
					label: 'How do you describe the process?(Check one)',
					fields: {
						option1: {
							label: "I haven't done anything"
						},
						option2: {
							label: "Ad Hoc"
						},
						option3: {
							label: "Good at setting but not tracking"
						},
						option4: {
							label: "Super detailed and consistent"
						},
						option5: {
							label: "Thorough + working with a coach or peer group"
						}
					}
				},
				list2: {
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
				list3: {
					label: 'Do you use wearable teach, websites and/or spreadsheets to manage your time and goals?(check one)',
					fields: {
						option1: {
							label: "Never"
						},
						option2: {
							label: "Sometimes"
						},
						option3: {
							label: "Often"
						},
						option4: {
							label: "Always"
						}
					}
				}


			},
		}
	},
	3: {
		title: "In a few sentences, and descriptive key words, assess how your life has been, and how you have done over the past 5  years.",
		type: t.String,
		options: {
			auto: 'none',
			type: 'textarea',
			disableOrder: true
		}
	}

};



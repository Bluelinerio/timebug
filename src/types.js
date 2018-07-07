import {
	REFLECTION,
	TEAMWORK,
	GOALS,
	CAREER,
	HOBBIES,
	HEALTH,
	RELATIONSHIPS,
	ENVIRONMENT,
	SPIRITUALITY,
	PHASE1,
	PHASE2,
	PHASE3,
	NEIGHBOR,
	NEXT_STEP_SUGGESTION_NAME
} from './constants/suggestions'

import {
	STEP1,
	STEP2,
	STEP3,
	STEP4,
	STEP5,
	STEP6,
	STEP7,
	STEP8,
	STEP9,
	STEP10,
	STEP11,
	STEP12,
	STEP13,
	STEP14,
	STEP15,
	STEP16,
	STEP17,
	STEP18,
	STEP19,
	STEP20,
	STEP21,
	STEP22,
	STEP23,
	STEP24,
	STEP25,
	STEP26,
	STEP27,
	STEP28,
	STEP29,
	STEP30,
	MEDITATION,
	SELF_ASSESSMENT,
	VISION_CREATION,
	COMPLETE
} from './constants/steps'
import {
	HOME_SCREEN,
	DONE_SCREEN,
	ASSIGNMENT_FLOW,
	WALKTHROUGH,
	DASHBOARD_SCREEN,
	INITIAL_ROUTE_NAME,
	MEDITATION_SCREEN,
	MARKDOWN_SCREEN,
	EMOJI_PICKER_SCREEN,
	STEP_SCREEN,
	WORKBOOK_SCREEN,
	WORKBOOK_DONE_SCREEN
} from './constants/screens'

import {
	CHECKIN_PHYSICALLY,
	CHECKIN_EMOTIONALLY,
	CHECKIN_MENTALLY,
	CHECKIN_DAILY,
	CHECKIN_MOOD,
	CHECKIN_MEDITATION,
	CHECKIN_EMOJI
} from './constants/checkins'

import {
	APP_INSTURUCTION_NOTIFICATION,
	NEXT_STEP_SUGGESTIONS_NOTIFICATION,
	RESUME_WORK_ON_FORM_NOTIFICATION,
	READ_MORE_ABOUT_STEP_NOTIFICATION,
	CHECKIN_PHYSICALLY_NOTIFICATION,
	CHECKIN_EMOTIONALLY_NOTIFICATION,
	CHECKIN_MENTALLY_NOTIFICATION,
	CHECKIN_DAILY_NOTIFICATION,
	CHECKIN_MOOD_NOTIFICATION,
	CHECKIN_MEDITATION_NOTIFICATION,
	CHECKIN_EMOJI_NOTIFICATION
} from './constants/notifications'

export const UNDETERMINED = 'UNDETERMINED'
export const ANONYMOUS = 'ANONYMOUS'
export const AUTHENTICATING = 'AUTHENTICATING'

export type Category =
	| REFLECTION
	| TEAMWORK
	| GOALS
	| CAREER
	| HOBBIES
	| HEALTH
	| RELATIONSHIPS
	| ENVIRONMENT
	| SPIRITUALITY
	| PHASE1
	| PHASE2
	| PHASE3
	| NEIGHBOR

export type StepId =
	| STEP1
	| STEP2
	| STEP3
	| STEP4
	| STEP5
	| STEP6
	| STEP7
	| STEP8
	| STEP9
	| STEP10
	| STEP11
	| STEP12
	| STEP13
	| STEP14
	| STEP15
	| STEP16
	| STEP17
	| STEP18
	| STEP19
	| STEP20
	| STEP21
	| STEP22
	| STEP23
	| STEP24
	| STEP25
	| STEP26
	| STEP27
	| STEP28
	| STEP29
	| STEP30

export type NextStepSuggestionData = {
	previousSteps: Array<StepId>,
	suggestedStepId: StepId,
	category: Category,
	texts: {
		[HOME_SCREEN | DONE_SCREEN]: string
	}
}

export type NextStepSuggestion = {
	name: NEXT_STEP_SUGGESTION_NAME,
	data: NextStepSuggestionData
}

export type Icon = {
	uri: string
}

export type Assignment = {
	order: number,
	content: string,
	icon: Icon
}

export type Phase = MEDITATION | SELF_ASSESSMENT | VISION_CREATION | COMPLETE

type Numbers1to14 = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14
type Numbers15to26 = 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26
type Numbers27to30 = 27 | 28 | 29 | 30
// @flow
export type StepNumber = Numbers1to14 & Numbers15to26 & Numbers27to30

export type Colors = {
	phases: {
		MEDITATION: string,
		SELF_ASSESSMENT: string,
		VISION_CREATION: string,
		COMPLETE: string
	},
	steps: {
		StepNumber: string,
		StepNumber: string,
		StepNumber: string,
		StepNumber: string,
		StepNumber: string,
		StepNumber: string,
		StepNumber: string,
		StepNumber: string,
		StepNumber: string,
		StepNumber: string,
		StepNumber: string,
		StepNumber: string,
		StepNumber: string,
		StepNumber: string,
		StepNumber: string,
		StepNumber: string,
		StepNumber: string,
		StepNumber: string,
		StepNumber: string,
		StepNumber: string,
		StepNumber: string,
		StepNumber: string,
		StepNumber: string,
		StepNumber: string,
		StepNumber: string,
		StepNumber: string,
		StepNumber: string,
		StepNumber: string,
		StepNumber: string,
		StepNumber: string
	}
}

export type Step = {
	number: number,
	stepId: string,
	title: string,
	subtitle: string,
	description: string,
	assignments: [Assignment],
	icon: Icon,
	type: string,
	color: ?string,
	duration: number,
	stepScreenDescription: string,
	shortIcon: Icon
}

export type OnobardingPage = {
	title: string,
	slides: [Slide]
}

export type Page = {
	name: string,
	title: string,
	content: string
}

export type Slide = {
	title: string,
	description: string,
	image: Icon,
	order: string
}
export type GraphErrors = Array<Object>

export type GraphResponse = {
	data: Object,
	errors: GraphErrors
}
export type ErrorResponse = {
	error: GraphResponse
}

export type UserState = { +user: User } | ANONYMOUS | UNDETERMINED

export type Form = {
	id: string,
	stepId: number,
	data: {},
	createdAt: number,
	updatedAt: number
}

export type AchievementUpdate = {
	id: string,
	createdAt: number,
	value: {}
}

export type Achievement = {
	id: string,
	createdAt: number,
	updatedAt: number,
	tagName: string,
	updates: [AchievementUpdate]
}

export type User = {
	+facebookId: string,
	+id: string,
	+name: string,
	+steps: ?Array<Object> /** Meta information about the query. */,
	+finished: boolean,
	+endpoint: string,
	+forms: [Form],
	+achievements: [Achievement],
	+checkins: [Checkin]
}

export type CreateFormArgs = {
	userId: string,
	stepId: number,
	data: any
}

export type UpdateormArgs = {
	userId: string,
	id: string,
	data: any
}

export type Auth = {
	token: string,
	user: {
		name: string,
		id: string
	}
}

export type CheckinName =
	| CHECKIN_PHYSICALLY
	| CHECKIN_EMOTIONALLY
	| CHECKIN_MENTALLY
	| CHECKIN_DAILY
	| CHECKIN_MOOD
	| CHECKIN_MEDITATION
	| CHECKIN_EMOJI

export type Checkin = {
	+id: string,
	+name: CheckinName,
	+user: User,
	+createdAt: string,
	+updatedAt: string,
	+eventDate: string,
	+version: string,
	+data: any
}

export type createCheckinArgs = {
	name: string,
	userId: String,
	eventDate: string,
	version: string,
	data: any
}

export type updateCheckinArgs = {
	checkinId: string,
	eventDate: string,
	version: string,
	data: any
}

export type filterCheckinsByTemplateArgs = {
	userId: string,
	name: string,
	version: string
}

type ErrorActionType = {
	error: any
}

export type OpenFBLoginResult = { fbData: string } | ErrorActionType

export type Screen =
	| HOME_SCREEN
	| ASSIGNMENT_FLOW
	| WALKTHROUGH
	| DASHBOARD_SCREEN
	| INITIAL_ROUTE_NAME
	| MEDITATION_SCREEN
	| MARKDOWN_SCREEN
	| EMOJI_PICKER_SCREEN
	| STEP_SCREEN
	| WORKBOOK_SCREEN
	| WORKBOOK_DONE_SCREEN

export type NotificationName =
	| APP_INSTURUCTION_NOTIFICATION
	| NEXT_STEP_SUGGESTIONS_NOTIFICATION
	| RESUME_WORK_ON_FORM_NOTIFICATION
	| READ_MORE_ABOUT_STEP_NOTIFICATION
	| CHECKIN_PHYSICALLY_NOTIFICATION
	| CHECKIN_EMOTIONALLY_NOTIFICATION
	| CHECKIN_MENTALLY_NOTIFICATION
	| CHECKIN_DAILY_NOTIFICATION
	| CHECKIN_MOOD_NOTIFICATION
	| CHECKIN_MEDITATION_NOTIFICATION
	| CHECKIN_EMOJI_NOTIFICATION

export type Notification = {
	+name: NotificationName,
	+createdAt: string,
	+updatedAt: string,
	+eventDate: string,
	+version: string,
	+data: any
}

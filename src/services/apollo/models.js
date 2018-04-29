// @flow

export type GraphErrors = Array<Object>;

export type GraphResponse = {
  data: Object,
  errors: GraphErrors
};
export type ErrorResponse = {
  error: GraphResponse
};

export const UNDETERMINED = 'UNDETERMINED';
export const ANONYMOUS = 'ANONYMOUS';
export const AUTHENTICATING = 'AUTHENTICATING';

export type UserState = { +user: User } | ANONYMOUS | UNDETERMINED;

export type AuthState = {
  +isLoggedIn: boolean,
  +isLoading: boolean
};

export type Form = {
  id: string,
  stepId: number,
  data: {},
  createdAt: number,
  updatedAt: number
};

export type AchievementUpdate = {
  id: string,
  createdAt: number,
  value: {}
};

export type Achievement = {
  id: string,
  createdAt: number,
  updatedAt: number,
  tagName: string,
  updates: [AchievementUpdate]
};

export type User = {
  +facebookId: string,
  +id: string,
  +name: string,
  +steps: ?Array<Object> /** Meta information about the query. */,
  +finished: boolean,
  +endpoint: string,
  +forms: [Form],
  +achievements: [Achievement]
};

export type AuthUser = {
  name: string,
  id: string
};

export type CreateFormArgs = {
  userId: string,
  stepId: number,
  data: any
};

export type UpdateormArgs = {
  userId: string,
  id: string,
  data: any
};

export type Auth = { token: string, user: AuthUser };

export type Checkin = {
  +id: string,
  +name: string, //currently, this property is named template, it is one of the changes that are pending to be done
  +user: User,
  +createdAt: string,
  +updatedAt: string,
  +eventDate: string,
  +version: string,
  +data: any
}

export type createCheckinArgs = {
  +name: string, //currently, this property is named template, it is one of the changes that are pending to be done
  +userId: String,
  +eventDate: string,
  +version: string,
  +data: any
}

export type updateCheckinArgs = {
    +checkinId: string,
    +eventDate: string,
    +version: string,
    +data: any
}

export type filterCheckinsByTemplateArgs = {
  +userId: string,
  +name: string, //currently, this property is named template, it is one of the changes that are pending to be done
  +version: string
}
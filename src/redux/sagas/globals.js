type ErrorActionType = {
  error: any,
};
export const CANCELLED_ERROR: ErrorActionType = { error: 'cancelled' };
export type OpenFBLoginResult = { fbData: string } | ErrorActionType;

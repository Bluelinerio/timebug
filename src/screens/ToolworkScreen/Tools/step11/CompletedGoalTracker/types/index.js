// @flow
import type { InnerElementIdentificationPayload } from '2020_redux/actions/formData.actions'

export type Goal = {
  id: string,
  name: string,
  type: string,
  outcome: string,
  completion: number,
  effort: string,
  identificationPayload: Array<InnerElementIdentificationPayload>
}

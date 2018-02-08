import * as React from 'react';
import { connect } from 'react-redux'
import selectors from '../../../redux/selectors';
import { compose, graphql } from 'react-apollo'

const mapStateToProps = (state) => ({
  user: selectors.user(state),
  userForms: selectors.userForms(state),
  localFormData: selectors.formData(state)
})

const mapFormDataToUpdateAndCreate = (forms, localFormData) => {
  const { difference, onlyLeft } = diffObjs(localFormData, forms)

  if(!difference && !onlyLeft) return []

  const updates = difference && Object.keys(difference).reduce((payload, key) => {
    debugger;
    const id = userForms[key].id;
    const data = difference[key].leftValue
    return [...payload, 
      graphql(gql`mutation create($userId: ID!, $id: ID!, $data: JSON! ) {
          createForm(userId: $userId, id: $id, data: $data), {
            id
            stepId
            data
          }
        }
      `, {
        userId,
        id,
        data
      })
    ]
  },[])

  const creates =  onlyLeft && Object.keys(onlyLeft).reduce((payload, key) => {
    debugger;
    const stepId = key.parseInt();
    const data = difference[key].leftValue
    return [...payload, 
      graphql(gql`mutation update($userId: ID!, $stepId: Int!, data: JSON) {
          updateForm(userId: $userId, stepId: $stepId, data: $data) {
            id
            stepId
            data
          }
        }
      `, {
        userId,
        data,
        stepId
      })
    ]
  }, [])

  return [...(creates || []), ...(updates || [])]
}

export default connect(mapStateToProps, null)(({
  user,
  userForms,
  localFormData
}) => {
    const forms = userForms.reduce((forms, form) => ({
    ...forms,
    [form.stepId]: form.data
  }), {});

  return compose(
    ...mapFormDataToUpdateAndCreate(forms, localFormData)
  )(())
})

const Comp = (props) => {
  const componentWithData = compose(
  userQuery,                                    // first query
  otherQuery,                                   // second query
  connect(mapStateToProps, mapDispatchToProps), // redux
)(Groups);

}
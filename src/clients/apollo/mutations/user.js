import gql from 'graphql-tag';

export const loginFacebook = gql`
query auth($token:String!){
  authenticate(facebookToken:$token ){
    token
    user
  }
}
`;

export const getUser = gql`
  query getUser($id: String!) {
    getUser(id: $id) {
      _id
      name
      facebookId
      steps(type: "LAST") {
        _id
        stepId
        data
      }
    }
  }
`;

export const addStep = gql`
  mutation addStep($userId: String!, $step: InputStep!) {
    addStep(userId: $userId, step: $step) {
      _id
      name
      facebookId
      steps {
        _id
        stepId
        data
      }
    }
  }
`;
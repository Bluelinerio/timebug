import gql from 'graphql-tag';
// TODO: this file is conflicted, check sibling file and delete
export const loginFacebook = gql`
  query auth($token:String!){
    authenticateFB(facebookToken:$token ){
      token
      user
    }
  }
`;

export const getUser = gql`
  query getUser($id:ID!){
    User(id:$id){
      id
      facebookId
      name
      steps(orderBy:stepId_DESC,first:1){
        id
        stepId
        data
      }
    }
  }
`;

export const testUser = gql`
  query testUser($id:ID!){
    User(id: $id){
      id
      name
      facebookId
    }
  }
`

export const addStep = gql`
  mutation add($userId: ID!, $stepInput: Json!) {
    addStep(userId: $userId, stepInput: $stepInput) {
      message
      user
    }
  }
`;
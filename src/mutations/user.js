import gql from 'graphql-tag';

export const createUser = gql`
  mutation createUser {
    createUser(user: {name: "somename", facebook_token: "13123122253"}) {
      _id
      name
      facebook_token
      steps {
        _id
        stepId
        data
      }
    }
  }
`;


export const test = gql`
  {
    Post(id: 1) {
        id
        title
        views
        User {
            name
        }
        Comments {
            date
            body
        }
    }
}`;

export const loginFacebook = gql`
  mutation loginFacebook($token: String) {
    loginFacebook(facebookToken: $token) {
      token,
      user {
        _id
        name
      }
    }
  }
`;

export const getUser = gql`
  query getUser($id: ID!) {
    getUser(id: id) {
      _id
      name
      facebook_token
      steps(type: "LAST") {
        _id
        stepId
        data
      }
    }
  }
`;

export const addStep = gql`
  mutation addStep {
    addStep(userId: "59cd070442afa9184caf732b", step: {stepId: 1, data: "777"}) {
      _id
      name
      facebook_token
      steps {
        _id
        stepId
        data
      }
    }
  }
`;
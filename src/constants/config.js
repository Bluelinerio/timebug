import { ENV, TESTUSERID } from '../../config.json'
export const CONTENTFUL_CREDENTIALS = {
  accessToken: 'c139e7f2a7a86fc0813e71fbb18bb7b1921189ce4d7cc58c7f0ccc0022adee5f',
  space: '1gbed7lrsmj4',  
};

export const APOLLO_ENDPOINT = 'https://api.graph.cool/simple/v1/cj9w55w851t2l015262zjbauu';
// 'http://localhost:3000/'
// /https://server-2020.herokuapp.com/
// 'http://2020-test.local.zaraffasoft.com/'


export const APOLLO_CONFIG = {
  uri: APOLLO_ENDPOINT,
  opts: {
    mode: 'no-cors',
  },
}

export const ENVIRONMENT = ENV
export const USER_ID = TESTUSERID 
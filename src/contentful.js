// @flow

import { createClient }                               from 'contentful'
import { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE, } from "./constants/config"

export const contentfulClient = createClient({
  accessToken: CONTENTFUL_ACCESS_TOKEN,
  space: CONTENTFUL_SPACE,
});
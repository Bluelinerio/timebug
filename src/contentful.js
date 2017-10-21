// @flow

import { createClient }                               from 'contentful'
import { CONTENT_DELIVERY_API_ACCESS_TOKEN, CONTENTFUL_SPACE, } from "./constants/config"

export const contentfulClient = createClient({
  accessToken: CONTENT_DELIVERY_API_ACCESS_TOKEN,
  space: CONTENTFUL_SPACE,
});
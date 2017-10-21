// @flow

import { createClient }                               from 'contentful'
import { CONTENTFUL_CREDENTIALS }                     from "./constants/config"

export const contentfulClient = createClient(CONTENTFUL_CREDENTIALS);
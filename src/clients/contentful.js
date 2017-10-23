// @flow

import { createClient }             from 'contentful';
import { CONTENTFUL_CREDENTIALS }   from "../constants/config";

export const CONTENTFUL_CONTENT_STEP   = 'day';
export const CONTENTFUL_CONTENT_LOGIN  = 'login';
export const CONTENTFUL_CONTENT_COLORS = 'colors';

export const contentfulClient = createClient(CONTENTFUL_CREDENTIALS);
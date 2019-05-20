// @flow
import { compose }              from 'recompose'
import UserFacebookDataProvider from '2020_HOC/UserFacebookDataProvider'
import AccountComponent         from '../components/AccountComponent'

export default compose(UserFacebookDataProvider)(AccountComponent)

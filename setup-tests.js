/* eslint-disable import/no-extraneous-dependencies */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// TODO: Fix jsdom Error : TypeError: this._getEventHandlerFor is not a function
function setupJSDom() {
  const { JSDOM } = require('jsdom')


  const jsdom = new JSDOM()
  const { window } = jsdom

  function copyProps(src, target) {
    const props = Object.getOwnPropertyNames(src)
      .filter(prop => typeof target[prop] === 'undefined')
      .map(prop => Object.getOwnPropertyDescriptor(src, prop))
    Object.defineProperties(target, props)
  }
  /* eslint-disable no-undef */
  global.window = window
  global.document = window.document
  global.navigator = {
    userAgent: 'node.js',
  }
  copyProps(window, global)
  /* eslint-enable no-undef */

  // Ignore React Web errors when using React Native
  // but still show relevant errors
  // React does not recognize
  const suppressedErrors = /(React does not recognize the.*prop on a DOM element|Unknown event handler property|is using uppercase HTML|Received `true` for a non-boolean attribute `accessible`|The tag.*is unrecognized in this browser)|is using incorrect casing|Received `true` for a non-boolean attribute `enabled`/
  const realConsoleError = console.error // eslint-disable-line
  // eslint-disable-next-line
  console.error = message => {
    if (message.match(suppressedErrors)) {
      return
    }
    realConsoleError(message)
  }
}


configure({ adapter: new Adapter() })

const noop = () => {};

export default noop;

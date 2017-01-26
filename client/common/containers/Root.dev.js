import React, { Component, PropTypes } from 'react';

import DevTools from './DevTools'
import Layout from './layout';

class Root extends Component {
  constructor() {
    super()
    this.state = { isMounted: false }
  }

  componentDidMount() {
    /**********************************************************************************************************/
    /***if you haven't install redux plugin in chrome, you could uncommit above line to active the dev tool****/
    /***           you also need to uncommit line 'DevTools.instrument()' in storeCreator.dev.js            ***/
    /**********************************************************************************************************/
    // this.setState({ isMounted: true })
    // console.log('Redux Devtools is now available. Press key "ctrl-i" to toggleVisibility. Press key "ctrl-m" to changePosition.')
  }

  render() {
    const { isMounted } = this.state;
    return (
      <div>
        <Layout>{this.props.children}</Layout>
        {isMounted && <DevTools/>}
      </div>
    )
  }
}

export default Root;
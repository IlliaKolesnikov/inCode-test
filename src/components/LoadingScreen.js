import React from 'react'
import {Dimmer, Loader, Segment} from 'semantic-ui-react'
import '../App.css'
const LoadingScreen = () =>(
    (
    <Segment className="fullviewport">
      <Dimmer active>
        <Loader size="huge">Loading</Loader>
      </Dimmer>
    </Segment>)
)

export default LoadingScreen
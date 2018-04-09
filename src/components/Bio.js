import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >

        <img
          src={profilePic}

          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Überblicksseite von <strong>Tobias Allmendinger</strong> für das WPM Web-Dev & JS_Frameworks.{' '}
(Abbildung kann vom Original abweichen)
        </p>
        <br/>
      </div>
    )
  }
}

export default Bio

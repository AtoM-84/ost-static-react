import {
  Menu,
  MenuItem, 
  Segment
} from 'semantic-ui-react'

import { NavLink } from 'react-router-dom';


import './HeaderOST.scss'

export default function HeaderOST() {

  return (
    <Segment inverted fluid>
      <Menu inverted borderless secondary>
        <MenuItem
          name='home'
          as={NavLink}
          to='/'
          
        />
        <MenuItem
          name='contact'
          as={NavLink}
          to='/contact'
        />
      </Menu>
    </Segment>
  )
 }


import React from 'react'
import IconMenuItem from './icon-menu-item'
import { Facebook, Instagram, Slack } from 'react-feather'

export default () => (
  <nav role="navigation" aria-label="social links">
    <ul>
      <IconMenuItem
        to={`https://www.facebook.com/DZChicagoAlumnae/`}
        label={`Facebook`}
        bgColor={`gray`}
      >
        <Facebook strokeWidth={1}/>
      </IconMenuItem>
      <IconMenuItem
        to={`https://www.instagram.com/dzchicagoalum/`}
        label={`Instagram`}
        bgColor={`gray`}
      >
        <Instagram strokeWidth={1}/>
      </IconMenuItem>
      <IconMenuItem
        to={`https://join.slack.com/t/dzchicago/shared_invite/zt-h4jupuy9-2zFtyQ8BdrhY7dYoJ9dUHw`}
        label={`Slack`}
        bgColor={`gray`}
      >
        <Slack strokeWidth={1}/>
      </IconMenuItem>
    </ul>
  </nav>
)

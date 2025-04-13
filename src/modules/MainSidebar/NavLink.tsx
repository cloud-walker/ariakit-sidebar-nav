import {NavLinkProps, NavLink as _NavLink} from 'react-router'
import * as A from '@ariakit/react'

import {cx} from '../../../styled-system/css'
import {navItemRecipe, NavItemVariant} from './navItemRecipe'

export function NavLink({
  mode,
  ...props
}: Omit<NavLinkProps, 'className'> & {
  className?: string
  mode: Extract<NavItemVariant['mode'], 'link' | 'sublink'>
}) {
  return (
    <li>
      <A.CompositeItem
        render={<_NavLink {...props} />}
        className={cx(props.className, navItemRecipe({mode}))}
      />
    </li>
  )
}

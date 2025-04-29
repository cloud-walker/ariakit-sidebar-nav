import {NavLinkProps, NavLink as _NavLink} from 'react-router'
import * as A from '@ariakit/react'

import {css, cx} from '../../../styled-system/css'
import {navItemRecipe} from './navItemRecipe'

export function NavLink({
  icon,
  label,
  isExpanded,
  ...props
}: Omit<NavLinkProps, 'className'> & {
  className?: string
  icon?: React.ReactElement
  label: string
  isExpanded: boolean
}) {
  return (
    <li>
      <A.CompositeItem
        render={<_NavLink {...props} />}
        className={cx(
          props.className,
          navItemRecipe({mode: 'link', isExpanded}),
        )}
      >
        {icon}
        <span
          className={css({
            srOnly: !isExpanded,
          })}
        >
          {' '}
          {label}
        </span>
      </A.CompositeItem>
    </li>
  )
}

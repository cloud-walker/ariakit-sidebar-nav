import {NavLinkProps, NavLink as _NavLink} from 'react-router'
import * as A from '@ariakit/react'

import {cx} from '../../../styled-system/css'
import {navItemRecipe} from './navItemRecipe'

export function NavDisclosureLink({
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
  const disclosure = A.useDisclosureContext()
  const popover = A.usePopoverContext()
  const isOpen = A.useStoreState(popover ?? disclosure, 'open')
  return (
    <li>
      <A.CompositeItem
        render={<_NavLink {...props} />}
        disabled={!isOpen}
        className={cx(
          props.className,
          navItemRecipe({mode: 'sublink', isExpanded}),
        )}
      >
        {icon}
        <span> {label}</span>
      </A.CompositeItem>
    </li>
  )
}

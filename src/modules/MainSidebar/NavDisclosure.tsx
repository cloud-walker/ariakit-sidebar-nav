import * as A from '@ariakit/react'
import {FiChevronDown} from 'react-icons/fi'

import {css, cx} from '../../../styled-system/css'
import {navItemRecipe} from './navItemRecipe'
import {box} from '../../../styled-system/jsx'

export function NavDisclosure({
  icon,
  label,
  ...props
}: React.ComponentPropsWithRef<typeof A.Disclosure> & {
  icon: React.ReactElement
  label: string
}) {
  return (
    <box.li css={{display: 'flex', flexDirection: 'column', gap: '1'}}>
      <A.DisclosureProvider>
        <A.Disclosure
          {...props}
          render={<A.CompositeItem />}
          className={cx('group', props.className, navItemRecipe())}
        >
          {icon}
          {label}
          <FiChevronDown
            className={css({
              marginInlineStart: 'auto',
              _groupExpanded: {
                transform: 'rotate(180deg)',
              },
            })}
          />
        </A.Disclosure>
        <A.DisclosureContent
          render={
            <box.ul
              css={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1',
              }}
            />
          }
          unmountOnHide
        >
          {props.children}
        </A.DisclosureContent>
      </A.DisclosureProvider>
    </box.li>
  )
}

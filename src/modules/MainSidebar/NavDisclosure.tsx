import * as A from '@ariakit/react'
import {FiChevronDown} from 'react-icons/fi'

import {css, cx} from '../../../styled-system/css'
import {box} from '../../../styled-system/jsx'
import {navItemRecipe} from './navItemRecipe'

export function NavDisclosure({
  icon,
  label,
  ...props
}: React.ComponentPropsWithRef<typeof A.Disclosure> & {
  icon: React.ReactElement
  label: string
}) {
  return (
    <box.li
      css={{display: 'flex', flexDirection: 'column', gap: '1'}}
      className="group"
    >
      <A.DisclosureProvider>
        <A.Disclosure
          {...props}
          render={<A.CompositeItem />}
          className={cx(
            'group',
            props.className,
            navItemRecipe({mode: 'disclosure'}),
          )}
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

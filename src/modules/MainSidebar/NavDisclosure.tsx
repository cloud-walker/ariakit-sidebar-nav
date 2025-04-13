import * as A from '@ariakit/react'
import {FiChevronDown} from 'react-icons/fi'

import {css, cx} from '../../../styled-system/css'
import {box} from '../../../styled-system/jsx'
import {navItemRecipe} from './navItemRecipe'

export function NavDisclosure({
  icon,
  label,
  isExpanded,
  ...props
}: React.ComponentPropsWithRef<'button'> & {
  icon: React.ReactElement
  label: string
  isExpanded: boolean
}) {
  if (!isExpanded) {
    return (
      <li className="group">
        <A.PopoverProvider placement="right-start">
          <A.PopoverDisclosure
            {...props}
            render={<A.CompositeItem />}
            aria-label={label}
            className={cx(
              props.className,
              navItemRecipe({mode: 'disclosure', isExpanded}),
            )}
          >
            {icon}
          </A.PopoverDisclosure>
          <A.Popover
            gutter={8}
            className={css({
              backgroundColor: 'slate.800',
              shadow: 'lg',
              rounded: 'lg',
              padding: '4',
            })}
            focusable={false}
            render={<ul />}
          >
            <A.PopoverHeading
              className={css({
                color: 'gray.400',
              })}
            >
              {label}
            </A.PopoverHeading>
            {props.children}
          </A.Popover>
        </A.PopoverProvider>
      </li>
    )
  }

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
            navItemRecipe({mode: 'disclosure', isExpanded}),
          )}
        >
          {icon}
          <span>{label}</span>
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
        >
          {props.children}
        </A.DisclosureContent>
      </A.DisclosureProvider>
    </box.li>
  )
}

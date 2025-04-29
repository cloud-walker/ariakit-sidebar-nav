import {FiSidebar, FiZap} from 'react-icons/fi'
import {useState} from 'react'

import {NavLink} from './NavLink'
import {NavList} from './NavList'
import {NavDisclosure} from './NavDisclosure'
import {box} from '../../../styled-system/jsx'
import {css} from '../../../styled-system/css'
import {NavDisclosureLink} from './NavDisclosureLink'

export function MainSidebar() {
  const [isExpanded, setIsExpanded] = useState(true)
  return (
    <box.aside
      css={{
        backgroundColor: 'slate.900',
        padding: '4',
        rounded: 'lg',
        display: 'flex',
        flexDirection: 'column',
        gap: '6',
        width: isExpanded ? 'sm' : undefined,
      }}
    >
      <box.header css={{display: 'flex', alignItems: 'center', gap: '2'}}>
        <box.h1
          css={{
            srOnly: !isExpanded,
          }}
        >
          My sidebar
        </box.h1>
        <box.button
          type="button"
          onClick={() => {
            setIsExpanded(!isExpanded)
          }}
          css={{
            marginInlineStart: 'auto',
            cursor: 'pointer',
            height: '8',
            width: '8',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            rounded: 'sm',
            _hover: {
              backgroundColor: 'slate.800',
            },
          }}
        >
          <FiSidebar />
        </box.button>
      </box.header>
      <nav>
        <NavList
          className={css({
            alignItems: isExpanded ? undefined : 'center',
          })}
        >
          <NavLink
            to="banana"
            icon={<FiZap />}
            label="Banana"
            isExpanded={isExpanded}
          />
          <NavLink
            to="orange"
            icon={<FiZap />}
            label="Orange"
            isExpanded={isExpanded}
          />

          <NavDisclosure
            icon={<FiZap />}
            label="Berries"
            isExpanded={isExpanded}
          >
            <NavDisclosureLink
              to="blueberry"
              label="Blueberry"
              isExpanded={isExpanded}
            />
            <NavDisclosureLink
              to="raspberry"
              label="Raspberry"
              isExpanded={isExpanded}
            />
            <NavDisclosureLink
              to="strawberry"
              label="Strawberry"
              isExpanded={isExpanded}
            />
          </NavDisclosure>
          <NavLink
            to="apple"
            label="Apple"
            icon={<FiZap />}
            isExpanded={isExpanded}
          />
        </NavList>
      </nav>
    </box.aside>
  )
}

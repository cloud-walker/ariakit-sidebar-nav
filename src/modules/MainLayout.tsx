import {box} from '../../styled-system/jsx'
import {Outlet} from 'react-router'
import {NavLink} from './MainSidebar/NavLink'
import {NavList} from './MainSidebar/NavList'
import {NavDisclosure} from './MainSidebar/NavDisclosure'
import {FiZap} from 'react-icons/fi'

export function MainLayout() {
  return (
    <box.div
      css={{
        height: 'full',
        display: 'grid',
        gridTemplateColumns: '1fr 4fr',
        gap: '6',
        padding: '6',
      }}
    >
      <box.aside
        css={{
          backgroundColor: 'slate.900',
          padding: '4',
          rounded: 'lg',
          display: 'flex',
          flexDirection: 'column',
          gap: '6',
        }}
      >
        <h1>My sidebar</h1>
        <nav>
          <NavList>
            <NavLink to="banana" mode="link">
              <FiZap />
              Banana
            </NavLink>
            <NavLink to="orange" mode="link">
              <FiZap /> Orange
            </NavLink>
            <NavDisclosure icon={<FiZap />} label="Berries">
              <NavLink to="blueberry" mode="sublink">
                Blueberry
              </NavLink>
              <NavLink to="raspberry" mode="sublink">
                Raspberry
              </NavLink>
              <NavLink to="strawberry" mode="sublink">
                Strawberry
              </NavLink>
            </NavDisclosure>
            <NavLink to="apple" mode="link">
              <FiZap /> Apple
            </NavLink>
          </NavList>
        </nav>
      </box.aside>
      <main>
        <Outlet />
      </main>
    </box.div>
  )
}

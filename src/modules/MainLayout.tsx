import {box} from '../../styled-system/jsx'
import {Outlet} from 'react-router'

import {MainSidebar} from './MainSidebar/MainSidebar'

export function MainLayout() {
  return (
    <box.div
      css={{
        height: 'full',
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gap: '6',
        padding: '6',
      }}
    >
      <MainSidebar />
      <main>
        <Outlet />
      </main>
    </box.div>
  )
}

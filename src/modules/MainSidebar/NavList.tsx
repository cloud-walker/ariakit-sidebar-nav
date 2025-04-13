import * as A from '@ariakit/react'

import {css, cx} from '../../../styled-system/css'

export function NavList(props: React.ComponentPropsWithRef<'ul'>) {
  return (
    <A.CompositeProvider>
      <A.Composite
        render={<ul {...props} />}
        className={cx(
          props.className,
          css({
            display: 'flex',
            flexDirection: 'column',
            gap: '1',
          }),
        )}
      />
    </A.CompositeProvider>
  )
}

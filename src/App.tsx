import * as A from '@ariakit/react'

export function App() {
  return (
    <div className="main-layout">
      <aside className="main-sidebar">
        <h1>My sidebar</h1>
        <nav>
          <A.CompositeProvider>
            <A.Composite render={<ul />}>
              <li>
                <A.CompositeItem render={<a href="#" />} className="nav-item">
                  Banana
                </A.CompositeItem>
              </li>
              <li>
                <A.CompositeItem render={<a href="#" />} className="nav-item">
                  Orange
                </A.CompositeItem>
              </li>
              <li>
                <A.DisclosureProvider>
                  <A.Disclosure
                    render={<A.CompositeItem />}
                    className="nav-disclosure"
                  >
                    Berries
                  </A.Disclosure>
                  <A.DisclosureContent render={<ul />} unmountOnHide>
                    <li>
                      <A.CompositeItem
                        render={<a href="#" />}
                        className="nav-subitem"
                      >
                        Blueberry
                      </A.CompositeItem>
                    </li>
                    <li>
                      <A.CompositeItem
                        render={<a href="#" />}
                        className="nav-subitem"
                      >
                        Raspberry
                      </A.CompositeItem>
                    </li>
                    <li>
                      <A.CompositeItem
                        render={<a href="#" />}
                        className="nav-subitem"
                      >
                        Strawberry
                      </A.CompositeItem>
                    </li>
                  </A.DisclosureContent>
                </A.DisclosureProvider>
              </li>
              <li>
                <A.CompositeItem render={<a href="#" />} className="nav-item">
                  Apple
                </A.CompositeItem>
              </li>
            </A.Composite>
          </A.CompositeProvider>
        </nav>
      </aside>
      <main>
        <h1>My main</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos enim ea
        qui delectus quibusdam iure fugiat voluptatem cum excepturi
        necessitatibus blanditiis ab aliquid inventore, impedit numquam
        explicabo quam accusantium fugit.
      </main>
    </div>
  )
}

export function App() {
  return (
    <div className="main-layout">
      <aside className="main-sidebar">
        <h1>My sidebar</h1>
        <nav>
          <ul>
            <li>
              <a href="#">Banana</a>
            </li>
            <li>
              <a href="#">Orange</a>
            </li>
            <li>
              <button type="button">Berries</button>
              <ul>
                <li>
                  <a href="#">Blueberry</a>
                </li>
                <li>
                  <a href="#">Raspberry</a>
                </li>
                <li>
                  <a href="#">Strawberry</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Apple</a>
            </li>
          </ul>
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

import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider, useParams} from 'react-router'
import * as R from 'remeda'

import './main.css'
import {MainLayout} from './modules/MainLayout'
import {raise} from './modules/raise'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider
      router={createBrowserRouter([
        {
          path: '/',
          element: <MainLayout />,
          children: [
            {
              index: true,
              element: <h1>Home</h1>,
            },
            {
              path: ':fruit',
              Component: function FruitRoute() {
                const params = useParams()
                return (
                  <h1>
                    {R.capitalize(params.fruit ?? raise('Fruit param missing'))}
                  </h1>
                )
              },
            },
            {
              path: '*',
              element: <h1>404</h1>,
            },
          ],
        },
      ])}
    />
  </StrictMode>,
)

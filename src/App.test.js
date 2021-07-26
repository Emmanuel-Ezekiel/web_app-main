/* eslint-env jest */

// import { render, screen } from '@testing-library/react'
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import App from './App'

describe('App component', () => {
  let container = null

  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container)
    container.remove()
    container = null
  })

  it('renders the component', () => {
    let component = null
    act(() => {
      component = render(<App />, container)
    })
    expect(component).toBeTruthy()
  })
})

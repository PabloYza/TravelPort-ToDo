import React from 'react'
import TodoList from '../components/TodoList/TodoList'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('<TodoList />', () => {
  let wrapper

  const defaultProps = {
    addTodo: jest.fn(),
    removeTodo: jest.fn(),
    completeTodo: jest.fn(),
  }

  beforeEach(() => {
    wrapper = mount(<TodoList {...defaultProps} />)
  })

  // cant really test much else in this component
  it('renders', () => {
    expect(wrapper).not.toBeNull()
  })
})
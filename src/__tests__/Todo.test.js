import React from 'react'
import Todo from '../components/Todo/Todo'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()})

describe('<Todo />', () => {
  let wrapper

  const defaultProps = {
    removeTodo: jest.fn(),
    todos: ['I need to buy food', 'I must clean']
  }

  beforeEach(() => {
    wrapper = mount(<Todo {...defaultProps} />)
  })


  it('should remove a todo', () => {
    const todos = wrapper.find('#x-icon').at(1)
    todos.simulate('click')
    expect(defaultProps.removeTodo).toBeCalled()
  })
})
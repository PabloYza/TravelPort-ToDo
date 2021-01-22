import React from 'react'
import Todo from '../components/Todo/Todo'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()})

describe('<Todo />', () => {
  let wrapper

  const defaultProps = {
    completeTodo: jest.fn(),
    removeTodo: jest.fn(),
    todos: ['I need to buy food', 'I must clean']
  }

  beforeEach(() => {
    wrapper = mount(<Todo {...defaultProps} />)
  })

  it('should mark a todo as completed', () => {
    console.log(wrapper.debug())
    const todos = wrapper.find('#todos').at(1)
    todos.simulate('click')
    expect(defaultProps.completeTodo).toBeCalled()
    expect(wrapper.find('#toggleClass').at(1).props().className).toBe('todo-row')
  })

  it('should remove a todo', () => {
    const todos = wrapper.find('#x-icon').at(1)
    todos.simulate('click')
    expect(defaultProps.removeTodo).toBeCalled()
  })
})
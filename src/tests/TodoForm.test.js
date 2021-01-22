import React from 'react'
import TodoForm from '../components/TodoForm/TodoForm'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })


describe('<TodoForm />', () => {
  let wrapper
  const defaultProps = {
    handleSubmit: jest.fn(),
    addTodo: jest.fn()
  }

  beforeEach(() => {
    wrapper = mount(<TodoForm {...defaultProps} />)
  })

  it('has an input field with empty initial value', () => {
    console.log(wrapper.debug())
    const input = wrapper.find('.todo-input')
    expect(input.props().value).toStrictEqual([])
  })

  describe('it could be populated with a value', () => {
    const todoValue = 'I need to clean my room'
    beforeEach(() => {
      let input = wrapper.find('.todo-input')
      input.simulate('change', {
        target: { name: 'text', value: todoValue }
      })
    })

    it('changes input value to {todoValue}', () => {
      const inputValue = wrapper.find('.todo-input')
      expect(inputValue.props().value).toBe(todoValue)
    })
  })
  
  describe('when the form is submitted', () => {
    beforeEach(() => {
      const form = wrapper.find('.todo-form')
      form.simulate('submit', {
        preventDefault: () => {}
      })
    })

    it('clears the input field', () => {
      const input = wrapper.find('.todo-input')
      expect(input.props().value).toBe('')
    })
  })
})
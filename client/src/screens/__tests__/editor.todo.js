import React from 'react'
import ReactDOM from 'react-dom'
import Editor from '../editor.todo'

test('calls onSubmit with the username and password when submitted', () => {
  // Arrange
  const container = document.createElement('div')
  // create a fake user, post, history, and api
  //
  // const fakeUser = {id: 'foobar'}
  // use ReactDOM.render() to render the editor to a div
  ReactDOM.render(<Editor />, container)
  // fill out form elements with your fake post
  const form = container.querySelector('form')
  const {title, content, tags} = form.elements
  title.value = 'girl'
  content.value = 'you'
  tags.value = 'crazy,   hert'
  // Act
  // submit form
  //
  const submit = new window.Event('submit')
  form.dispatchEvent(submit)
  // wait for promise to settle
  //
  // Assert
  // ensure the create function was called with the right data
})

// TODO later...
test('snapshot', () => {})

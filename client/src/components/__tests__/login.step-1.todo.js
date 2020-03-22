import React from 'react'
import ReactDOM from 'react-dom'
import Login from '../login'

// Basic unit test
test('calls onSubmit with the username and password when submitted', () => {
  // Arrange
  // create a fake object to hold the form field values (username and password)
  // const fakeUser = { username: 'chuck norris', password: 'something'}
  // create a jest.fn() for your submit handler
  const handleSubmit = jest.fn()
  // render the Login component to a div
  const div = document.createElement('div')
  ReactDOM.render(<Login onSubmit={handleSubmit} />, div);
  // TIP: const div = document.createElement('div')
  //
  // get the field nodes
  // TIP: const inputs = div.querySelectorAll('input')
  const inputs = div.querySelectorAll('input')
  // TIP: const form = div.querySelector('form')
  const form = div.querySelector('form')
  const { username, password } = form.elements;

  // fill in the field values
  username.value = 'chuck';
  password.value = 'norris'
  //
  // Act
  // submit the form:
  form.dispatchEvent(new window.Event('submit'))
  // TIP: formNode.dispatchEvent(new window.Event('submit'))
  //
  // Assert
  // ensure your submit handler was called properly
  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(handleSubmit).toHaveBeenCalledWith({
    username: username.value,
    password: password.value,
  })
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=login.step-1&em=yer.x.xiong@gmail.com
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////

import React, { Component } from 'react'

export default class Main extends Component {
    state = {
        personalInfo: {
            wills: '',
            firstName: '',
            lastName: '',
            mail: '',
            phoneNumber: '',
            driverLicense: [],
            citizenship:''
        },
        about:'',
    }
  render() {
    return (
      <div>mainPage</div>
    )
  }
}

import React from 'react';


class BasicForm extends React.Component {
  static displayName = "basic-input";
  state = { 
    names: [],
    emails: [],
    phoneNumbers: [],
    formErrors: { email: '', phoneNumber: '' },
    emailValid: false,
    phoneNumberValid: false
  };

  validateField = (fieldName, value) => {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let phoneNumberValid = this.state.phoneNumberValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'phoneNumber':
        phoneNumberValid = value.length >= 10;
        fieldValidationErrors.phoneNumber = phoneNumberValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      phoneNumberValid: phoneNumberValid
    });
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.validateField(name, value);
  }

  onFormSubmit = (evt) => {
    evt.preventDefault();
    const name = this.refs.name.value;
    const email = this.refs.email.value;
    const phoneNumber = this.refs.phoneNumber.value;
    if(this.state.emailValid && this.state.phoneNumberValid) {
      const names = [...this.state.names, name];
      const emails = [...this.state.emails, email];
      const phoneNumbers = [...this.state.phoneNumbers, phoneNumber];
      this.setState({ names, emails, phoneNumbers });
      this.refs.name.value = '';
      this.refs.email.value = '';
      this.refs.phoneNumber.value = '';
    }
  };

  render() {
    const headingStyle = {
      textAlign: 'left',
      marginLeft: '100px', // value i used to center the heading
     
    
    };


    const formContainerStyle = {
      maxWidth: '250px',
      margin: '0 auto',
      padding: '20px',
      textAlign: 'left',
      // This aligns the text of the form elements to the left
    };
  
    const inputStyle = {
      margin: '10px 0', 
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      width: '100%', 
      display: 'block',
      //code and styling for the input boxes
     
    };
  
    const buttonStyle = {
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
      backgroundColor: '#007bff',
      color: 'white',
      fontSize: '16px',
      cursor: 'pointer',
      marginTop: '10px',
      width: 'auto', 
      marginLeft: '643px',
      // code for the button
    };
    
    return (
      <div>
        <h1 style={formContainerStyle}>Sign Up Sheet</h1>

        <form onSubmit={this.onFormSubmit}>
          <input
          style={inputStyle}
            placeholder='Name'
            ref='name'
          />
          <input
          style={inputStyle}
            placeholder='Email'
            ref='email'
            name='email'
            onChange={this.handleUserInput}
          />
          <input
          style={inputStyle}
            placeholder='Phone Number'
            ref='phoneNumber'
            name='phoneNumber'
            onChange={this.handleUserInput}
          />

          <input type='submit' 
          style={buttonStyle}
          value='Submit'
          />

        </form>

        <div>
          <h3>Names</h3>
          <ul>
            {this.state.names.map((name, i) => (
              <li key={i}>{name} - {this.state.emails[i]} - {this.state.phoneNumbers[i]}</li>
            ))}
          </ul>
        </div>

        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
      </div>
    );
  }
};

const FormErrors = ({formErrors}) =>
  <div className='formErrors'>
    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName].length > 0){
        return (
          <p key={i}>{fieldName} {formErrors[fieldName]}</p>
        )        
      } else {
        return '';
      }
    })}
  </div>

export default BasicForm;



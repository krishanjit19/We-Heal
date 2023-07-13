import React from 'react';
import './Book.scss';
import { useState } from 'react';

const Book = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [age, setAge] = useState('');
  const [selectedTest, setSelectedTest] = useState('price_1NP9zrSIqOqHlxHgmDgOS9K4');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleTestChange = (e) => {
    setSelectedTest(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    // Clear form inputs
    setName('');
    setEmail('');
    setMobile('');
    setAge('');

    checkout();
  };

  const checkout = async () => {
    await fetch('http://localhost:4000/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({items: 
        name,
        email,
        mobile,
        age,
        selectedTest,
      })
    }).then((response)=>{
      return response.json();
    }).then((response)=>{
      if(response.url) {
        window.location.assign(response.url);
      }
    })
  };

  return (
    <div className="book">
      <div className="top">
        <h1 className="title">Book your test here!</h1>
      </div>
      <div className="bottom">
      <form className="book-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={handleNameChange}
              required
            />
            <input
              type="email"
              placeholder="Your Email Address"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <input
              type="text"
              placeholder="Your Mobile Number"
              value={mobile}
              onChange={handleMobileChange}
              required
            />
            <input
              type="text"
              placeholder="Enter your age"
              value={age}
              onChange={handleAgeChange}
              required
            />
            <div className="dropdown">
              <label for="my-dropdown">Select test:</label>
              <select name="dropdown" id='my-dropdown' onChange={handleTestChange} value={selectedTest}>
                <option value="price_1NP9zrSIqOqHlxHgmDgOS9K4" >CBC test</option>
                <option value="price_1NPA4QSIqOqHlxHgcLJsPyHF" >CMP test</option>
                <option value="price_1NPA61SIqOqHlxHgdPxkO8cs" >Lipid profile test</option>
              </select>
            </div>
            <div className="dropdown">
              <label for="my-dropdown1">Select gender:</label>
              <select name="dropdown" id='my-dropdown1'>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="dropdown">
              <label for="my-dropdown2">Select service:</label>
              <select name="dropdown" id='my-dropdown2'>
                <option value="Home delivery">Home delivery</option>
                <option value="Self">Self</option>
              </select>
            </div>
            <button type="submit" className='btn' onClick={checkout}>Book test</button>
          </form>
      </div>
    </div>
  )
}

export default Book
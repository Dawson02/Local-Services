import Header from "../components/Header";
import React, { useState } from "react";
import "./Account.css"; // Import the CSS file

function Account() {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);

  const handleUpdateAccount = () => {
    // Perform account update logic here
    setIsUpdating(true);
    // Simulate API request
    setTimeout(() => {
      setIsUpdating(false);
      setIsConfirmationVisible(false);
    }, 1500);
  };

  return (
    <div>
      <Header />
      <div className="header">
        <h1 className="header-title">Account</h1>
      </div>
      <div className="account-container">
        <h1 className="account-title">Edit Profile</h1>
        <div className="account-form">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            autoComplete="off"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            rows="4"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            autoComplete="off"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            required
          />
          <button
            className="account-update-button"
            onClick={() => setIsConfirmationVisible(true)}
            disabled={isUpdating}
          >
            {isUpdating ? "Updating..." : "Update Profile"}
          </button>
          {isConfirmationVisible && (
            <div className="confirmation">
              <p>Please confirm the changes:</p>
              <p>Full Name: {fullName}</p>
              <p>Address: {address}</p>
              <p>Phone Number: {phoneNumber}</p>
              <button
                className="confirm-button"
                onClick={handleUpdateAccount}
                disabled={isUpdating}
              >
                Confirm
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Account;


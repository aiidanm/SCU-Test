import React, { useState } from 'react';
import '../LoanFlow.css'

const LoanFlow = () => {
  const [heading2, setHeading2] = useState("Find the right loan for you");
  const [stage, setStage] = useState(0);
  const [userInfo, setUserInfo] = useState({
    isMember: null,
    membershipNo: '',
    amountToBorrow: '',
    months: '',
    name: '',
    contactDetails: '',
  });

  const nextStage = () => setStage(prevStage => prevStage + 1);
  const updateUserInfo = (key, value) => setUserInfo(prevUser => ({ ...prevUser, [key]: value }));

  if (stage === 0) {
    return (
      <div className="loanFlowPage">
        <h2>{heading2}</h2>
        <button className="scu-button" onClick={() => {
            setHeading2("Are you a member of the credit union?");
            nextStage();
        }}>Start</button>
      </div>
    );
  } else if (stage === 1) {
    return (
      <div className="loanFlowPage">
        <h2>Are you a member of the credit union?</h2>
        <button className="scu-button" onClick={() => {
            updateUserInfo('isMember', true);
            nextStage();
        }}>Yes</button>
        <button className="scu-button" onClick={() => {
            updateUserInfo('isMember', false);
            nextStage();
        }}>No</button>
      </div>
    );
  } else if (stage === 2) {
    return (
      <div className="loanFlowPage">
        <h2>What is your membership number?</h2>
        <input
          type="text"
          value={userInfo.membershipNo}
          onChange={(e) => updateUserInfo('membershipNo', e.target.value)}
          className="scu-input"
        />
        <button className="scu-button" onClick={nextStage}>Next</button>
      </div>
    );
  } else if (stage === 3) {
    return (
      <div className="loanFlowPage">
        <h2>How much do you want to apply for?</h2>
        <input
          type="number"
          value={userInfo.amountToBorrow}
          onChange={(e) => updateUserInfo('amountToBorrow', e.target.value)}
          className="scu-input"
        />
        <button className="scu-button" onClick={nextStage}>Next</button>
      </div>
    );
  } else if (stage === 4) {
    return (
      <div className="loanFlowPage">
        <h2>How long do you want to pay it back over?</h2>
        <input
          type="number"
          value={userInfo.months}
          onChange={(e) => updateUserInfo('months', e.target.value)}
          className="scu-input"
        />
        <button className="scu-button" onClick={nextStage}>Next</button>
      </div>
    );
  } else if (stage === 5) {
    return (
      <div className="loanFlowPage">
        <h2>Please enter your contact details</h2>
        <input
          type="text"
          placeholder="Name"
          value={userInfo.name}
          onChange={(e) => updateUserInfo('name', e.target.value)}
          className="scu-input"
        />
        <input
          type="text"
          placeholder="Contact Details"
          value={userInfo.contactDetails}
          onChange={(e) => updateUserInfo('contactDetails', e.target.value)}
          className="scu-input"
        />
        <button className="scu-button" onClick={nextStage}>Next</button>
      </div>
    );
  } else if (stage === 6) {
    return (
      <div className="loanFlowPage">
        <h2>Summary</h2>
        <p>Member: {userInfo.isMember ? 'Yes' : 'No'}</p>
        <p>Membership Number: {userInfo.membershipNo}</p>
        <p>Amount to Borrow: {userInfo.amountToBorrow}</p>
        <p>Months to Pay Back: {userInfo.months}</p>
        <p>Name: {userInfo.name}</p>
        <p>Contact Details: {userInfo.contactDetails}</p>
        <button className="scu-button" onClick={() => alert("Submitted!")}>Submit</button>
      </div>
    );
  }

  return null;
};

export default LoanFlow;

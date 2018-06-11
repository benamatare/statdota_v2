import React from 'react';
import '../css/landing_page.css';

const LandingPage = () => {
  return(
    <div className="landing-ctn">

      <div className="search-ctn">
<h2> DIV WRAPPER - CONTAINS WELCOME SEARCH COMPONENET</h2>
        <h1> Train like a Champion </h1>
        <p> To get started, enter your in-game name below </p>
<h2> CALL ACTUAL SEARCH COMPONENT HERE, IT IS ONLY LE SEARCH BAR BUT HAS CUSTOM CSS APPLIED </h2>
      </div>

      <div className="live-tracker-ctn">
        <h2> What does this do?</h2>
        <h2>total h2layer count:</h2>
        <h2>total matches found</h2>
      </div>

      <div className="step-ctn">
        <h2>card 1</h2>
        <h2>card 1</h2>
        <h2>card 1</h2>
      </div>


      <h2 style={{paddingBottom: '50px'}}> maybe some fun stuff? </h2>
    </div>
  )
};

export default LandingPage;

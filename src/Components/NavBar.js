import '../App.css';
import React from 'react';


function NavBar() {
  const [cssClass, setCssClass] = React.useState('nav-link');
  const [cssClassDeposit, setCssClassDeposit] = React.useState('nav-link');
  const [cssClassWithdraw, setCssClassWithdraw] = React.useState('nav-link');
  const [cssClassAllData, setCssClassAllData] = React.useState('nav-link');

  function resetNavLinkClasses() {
    setCssClass('nav-link');
    setCssClassDeposit('nav-link');
    setCssClassWithdraw('nav-link');
    setCssClassAllData('nav-link');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#"> Bank of Zod </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className={cssClass}
              href="#/CreateAccount/"
              onClick={() => { resetNavLinkClasses(); setCssClass('nav-link active'); }}
              title="Create a new bank account"
            >
              Create Account
            </a>
          </li>
          <li className="nav-item">
            <a
              className={cssClassDeposit}
              href="#/Deposit/"
              onClick={() => { resetNavLinkClasses(); setCssClassDeposit('nav-link active'); }}
              title="Make a deposit into your account"
            >
              Deposit
            </a>
          </li>
          <li className="nav-item">
            <a
              className={cssClassWithdraw}
              href="#/Withdraw/"
              onClick={() => { resetNavLinkClasses(); setCssClassWithdraw('nav-link active'); }}
              title="Withdraw money from your account"
            >
              Withdraw
            </a>
          </li>
          <li className="nav-item">
            <a
              className={cssClassAllData}
              href="#/AllData/"
              onClick={() => { resetNavLinkClasses(); setCssClassAllData('nav-link active'); }}
              title="View all bank data"
            >
              AllData
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

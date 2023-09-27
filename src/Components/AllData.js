import '../App.css';
import React from 'react';
import { UserContext } from './Context';

function AllData() {
  const ctx = React.useContext(UserContext);
  const users = ctx.users;

  const usersRows = users.map((element, index) => (
    <tr key={index}>
      <td>{element.name}</td>
      <td>{element.email}</td>
      <td>{element.password}</td>
      <td>{element.balance}</td>
    </tr>
  ));

  const tableHeaderStyle = {
    backgroundColor: '#4B4A4A',
  };

  const tableBodyStyle = {
    backgroundColor: '#6F7374',
  };

  return (
    <>
      <h5>AllData</h5>
      <table className="table table-bordered table-striped">
        <thead style={tableHeaderStyle}>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody style={tableBodyStyle}>
          {usersRows}
        </tbody>
      </table>
    </>
  );
}

export default AllData;

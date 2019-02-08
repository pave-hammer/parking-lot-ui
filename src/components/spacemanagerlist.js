import React from 'react';
import SpaceManagerItem from './spacemanageritem'

const SpaceManagerList = (props) => {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <form>
            <div className="input-field ">
              <input id="search" type="search" required />
              <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
              <i className="material-icons" onClick={props.closeSearch}>close</i>
            </div>
          </form>
        </div>
      </nav>
      <div className="col s8 manager-table-wrapper">
        <h5>Vehicles Currently Parked in your lot</h5>
        <table className="highlight centered ">
          <thead className="manager-table-data">
            <tr>
              <th>License Plate</th>
              {/* <th>Name</th> */}
              <th>Time Remaining</th>
            </tr>
          </thead>
          {props.customers.map((row, idx) => {
            return <SpaceManagerItem key={idx} row={row} />
          })}
        </table>
      </div>
    </>
  )
}

export default SpaceManagerList
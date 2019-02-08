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
        <h5 className="lot-header">Vehicles Currently Parked in your parking lot</h5>
        <div className="lot-background">
          <table className="highlight centered ">
            <thead className="manager-table-data">
              <tr className="table-row">
                <th>License Plate</th>
                <th>Time Remaining</th>
              </tr>
            </thead>
            {props.customers.map((row, idx) => {
              return <SpaceManagerItem key={idx} row={row} />
            })}
          </table>
        </div>
      </div>
    </>
  )
}

export default SpaceManagerList
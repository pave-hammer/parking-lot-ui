import React from 'react';

const SpaceManagerItem = (props) => {
  return (
    <tbody>
      <tr className="card-panel z-depth-3">
        <td>{props.row.license_plate}</td>
        <td>{props.row.hours} hours</td>
        {/* <td>{props.row.time} hh:mm</td> */}
      </tr>
    </tbody>
  )
}

export default SpaceManagerItem
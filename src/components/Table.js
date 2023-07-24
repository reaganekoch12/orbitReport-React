import React from 'react';

function Table ({ sat }) {
  return (
    <table>
      <thead>
        
        <tr>
        
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
          
        </tr>
      </thead>
      <tbody>
        {sat.map((data) => (
          <tr key={data.id}>
            //setting key equal to ID 
            <td>{data.name}</td>
            //using data to get the satelite info. 
            <td>{data.type}</td>
            <td>{data.launchDate}</td>
            <td>{data.status ? 'Active' : 'Inactive'}</td>
            //corresponds to Status tag (active or nonactive)
          </tr>
        ))}
      </tbody>
    </table>
  );
};
// Define PropTypes to specify the expected type of the sat prop
Table.propTypes = {
  sat: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      launchDate: PropTypes.string.isRequired,
      status: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
export default Table;

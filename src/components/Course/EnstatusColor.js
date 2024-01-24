import React from 'react'

const EnrollmentStatus = ({ status }) => {
    let backgroundColor;
  
    switch (status) {
      case 'online':
        backgroundColor = 'green';
        break;
      case 'inProgress':
        backgroundColor = 'orange';
        break;
      case 'closed':
        backgroundColor = 'red';
        break;
      default:
        backgroundColor = 'gray'; // Default color for unknown status
        break;
    }
  
    return (
      <span style={{backgroundColor,padding:'5px',borderRadius:'10px'}}>{status}</span>
    );
  };

const EnrollmentIcons = ({ status,type }) => {
    let backgroundColor;
  
    switch (status) {
      case 'online':
        backgroundColor = 'green';
        break;
      case 'inProgress':
        backgroundColor = 'orange';
        break;
      case 'closed':
        backgroundColor = 'red';
        break;
      default:
        backgroundColor = 'gray'; // Default color for unknown status
        break;
    }
}
const EnstatusColor = ({status,type}) => {
    
  return (
    <>
        {
            type==='text'?'k':'icon'
        }
    </>
  )
}

export default EnstatusColor
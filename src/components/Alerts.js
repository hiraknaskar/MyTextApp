import React from 'react'

function Alerts(props) {
  return (
    <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{props.alert.type} </strong>{props.alert.msg}
</div>    
  )
}

export default Alerts

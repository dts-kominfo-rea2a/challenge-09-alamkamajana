// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = (props) => {
    return (
        <div className="card" style={{display:"flex", flexDirection:"column"}}>
        <img alt={props.data.name} src={props.data.photo}/>
        <div>
          <h3 className="-name">{props.data.name}</h3>
          <span className="phone">{props.data.phone}</span>
          <span className="email">{props.data.email}</span>
        </div>
        </div>
    )
}

export default Contact;
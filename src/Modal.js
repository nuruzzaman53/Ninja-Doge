import React from 'react'
//import {CopyToClipboard} from 'react-copy-to-clipboard'

const Modal = ({country}) => {

    return(  

      <div className='container'>

        <h1>{country.name}</h1>

        <p>{country.region}</p>

      </div>


    )
}

export default Modal
import React from 'react'

export default function InputText(props) {
  return (
    <>
         <input
            type={props.type}
            placeholder={props.placeholder}
            className={props.formclass}
            name={props.name}
            />
    </>
  )
}

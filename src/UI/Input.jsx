import React from 'react'

const Input = ({label, input, onChange, value}) => {
  return (
    <div>
        <label>{label}</label>
        <input onChange={onChange}  value={value} {...input} />
    </div>
  )
}

export default Input
import React, { useRef } from 'react'
import Error from './Error'

export const Field = (props) => {
  const { value, type, label, onChange, error, name, placeholder } = props
  const inputRef = useRef(null)
  const handleClick = () => {
    inputRef.current.focus()
  }

  return type === 'input' ? (
    <div onClick={handleClick} className={'form__field'}>
      <label className="form__label">{label}</label>
      <input
        ref={inputRef}
        placeholder={placeholder}
        className="form__input"
        value={value}
        type={type}
        name={name}
        onChange={onChange}
      />
      {error && error.length > 0 ? <Error message={error} /> : null}
    </div>
  ) : (
    <div onClick={handleClick} className={'form__field'}>
      <label className="form__label">{label}</label>
      <textarea
        rows={1}
        ref={inputRef}
        name={name}
        onChange={onChange}
        className={'form__textarea'}
        value={value}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Field

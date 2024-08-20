import {InputStyle} from "../../assets/styles/UnitStyle";

const Input = (props) => {
  const { placeholder, className } = props
  return (

    <InputStyle className={`${className ? className : ''}`}>
      <input
        type="text"
        placeholder={placeholder}
      />
    </InputStyle>
  )
}

export default Input
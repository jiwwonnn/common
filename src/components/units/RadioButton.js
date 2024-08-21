import {RadioButtonStyle} from "../../assets/styles/UnitStyle";

/*
check : check 아이콘 boolean
 */

const RadioButton = (props) => {
  const { className="", type, radio, onChange,check, ...other} = props;
  return (
    <RadioButtonStyle
      className={`radio_wrap ${type === 'reverse' ? 'reverse' : ''} ${className ? className : ''} ${check ? 'check' : ''}`}>
      <input type="radio" id={radio.id} onChange={(e) => onChange(e)} {...other} />
      <label htmlFor={radio.id}>&nbsp;</label>
      <label htmlFor={radio.id}>{radio.value}</label>
    </RadioButtonStyle>
  )
}

export default RadioButton

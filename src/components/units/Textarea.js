import {TextareaStyle} from "../../assets/styles/UnitStyle";

/*
count : ex ) 0/100 , 0/200 / boolean
disabled
readOnly
placeholder
*/
const Textarea = (props) => {
  const { count, className , disabled, readOnly , placeholder } = props

  return (
    <TextareaStyle className={`${className ? className : ''}`}>
      <div className='textarea_border'>
        <textarea
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
        />
      </div>

      {
        count && <span className='count'>1/100</span>
      }
    </TextareaStyle>
  )
}

export default Textarea
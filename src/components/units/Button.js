import {ButtonStyle} from "../../assets/styles/UnitStyle";

/*
theme: color값
variant: default || linear || fill, rounded
size : sm || md || lg | full
disabled
*/
const Button = (props) => {
  const { theme = 'black', variant, className, children, size, ...others} = props
  return (
    <ButtonStyle
      className={`button ${variant ? variant : ''} ${className ? className : ''} ${size ? size: ''}`}
      theme={theme}
      {...others}
    >
      {children}
    </ButtonStyle>
  )
}

export default Button
import styled from 'styled-components'

export const DefaultButtonStyle = styled.button`
  
  //이건 공통 css 로 빼야됨
  background: inherit;
  border:none;
  box-shadow:none;
  border-radius:0;
  padding:0;
  overflow:visible;
  cursor:pointer;
  // end
  
  min-width:80px;
  min-height:40px;
  font-size: inherit;
  border-radius: 4px;
  border: 1px solid black;
`

export const ButtonStyle = styled(DefaultButtonStyle)`
  &.linear {
    background: white;
    border: 1px solid ${props => props.theme};
    color: ${props => props.theme}
  }
  &.fill {
    background: ${props => props.theme ? props.theme : 'black'};
    color: #fff;
    border: 1px solid ${props => props.theme ? props.theme : 'black'};
  }
  &.rounded {
    border-radius: 45px;
  }
  &.sm {
    width: 110px;
    height: 40px;
  }
  &.md {
    width: 120px;
    height: 40px;
  }
  &.lg {
    width: 150px;
    height: 40px;
  }
  &.full {
    width: 100%;
    height: 100%;
  }
  &:disabled {
    cursor:not-allowed;
    border: 1px solid #d7d7d7;
    background: #e4e4e4;
    color:#b2b2b2;
  }
`
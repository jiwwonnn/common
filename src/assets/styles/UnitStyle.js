import styled from 'styled-components'

export const DefaultButtonStyle = styled.button`
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

export const TextareaStyle = styled.div`
  .textarea_border {
    border: 1px solid #d7d7d7;
    border-radius: 4px;
    padding: 16px 8px 16px 16px;
    &:has(textarea:focus) {
      border: 1px solid orange;
    }
    &:has(textarea:read-only) {
      background:#f8f8f8;
      pointer-events: none;
    }
    &:has(textarea:disabled) {
      pointer-events: none;
      background:#f8f8f8;
    }
    &:hover {
      border: 1px solid orange;
    }
  }
  textarea {
    font-family:inherit;
    border: 1px solid transparent;
    width: 100%;
    height: 100px;
    background:transparent;
    resize: none;
    color:#000;
    padding-right: 5px;
    font-family: inherit;


    &::placeholder {
      color: #999;
    }

    &:focus {
      outline: none;
    }

    
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #2f3542;
      border-radius: 6px;
    }
    &::-webkit-scrollbar-track {
      background-color: grey;
      border-radius: 6px;
    }
    
  }
  
  .count {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 4px;  
    color: #CCCCCC;
  }
`

export const InputStyle = styled.div`
  input {
    position:relative;
    padding: 12px 16px;
    width: 100%;
    max-width:160px;
    height: 50px;
    border: 1px solid #d7d7d7;
    border-radius: 4px;
    font-family: inherit;
    color: black;
    background: #fff;
    &:hover {
      border: 1px solid orange;
    }
    &:active , &:focus{
      outline: none;
      border: 1px solid orange;
    }
    
    &::placeholder {
      color: grey;
    }
    
    &:disabled {
      pointer-events: none;
      background: #f4f4f4;
      color:#bbb;
      &::placeholder {
        color: #bbb;
      }
    }
    &:read-only:not(:disabled) {
      pointer-events: none;
      color:#666;
      &::placeholder {
        color: #666;
      }
    }
  }
  .error {
    display: block;
    margin-top: 4px;
    color: red;
  }
`

export const RadioButtonStyle = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    margin-right: 15px;
    grid-gap: 6px;
    cursor: pointer;
    label {
      cursor: pointer;
    }

    &.reverse {
      flex-direction: row-reverse;
    }

    input[type='radio'] {
      display: none;
      &:checked {
        &+label {
          border-color:blue;
          &:after {
            content: "";
            display: block;
            width: 85%;
            height: 85%;
            position: absolute;
            top: 50%;
            left: 50%;
            z-index: 1;
            transform: translate(-50%, -50%);
            background: blue;
            border-radius: 100%;
          }
        }
      }
      &+label {
        position: relative;
        border: 1px solid grey;
        width: 20px;
        height: 20px;
        border-radius: 100%;
        padding: 3px;
        &+label {
          font: inherit;
          flex:1;
        }
      }
    }
  
  &.check {
    input[type='radio'] {
      position: absolute;

      &:checked + label {
        background-color: orange;
        border-color: orange;

        &:after {
          position: absolute;
          content: '';
          top: 46%;
          left: 24%;
          display: table;
          width: 26%;
          height: 50%;
          border: 2px solid white;
          border-top: 0;
          border-left: 0;
          transform: rotate(45deg) scale(0.7) translate(-65%, -65%);
          transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46), opacity 0.1s;
          background: transparent;
          border-radius: unset;
        }
      }
    }

    &+label {
      display: inline-block;
      min-width: 24px;
      width: 24px;
      height: 24px;
      background-color: white;
      border: 1px solid #d7d7d7;
      border-radius: 50%;
      transition: 0.3s ease-out;
      position: relative;
    }
  }
`
import {useState} from "react";
import "./assets/styles/reset.css"
import Button from "./components/units/Button";
import Textarea from "./components/units/Textarea";
import Input from "./components/units/Input";
import RadioButton from "./components/units/RadioButton";

const App = () => {

  // radiobutton example
  const [radioList, setRadioList] = useState({
    selected: 'radio01',
    radioList01: [
      { id: 'radio01', value: "test01"},
      { id: 'radio02', value: "test02"}
    ]
  })
  const handleRadio = (e) => {
    setRadioList({
      ...radioList,
      selected: e.target.id
    })
  }


  return (
    <div style={{padding: '20px'}}>
      radio
      checkbox
      select
      textarea
      no data (no result)
      popup
      badge
      pagination
      tooltip
      iconbutton

      table
      <div>
        <Button theme={'orange'}>버튼</Button><br/>
        <Button variant={'default'} theme={'red'}>버튼</Button><br/>
        <Button variant={'linear'} theme={'blue'}>버튼</Button><br/>
        <Button variant={'fill'} theme={'purple'}>버튼</Button><br/>
        <Button variant={'rounded'}>버튼</Button><br/>

        <Button size={'sm'}>버튼</Button><br/>
        <Button size={'md'}>버튼</Button><br/>
        <Button size={'lg'}>버튼</Button><br/>
        <Button size={'full'}>버튼</Button><br/>
        <Button disabled>버튼</Button><br/>
        <br/><br/><br/><br/><br/><br/>
        <Textarea />
        <Textarea count={true} placeholder={"ewrew"}/>
        <Textarea count={true} readOnly placeholder={"abc"}/>
        <br/><br/><br/><br/><br/><br/>
        <Input placeholder={'안녕하세요.'} error={true}/>
        <Input placeholder={'안녕하세요.'} error={false}/>
        <Input disabled placeholder={'disabled.'} />
        <Input readOnly placeholder={'readonly'}/>
        <br/><br/><br/><br/><br/><br/>
        {radioList.radioList01.map((radio) => (
          <RadioButton
            key={radio.id}
            radio={radio}
            onChange={handleRadio}
            checked={radio.id === radioList.selected} />
        ))}
        {radioList.radioList01.map((radio) => (
          <RadioButton
            check={true}
            key={radio.id}
            radio={radio}
            onChange={handleRadio}
            checked={radio.id === radioList.selected} />
        ))}


      </div>
    </div>
  )
}

export default App
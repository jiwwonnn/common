import {useState} from "react";
import "./assets/styles/reset.css"
import Button from "./components/units/Button";
import Textarea from "./components/units/Textarea";
import Input from "./components/units/Input";
import RadioButton from "./components/units/RadioButton";
import Checkbox from "./components/units/Checkbox";

const App = () => {

  return (
    <div style={{padding: '20px'}}>
      radio
      checkbox
      select
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
        <RadioButton className={''} text={'라디오1'} name={'radio01'} defaultChecked={true}/>
        <RadioButton className={''} text={'라디오2'} name={'radio01'}/>

        <RadioButton className={'check'} text={'라디오1'} name={'radio02'} defaultChecked={true} />
        <RadioButton className={'check'} text={'라디오2'} name={'radio02'} />

        <RadioButton className={''} text={'라디오1'} name={'radio03'} defaultChecked={true} disabled={true}/>
        <RadioButton className={''} text={'라디오2'} name={'radio03'} disabled={true}/>

        <br/><br/><br/><br/><br/><br/>
        <Checkbox className={''} text={'기본'} defaultChecked={true}/>
        <Checkbox className={'ghost'} text={'ghost'} defaultChecked={true}/>
        <br/>
        <Checkbox className={'circle'} text={'circle'} defaultChecked={true}/>
        <Checkbox className={'circle ghost'} text={'circle ghost'} defaultChecked={true}/>
        <br/>
        <Checkbox className={''} text={'disabled'} defaultChecked={true} disabled={true}/>
        <Checkbox className={'circle'} text={'circle disabled'} defaultChecked={true} disabled={true}/>
      </div>
    </div>
  )
}

export default App
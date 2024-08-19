import "./assets/styles/reset.css"
import Button from "./components/units/Button";

const App = () => {
  return (
    <div>
        textarea
        input
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

      </div>
    </div>
  )
}

export default App
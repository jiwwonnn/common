import { useRef, useState } from "react";
import Button from '../components/units/Button';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const handleBtnOnClick = (type) => {
  console.log('클릭한 아이콘 타입 ==> ', type);
  //타입에 따른 로직 작성
  if (type === '') {
    // 처리 로직
  }
};

// select
const selectList = {
  active: 'select01',
  list: [
    { id: 'select01', value: '셀렉트01' },
    { id: 'select02', value: '셀렉트02' },
    { id: 'select03', value: '셀렉트03' }
  ]
};
const handleSelectCustom = (active) => {
  console.log('선택한 옵션', active);
};

// pagination
const handlePaging = async (param) => {
  console.log("handlePaging-->", param);
};




const ComponentConfig = [
  /******************************************************************************************************************************
   * button 버튼
   ******************************************************************************************************************************/
  {
    group: `button`,
    componentCode: (
      <SyntaxHighlighter language="javascript" style={dark}>
        {`
        {/** theme(color) + variant(linear, fill, round) **/}
        <Button variant={'linear'} theme={'purple'} handleBtnOnClick={handleBtnOnClick}>버튼</Button>
        `}
      </SyntaxHighlighter >
    ),
    render: (
      <>
        <Button variant={'linear'} theme={'purple'} handleBtnOnClick={handleBtnOnClick}>버튼</Button>
      </>
    )
  },
  {
    group: `button`,
    componentCode: (
      <SyntaxHighlighter language="javascript" style={dark}>
        {`
        {/** theme(color) + variant(linear, fill, round) **/}
        <Button variant={'linear'} theme={'blue'} handleBtnOnClick={handleBtnOnClick}>버튼</Button>
        `}
      </SyntaxHighlighter >
    ),
    render: (
      <>
        <Button variant={'linear'} theme={'blue'} handleBtnOnClick={handleBtnOnClick}>버튼</Button>
      </>
    )
  },
  {
    group: `button`,
    componentCode: (
      <SyntaxHighlighter language="javascript" style={dark}>
        {`
        {/** theme(color) + variant(linear, fill, round) **/}
        <Button variant={'fill'} theme={'purple'} handleBtnOnClick={handleBtnOnClick}>버튼</Button>
        `}
      </SyntaxHighlighter >
    ),
    render: (
      <>
        <Button variant={'fill'} theme={'purple'} handleBtnOnClick={handleBtnOnClick}>버튼</Button>
      </>
    )
  },
  {
    group: `button`,
    componentCode: (
      <SyntaxHighlighter language="javascript" style={dark}>
        {`
        {/** theme(color) + variant(linear, fill, round) **/}
        <Button variant={'rounded'} handleBtnOnClick={handleBtnOnClick}>버튼</Button>
        `}
      </SyntaxHighlighter >
    ),
    render: (
      <>
        <Button variant={'rounded'} handleBtnOnClick={handleBtnOnClick}>버튼</Button>
      </>
    )
  },
  {
    group: `button`,
    componentCode: (
      <SyntaxHighlighter language="javascript" style={dark}>
        {`
        {/** size (sm, md, lg, full) **/}
        <Button size={'sm'} handleBtnOnClick={handleBtnOnClick}>버튼</Button>
        `}
      </SyntaxHighlighter >
    ),
    render: (
      <>
        <Button size={'sm'} handleBtnOnClick={handleBtnOnClick}>버튼</Button>
      </>
    )
  },
  {
    group: `button`,
    componentCode: (
      <SyntaxHighlighter language="javascript" style={dark}>
        {`
        {/** size (sm, md, lg, full) **/}
        <Button size={'md'} handleBtnOnClick={handleBtnOnClick}>버튼</Button>
        `}
      </SyntaxHighlighter >
    ),
    render: (
      <>
        <Button size={'md'} handleBtnOnClick={handleBtnOnClick}>버튼</Button>
      </>
    )
  },
  {
    group: `button`,
    componentCode: (
      <SyntaxHighlighter language="javascript" style={dark}>
        {`
        {/** size (sm, md, lg, full) **/}
        <Button size={'lg'} handleBtnOnClick={handleBtnOnClick}>버튼</Button>
        `}
      </SyntaxHighlighter >
    ),
    render: (
      <>
        <Button size={'lg'} handleBtnOnClick={handleBtnOnClick}>버튼</Button>
      </>
    )
  },
  {
    group: `button`,
    componentCode: (
      <SyntaxHighlighter language="javascript" style={dark}>
        {`
        {/** size (sm, md, lg, full) **/}
        <Button size={'full'} handleBtnOnClick={handleBtnOnClick}>버튼</Button>
        `}
      </SyntaxHighlighter >
    ),
    render: (
      <>
        <Button size={'full'} handleBtnOnClick={handleBtnOnClick}>버튼</Button>
      </>
    )
  },
  {
    group: `button`,
    componentCode: (
      <SyntaxHighlighter language="javascript" style={dark}>
        {`
        {/** disabled **/}
        <Button disabled handleBtnOnClick={handleBtnOnClick}>버튼</Button>
        `}
      </SyntaxHighlighter >
    ),
    render: (
      <>
        <Button disabled handleBtnOnClick={handleBtnOnClick}>버튼</Button>
      </>
    )
  },

]

export { ComponentConfig }
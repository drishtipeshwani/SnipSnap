import React from 'react'
import './CodeTerminal.css'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface PropsType {
  code: string;
  language: string;
}

const CodeTerminal : React.FC<PropsType> = (props)  => {


  return (
    <>
    <div className="fakeScreen">
    <div className="fakeMenu">
    <div className="fakeButtons fakeClose"></div>
    <div className="fakeButtons fakeMinimize"></div>
    <div className="fakeButtons fakeZoom"></div>
  </div>
  <div className='snippet'>
    <SyntaxHighlighter language={props.language} style={a11yDark}>
      {props.code}
    </SyntaxHighlighter>
    </div>
  </div>
  </>
  )
}

export default CodeTerminal
import React, { useCallback, useState,useEffect,useRef } from 'react'
import Navbar from './components/Navbar'
import CodeMirror from "@uiw/react-codemirror";
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';
import Result from './components/Result';
import Split from 'split.js';
import "./index.css";
function App() {
  //* create three usestate 
  const [html_edit, setHtml_Edit] = useState('<h1>chombu</h1>');
  const [css_edit, setCss_Edit] = useState('');
  const [js_edit, setJs_Edit] = useState('');
  const horizontalContainerRef = useRef(null);
  const verticalContainerRef = useRef(null);
  //* Html onchange handler
  const onChangeHtml = useCallback((value) => {
    console.log(value);
    setHtml_Edit(value);
  }, [])

  //* Css onchange handler 
  const onChangeCss = useCallback((value) => {
    console.log(value);
    setCss_Edit(value)
  }, []);

  //* JavaScript onchange handler 
  const onChangeJavaScript = useCallback((value) => {
    console.log(value);
    setJs_Edit(value)
  }, []);

  //* Create Html Document
  const srcCode = `
  <html>
  <body>${html_edit}</body>
  <style>${css_edit}</style>
  <script>${js_edit}</script>
  </html>
  `


  // split function 
  let[lposition,setLposition]=useState("default")
  let handelposition=(val)=>{
      setLposition(val)
  }
  console.log(lposition);
  useEffect(() => {
    const horizontalElementsArray = Array.from(horizontalContainerRef.current.children);
    const horizontalSplitInstance = Split(horizontalElementsArray, {
      sizes: [33.33, 33.33, 33.33],
      minSize: [100, 100, 100],
      // maxSize: [33.33, 33.33, 33.33],
      gutterSize: 7,
      direction:"vertical",
      gutter: (index, direction) => {
        const gutter = document.createElement('div');
        gutter.className = `gutter gutter-${direction}`;

        gutter.addEventListener('mouseover', () => {
          gutter.style.backgroundColor = '#ccc';
          gutter.style.cursor = 'row-resize';
        });

        gutter.addEventListener('mouseout', () => {
          gutter.style.backgroundColor = '';
        });

        return gutter;
      },
    });

    const verticalElementsArray = [horizontalContainerRef.current, verticalContainerRef.current];
    const verticalSplitInstance = Split(verticalElementsArray, {
      sizes: [50, 50], // Adjust the initial sizes as needed
      direction: 'horizontal',
      gutterSize: 7,
      gutter: (index, direction) => {
        const gutter = document.createElement('div');
        // gutter.className = `gutter gutter-${direction}`;
          
        gutter.addEventListener('mouseover', () => {
          gutter.style.backgroundColor = '#ccc';
          gutter.style.cursor = 'col-resize';
        });

        gutter.addEventListener('mouseout', () => {
          gutter.style.backgroundColor = '';
        });

        return gutter;
      },
    });
 
    return () => {
      horizontalSplitInstance.destroy();
      verticalSplitInstance.destroy();
    };
  }, []);

  return (
    <div className='w-[100%] h-[100vh] p-2 bg-slate-300'>
      {/* Navbar  */}
      {/* <Navbar data={{handelposition}}/> */}
      <div  className='h-[100%] w-[100%] relative bg-[#eee] flex'>
      <div ref={horizontalContainerRef} className='w-[100%]'>
        <div  className=''>
          <div className=" w-[100%] bg-[white] rounded-md h-[100%] inner shadow-sm shadow-indigo-600">
            <h2 className="w-[100%] text-md ps-3 font-semibold mb-2  border-b-[1.5px] border-indigo-600 text-indigo-600">HTML</h2>
            <CodeMirror
              className="text-sm outline-none  "
              value={html_edit}
              height="100%"
              theme="light"
              extensions={[html(true)]}
              onChange={onChangeHtml}
            />
          </div>

        </div>
        <div >
          <div className="bg-[white] rounded-lg shadow h-[100%] inner">
            <h2 className="text-md ps-3 font-semibold mb-2  border-b-2 border-indigo-600 text-indigo-600">CSS</h2>
            <CodeMirror
             className="text-sm outline-none  "
              value={css_edit}
              height="100%"
              
              // theme="dark"
              extensions={[css(true)]}
              onChange={onChangeCss}
            />
          </div>
        </div>
        <div >
           <div className="bg-[white] rounded-lg shadow h-[100%] inner">
            <h2 className="text-md ps-3 font-semibold mb-2  border-b-2 border-indigo-600 text-indigo-600">JavaScript</h2>
            <CodeMirror
              className="text-sm outline-none  "
              value={js_edit}
              height="100%"
              width='100%'
              // theme="dark"
              extensions={[javascript(true)]}
              onChange={onChangeJavaScript}
            />
          </div>
        </div>
      </div>
      <div ref={verticalContainerRef} style={{width:"45%" ,height:"100%"}}>
        <div className='h-[100%]'>
          <Result
        srcCode={srcCode}
        />
         
        </div>
      </div>
    </div>


    </div>
  )
}

export default App
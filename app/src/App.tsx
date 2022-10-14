import React from 'react';
import './static/css/App.css';
import './static/css/Editor.css';

function OnInputChange(){
  let content : string = (document.getElementById("content") as HTMLTextAreaElement).value;
  let motives : string = (document.getElementById("motives") as HTMLTextAreaElement).value;
  Expand(content,motives);
  Save(content,motives);
}

function Expand(content:string, motives:string){
  let contentRows : number = (content.match(/\n/g)||[]).length;
  if (contentRows < 9) contentRows=9;
  (document.getElementById("content") as HTMLTextAreaElement).rows=contentRows+2;

  let motivesRows : number = (motives.match(/\n/g)||[]).length;
  if (motivesRows < 9) motivesRows=9;
  (document.getElementById("motives") as HTMLTextAreaElement).rows=motivesRows+2;
}

function Save(content:string, motives:string) {
  if (content != null) localStorage.setItem('content',content);
  if (motives != null) localStorage.setItem('motives',motives);
}

function Load(){
  let storage : Array<string> = ['','']
  if (localStorage.getItem('content') != null) storage[0]=localStorage.getItem('content')!;
  if (localStorage.getItem('motives') != null) storage[1]=localStorage.getItem('motives')!;
  return storage;
}

function App() {
  let storage : Array<string> = Load();
  return (
    <div className="App">
      <header className="App-header">
        <p>Edytor wierszy</p>
        <div className="Boxes">
        <div>
          <p>Edytor główny</p>
          <div className="Boxes">
            <div>
              <div>
                <button className="Sidebutton" type="button">{'>'}</button>
              </div>
              <div>
                <button className="Sidebutton Sidespacing" type="button">{'+'}</button>
              </div>
              <div>
                <button className="Sidebutton Sidespacing" type="button">{'-'}</button>
              </div>
              <div>
                <button className="Sidebutton Sidespacing" type="button">{'!'}</button>
              </div>
              <div>
                <button className="Sidebutton" type="button">{'?'}</button>
              </div>
            </div>
            <div>
              <textarea id="content" className="Textarea" onChange={OnInputChange} rows={10} cols={50} defaultValue={storage[0]}/>
            </div>
          </div>
        </div>
        <div>
          <p>Motywy</p>
          <textarea id="motives" className="Motives" onChange={OnInputChange} rows={10} cols={30} defaultValue={storage[1]}/>
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;

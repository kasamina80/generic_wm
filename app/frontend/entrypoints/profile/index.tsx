import React from 'react'
import ReactDOM from 'react-dom';
import '../../src/index.css'
import '../../src/App.css'
import Sidebar from '../../src/Sidebar.tsx'

type Props = {
  message?: string;
}

const element = document.getElementById('root');

const App = (props: Props) => {
  return (
    <>
      <Sidebar />
      <div className="App">
        <dl>
          <dt>名前:</dt>
          <dd>
            笠波湊帆(かさなみみなほ)<br />
            <span className="tooltip" data-tooltip="イントネーションは「日野森」「暁山」と同じで「青柳」「草薙」とは異なります。">(愛称: かさみな)</span>
          </dd>
          <dt>GitHub:</dt>
          <dd>@kasamina80</dd>
        </dl>
      </div>
    </>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <div>
      <App/>
    </div>,
    element
  );
});

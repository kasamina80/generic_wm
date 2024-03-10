import React from 'react'
import ReactDOM from 'react-dom';
import '../../src/index.css'
import '../../src/App.scss'
import Sidebar from '../../src/Sidebar.tsx'
// import { Tooltip } from 'react-bootstrap';

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
            <span data-bs-custom-class="acronym-tooltip" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-html="true" data-bs-title="イントネーションは「日野森」「暁山」と同じで<br>「青柳」「草薙」とは異なります。">(愛称: かさみな)</span>
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
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach(tooltipTriggerEl => {console.log("I saw a target!"); return new bootstrap.Tooltip(tooltipTriggerEl);});
});

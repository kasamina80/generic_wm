import React from 'react'
import ReactDOM from 'react-dom';
import '../../src/index.css'
import '../../src/App.scss'
import '../../src/Home.scss'
import Sidebar from '../../src/Sidebar.tsx'

type Props = {
  message?: string;
}

const element = document.getElementById('root');

const App = (props: Props) => {
  const message = element?.dataset.message;
  return (
    <>
      <Sidebar />
      <div className="App">
        <div className="top-links-wrapper">
          <div className="link-wrapper">
            <a href="/profile" data-linkto="profile">プロフィール</a>
          </div>
          <div className="link-wrapper">
            <a href="/histories" data-linkto="histories">経歴</a>
          </div>
          <div className="link-wrapper">
            <a href="/skills" data-linkto="skills">スキル</a>
          </div>
          <div className="link-wrapper">
            <a href="/archives" data-linkto="archives">成果物</a>
          </div>
        </div>
      </div>
    </>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  ReactDOM.render(
    <div>
      <App/>
    </div>,
    element
  );
});

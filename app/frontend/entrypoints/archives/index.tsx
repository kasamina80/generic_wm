import React from 'react'
import ReactDOM from 'react-dom';
import '../../src/index.css'
import '../../src/App.scss'
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
        Hello archives!
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

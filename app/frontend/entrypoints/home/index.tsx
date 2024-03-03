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
  const message = element?.dataset.message;
  return (
    <>
      <Sidebar />
      <div className="App">
        {message}
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

import React from 'react';
import Title from './Title';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="flex">
        <Title />
      </div>
      <ul>
        <li>
          <a href="/">トップ</a>
        </li>
        <li>
          <a href="/profile">プロフィール</a>
        </li>
        <li>
          <a href="/histories">経歴</a>
        </li>
        <li>
          <a href="/skills">スキル</a>
        </li>
        <li>
          <a href="/archives">成果物</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

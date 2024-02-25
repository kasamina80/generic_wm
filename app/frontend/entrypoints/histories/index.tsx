import React from 'react'
import ReactDOM from 'react-dom';
import '../../src/index.css'
import '../../src/App.css'
import '../../src/Histories.css' // なぜか読み込まれない
import Sidebar from '../../src/Sidebar.tsx'

type History = {
  id: number,
  start_on: Date,
  end_on?: Date,
  content: string,
  work_type: "it_engineer" | "idol"
};

type ItEngineerHistory = History & { work_type: "it_engineer" };
type IdolHistory = History & { work_type: "idol" };


const itEngineerHistoriesFilter = (histories: History[]): ItEngineerHistory[] => {
  return histories.filter((history): history is ItEngineerHistory => history.work_type === "it_engineer");
}

const idolHistoriesFilter = (histories: History[]): IdolHistory[] => {
  return histories.filter((history): history is IdolHistory => history.work_type === "idol");
}

const historyToText = (history: History): string => {
  const { start_on, end_on, content }= history;
  if (end_on !== undefined) {
    return `${start_on.toLocaleDateString()}～${end_on.toLocaleDateString()} ${content}`
  } else {
    return `${start_on.toLocaleDateString()}～ ${content}`
  }
}

type Props = {
  message?: string;
}

const element = document.getElementById('root');

const App = (props: Props) => {
  const historiesJson: string | undefined = element?.dataset.histories;
  const histories: History[] = JSON.parse(historiesJson!);
  const itEngineerHistories: ItEngineerHistory[] = itEngineerHistoriesFilter(histories);
  const idolHistories: IdolHistory[] = idolHistoriesFilter(histories);

  console.log(historiesJson);
  console.log(histories);
  console.log(itEngineerHistories);
  console.log(idolHistories);

  return (
    <>
      <Sidebar />
      <div className="App">
        <h2 className="history-type">IT ENGINEER</h2>
        <p className="history-type-description">ITエンジニアとしての経歴</p>
        {
          <ul className="history-list">
            {
              itEngineerHistories.map(history => 
                <li>{ historyToText(history) }</li>
              )
            }
          </ul>
        }
        <h2 className="history-type">IDOL</h2>
        <p className="history-type-description">平日は会社員、週末はアイドルとして活動しています。</p>
        {
          <ul className="history-list">
            {
              idolHistories.map(history => 
                <li>{ historyToText(history) }</li>
              )
            }
          </ul>
        }
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

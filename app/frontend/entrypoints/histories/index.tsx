import React from 'react'
import ReactDOM from 'react-dom';
import '../../src/index.css'
import '../../src/App.scss'
import '../../src/Histories.css'
import Sidebar from '../../src/Sidebar.tsx'

type History = {
  id: number,
  start_on: string,
  end_on: string | null,
  content: string,
  work_type: "it_engineer" | "idol",
  point: boolean
};

type ItEngineerHistory = History & { work_type: "it_engineer" };
type IdolHistory = History & { work_type: "idol" };


const itEngineerHistoriesFilter = (histories: History[]): ItEngineerHistory[] => {
  return histories.filter((history): history is ItEngineerHistory => history.work_type === "it_engineer");
}

const idolHistoriesFilter = (histories: History[]): IdolHistory[] => {
  return histories.filter((history): history is IdolHistory => history.work_type === "idol");
}

const historyToDateText = (history: History): string => {
  const { start_on, end_on, content } = history;
  // なぜかreplaceAllがVSCodeに認識されない
  const start_on_date = new Date(start_on.replaceAll("-", "/"));
  console.log(start_on, end_on, content, end_on !== undefined)
  if (end_on !== null) {
    const end_on_date = new Date(end_on.replaceAll("-", "/"));
    return `${start_on_date.toLocaleDateString()}～${end_on_date.toLocaleDateString()}`
  } else {
    if(history.point) {
      return `${start_on_date.toLocaleDateString()}～`
    } else {
      return `${start_on_date.toLocaleDateString()}`
    }
  }
}

const historyTable = (histories: History[]): React.JSX.Element => {
  return (
    <div className="history-table-wrapper">
      <table className="history-list">
        {
          histories.map(history => 
            <tr>
              <td>{ historyToDateText(history) }</td>
              <td>{ history.content }</td>
            </tr>
          )
        }
      </table>
    </div>
  );
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
          historyTable(itEngineerHistories)
        }
        <h2 className="history-type">IDOL</h2>
        <p className="kasamina italic">重なる想い、みんなとともに。<br />MORE MORE TYPE! のかさみなです!</p>
        <p className="history-type-description">平日は会社員、週末はアイドルとして活動しています。</p>
        {
          historyTable(idolHistories)
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

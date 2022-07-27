import "./LeftMenu.css";

type Props = {
  currentTab: string;
  setCurrentTab: Function;
  setHideRead: Function;
  unreadEmailsLength: number;
  hideRead: boolean;
  starredEmailsLength: number;
};

export default function LeftMenu({
  currentTab,
  setCurrentTab,
  setHideRead,
  hideRead,
  starredEmailsLength,
  unreadEmailsLength,
}: Props) {
  return (
    <nav className="left-menu">
      <ul className="inbox-list">
        <li
          className={`item ${currentTab === "inbox" ? "active" : ""}`}
          onClick={() => setCurrentTab("inbox")}
        >
          <span className="label">Inbox</span>
          <span className="count">{unreadEmailsLength}</span>
        </li>
        <li
          className={`item ${currentTab === "starred" ? "active" : ""}`}
          onClick={() => setCurrentTab("starred")}
        >
          <span className="label">Starred</span>
          <span className="count">{starredEmailsLength}</span>
        </li>

        <li className="item toggle">
          <label htmlFor="hide-read">Hide read</label>
          <input
            id="hide-read"
            type="checkbox"
            checked={hideRead}
            onChange={(e) => setHideRead(e.target.checked)}
          />
        </li>
      </ul>
    </nav>
  );
}

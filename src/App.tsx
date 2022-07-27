import { useState } from "react";

import initialEmails, { EmailType } from "./data/emails";

import "./App.css";
import Emails from "./components/Emails";
import SingleEmail from "./components/SingleEmail";
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";

const getReadEmails = (emails: EmailType[], searchInput: string) => {
  if (searchInput !== "") {
    return emails.filter(
      (email) =>
        !email.read &&
        email.title.toLowerCase().includes(searchInput.toLowerCase())
    );
  }
  return emails.filter((email) => !email.read);
};

const getStarredEmails = (emails: EmailType[], searchInput: string) => {
  if (searchInput !== "") {
    return emails.filter(
      (email) =>
        email.starred &&
        email.title.toLowerCase().includes(searchInput.toLowerCase())
    );
  }
  return emails.filter((email) => email.starred);
};
const getSearchedEmails = (emails: EmailType[], searchInput: string) => {
  return emails.filter((email) =>
    email.title.toLowerCase().includes(searchInput.toLowerCase())
  );
};
function App() {
  const [emails, setEmails] = useState(initialEmails);
  const [hideRead, setHideRead] = useState(false);
  const [currentTab, setCurrentTab] = useState("inbox");
  const [searchInput, setSearchInput] = useState("");
  const [currentEmail, setCurrentEmail] = useState(null);

  const unreadEmails = emails.filter((email) => !email.read);
  const starredEmails = emails.filter((email) => email.starred);

  const toggleStar = (targetEmail: EmailType) => {
    const updatedEmails = (emails: EmailType[]) =>
      emails.map((email) =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      );
    setEmails(updatedEmails);
  };

  const toggleRead = (targetEmail: EmailType) => {
    const updatedEmails = (emails: Array<EmailType>) =>
      emails.map((email) =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      );
    setEmails(updatedEmails);
  };

  function getFilteredEmails(): Array<EmailType> {
    let filteredEmails: EmailType[] = emails;

    if (hideRead) {
      filteredEmails = getReadEmails(filteredEmails, searchInput);
    }

    if (currentTab === "starred") {
      filteredEmails = getStarredEmails(filteredEmails, searchInput);
    }
    if (!hideRead && currentTab === "inbox") {
      filteredEmails = getSearchedEmails(filteredEmails, searchInput);
    }
    return filteredEmails;
  }

  return (
    <div className="app">
      <Header setSearchInput={setSearchInput} />
      <LeftMenu
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        hideRead={hideRead}
        setHideRead={setHideRead}
        unreadEmailsLength={unreadEmails.length}
        starredEmailsLength={starredEmails.length}
      />
      {currentEmail === null ? (
        <Emails
          getFilteredEmails={getFilteredEmails}
          toggleRead={toggleRead}
          toggleStar={toggleStar}
          setCurrentEmail={setCurrentEmail}
        />
      ) : (
        <SingleEmail email={currentEmail} setCurrentEmail={setCurrentEmail} />
      )}
    </div>
  );
}

export default App;

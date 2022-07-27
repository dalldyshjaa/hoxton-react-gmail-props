import { EmailType } from "../data/emails";
import Email from "../components/Email";
import "./Emails.css";

type Props = {
  getFilteredEmails: () => EmailType[];
  toggleRead: Function;
  toggleStar: Function;
  setCurrentEmail: Function;
};

export default function Emails({
  getFilteredEmails,
  toggleRead,
  toggleStar,
  setCurrentEmail,
}: Props) {
  return (
    <main className="emails">
      <ul>
        {getFilteredEmails().map((email: EmailType, index: number) => (
          <Email
            email={email}
            key={index}
            toggleRead={toggleRead}
            toggleStar={toggleStar}
            setCurrentEmail={setCurrentEmail}
          />
        ))}
      </ul>
    </main>
  );
}

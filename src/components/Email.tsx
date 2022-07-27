import { EmailType } from "../data/emails";
import "./Email.css";

type Props = {
  email: EmailType;
  key: number;
  toggleRead: Function;
  toggleStar: Function;
  setCurrentEmail: Function;
};

export default function Email({
  email,
  toggleRead,
  toggleStar,
  setCurrentEmail,
}: Props) {
  return (
    <li className={`email ${email.read ? "read" : "unread"}`}>
      <div className="select">
        <input
          className="select-checkbox"
          type="checkbox"
          checked={email.read}
          onChange={() => toggleRead(email)}
        />
      </div>
      <div className="star">
        <input
          className="star-checkbox"
          type="checkbox"
          checked={email.starred}
          onChange={() => toggleStar(email)}
        />
      </div>
      <div className="sender" onClick={() => setCurrentEmail(email)}>
        {email.sender}
      </div>
      <div className="title" onClick={() => setCurrentEmail(email)}>
        {email.title}
      </div>
    </li>
  );
}

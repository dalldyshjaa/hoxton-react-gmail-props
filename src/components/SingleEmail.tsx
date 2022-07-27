import { EmailType } from "../data/emails";
import "./SingleEmail.css";
type Props = {
  email: EmailType;
  setCurrentEmail: Function;
};

export default function SingleEmail({ email, setCurrentEmail }: Props) {
  return (
    <div>
      <button
        className="go-back"
        onClick={() => setCurrentEmail(null)}
      >{`< Go Back`}</button>
      <h1>{email.sender}</h1>
      <p>{email.title}</p>
    </div>
  );
}

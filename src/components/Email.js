import '../styles/app.css'
import '../styles/email.css'

export default function Email(props) {
  // render an email as a list item
  return (
    <li
      className={`email ${props.email.read ? 'read' : 'unread'}`}
    >
      <div className="select">
        <input
          className="select-checkbox"
          type="checkbox"
          checked={props.email.read}
          onChange={() => props.toggleRead(props.email)}
        />
      </div>
      <div className="star">
        <input
          className="star-checkbox"
          type="checkbox"
          checked={props.email.starred}
          onChange={() => props.toggleStar(props.email)}
        />
      </div>
      <div className="email-preview" onClick={() => {props.toggleEmailView(props.email)}}>
        <div className="sender">{props.email.sender}</div>
        <div className="title" >{props.email.title}</div>
      </div>
    </li>
  )
}
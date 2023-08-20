import '../styles/email.css'
import Email from './Email'

export default function Emails(props) {
  // render a list of emails
  return (
    <ul>
      {props.filteredEmails.map((email, index) => (
        <Email email={email} index={index} toggleRead={props.toggleRead} toggleStar={props.toggleStar} toggleEmailView={props.toggleEmailView} setCurrentEmailId={props.setCurrentEmailId} key={index} />
      ))}
    </ul>
  )
}
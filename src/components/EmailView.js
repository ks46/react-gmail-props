import EmailContent from './EmailContent'
import EmailToolBar from './EmailToolBar'

export default function EmailView(props) {
  return (
    <main className="email-view">
      <EmailToolBar toggleEmailView={props.toggleEmailView} />
      <EmailContent email={props.email} />
    </main>
  )
}
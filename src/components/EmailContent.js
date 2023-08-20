import '../styles/email_content.css'
import EmailBody from './EmailBody'
import EmailHeader from './EmailHeader'

export default function EmailContent(props) {
  return (
    <article className="email-content">
      <div className="title">
        <h1>{props.email.title}</h1>
      </div>

      <EmailHeader email={props.email} />
      <EmailBody email={props.email} />
      
      <section className="email-actions">
        <button>Reply</button>
        <button>Forward</button>
      </section>
    </article>
  )
}
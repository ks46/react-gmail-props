import '../styles/email_toolbar.css'
import backArrow from '../assets/icons/back-arrow.png'
import downloadButton from '../assets/icons/download-button.png'
import rubbishButton from '../assets/icons/rubbish-bin-delete-button.png'

export default function EmailToolBar(props) {
  return (
    <nav className="email-toolbar">
      <ul>
        <li>
          <img className="icon" src={backArrow} alt="reply button" />
        </li>
        <li>
          <img className="icon" src={downloadButton} alt="archive button" />
        </li>
        <li>
          <img className="icon" src={rubbishButton} alt="delete button" />
        </li>
        <li>
          <button onClick={() => {props.toggleEmailView(null)}}>
            Back to emails
          </button>
        </li>
      </ul>
      <div className="space"></div>
      <div>
        <p>1 of 25</p>
        <button>&lt;</button>
        <button>&gt;</button>
      </div>
    </nav>
  )
}
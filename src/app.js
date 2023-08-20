import { useState } from 'react'

import initialEmails from './data/emails'

import './styles/app.css'
import Emails from './components/Emails'
import EmailView from './components/EmailView'

const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  const [currentEmailId, setCurrentEmailId] = useState(null)
  // const [searchText, setSearchText] = useState('')

  const unreadEmails = emails.filter(email => !email.read)
  const starredEmails = emails.filter(email => email.starred)

  const toggleStar = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      )
    setEmails(updatedEmails)
  }

  const toggleRead = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      )
    setEmails(updatedEmails)
  }

  const toggleEmailView = targetEmail => {
    if (targetEmail === null) {
      setCurrentEmailId(null)
    } else {
      if (!targetEmail.read) {
        const updatedEmails = emails =>
          emails.map(email => 
            email.id === targetEmail.id ? {...email, read: true} : email
          )
        setEmails(updatedEmails)
      }
      setCurrentEmailId(targetEmail.id)
    }
  }

  const toggleCurrentTab = tab => {
    setCurrentTab(tab)
    if (currentEmailId)
      setCurrentEmailId(null)
  }

  const searchByTitle = event => {
    if (event.key === 'Enter') {
      event.preventDefault()
      const searchText = event.target.value
      const updatedEmails = emails.filter(email => email.title.toLowerCase().includes(searchText.toLowerCase()))
      setEmails(updatedEmails)
    }
  }

  let filteredEmails = emails

  if (hideRead) filteredEmails = getReadEmails(filteredEmails)

  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)

  return (
    <div className="app">
      <header className="header">
        <div className="left-menu">
          <svg className="menu-icon" focusable="false" viewBox="0 0 24 24">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>

          <img
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
            alt="gmail logo"
          />
        </div>

        <div className="search">
          <input
            className="search-bar"
            placeholder="Search mail"
            // onChange={event => setSearchText(event.target.value)}
            onKeyDown={searchByTitle}
          />
        </div>
      </header>
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className={`item ${currentTab === 'inbox' ? 'active' : ''}`}
            onClick={() => toggleCurrentTab('inbox')}
          >
            <span className="label">Inbox</span>
            <span className="count">{unreadEmails.length}</span>
          </li>
          <li
            className={`item ${currentTab === 'starred' ? 'active' : ''}`}
            onClick={() => toggleCurrentTab('starred')}
          >
            <span className="label">Starred</span>
            <span className="count">{starredEmails.length}</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={hideRead}
              onChange={e => setHideRead(e.target.checked)}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        {
          currentEmailId ?
            <EmailView
              email={emails.find(email => email.id === currentEmailId)}
              toggleEmailView={toggleEmailView}
            /> :
            <Emails
              filteredEmails={filteredEmails}
              toggleRead={toggleRead}
              toggleStar={toggleStar}
              toggleEmailView={toggleEmailView}
              setCurrentEmailId={setCurrentEmailId}
            />
        }
      </main>
    </div>
  )
}

export default App

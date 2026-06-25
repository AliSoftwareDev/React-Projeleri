import { useState } from 'react'
function App() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [access, setAccess] = useState("");
  const [issue, setIssue] = useState("");

return (
    <>
      <div className='container'>
        <header className="rezervation">
          <h1 className='reserve'>Software Hotel</h1>
        </header>

        <div className='content'>
          <h1 className='info'>Kişisel Bilgiler</h1>
          <input 
          id='name'
          className='info'
          placeholder='Ad'
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
          <input 
          id='surname'
          className='mation'
          placeholder='Soyad'
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          />
          <input
          id='phone'
          className='number'
          placeholder='Telefon Numarası'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          />
          <input 
          id='mail'
          className='adress'
          placeholder='E-posta'
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          />
          <input 
          id='access'
          type='date'
          className='entry'
          placeholder='Giriş Tarihi'
          value={access}
          onChange={(e) => setAccess(e.target.value)}
          />
          <input 
          id='issue'
          type='date'
          className='ascent'
          placeholder='Çıkış Tarihi'
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
          />
        </div>
        <div className="options">
          <h1 className='header-option'>Rezervasyon Türleri</h1>
          <input 
          type='radio'
          name="rezervation-type" 
          value="special" /> Kişiye Özel
          


        </div>
      </div>
    </>
  )
}

export default App

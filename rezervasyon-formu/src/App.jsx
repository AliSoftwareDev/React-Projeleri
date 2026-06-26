import { useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [access, setAccess] = useState("");
  const [issue, setIssue] = useState("");
  const [reservationType, setReservationType] = useState("");
  const [roomCount, setRoomCount] = useState(1);
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [extra, setExtra] = useState("");
  const [successMessage, setSuccessMesage] = useState("");
    const handleSubmit = () => {
      if(!name || !surname || !phone || !mail) {
        alert("Lütfen tüm alanları doldurunuz");
        return;
      }
      setSuccessMesage("Rezervasyonunuz başarıyla alındı");
      const formData = {
        name,
        surname,
        phone,
        mail,
        access,
        issue,
        reservationType,
        roomCount,
        adultCount,
        childCount,
        extra,
      };
    }

  return (
    <>
      <div className="container">
        <header className="rezervation">
          <h1 className="reserve">Software Hotel</h1>
        </header>

        <div className="content">
          <h1 className="info">Kişisel Bilgiler</h1>
          <input
            id="name"
            className="info"
            placeholder="Ad"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            id="surname"
            className="mation"
            placeholder="Soyad"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
          <input
            id="phone"
            className="number"
            placeholder="Telefon Numarası"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            id="mail"
            className="adress"
            placeholder="E-posta"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <input
            id="access"
            type="date"
            className="entry"
            placeholder="Giriş Tarihi"
            value={access}
            onChange={(e) => setAccess(e.target.value)}
          />
          <input
            id="issue"
            type="date"
            className="ascent"
            placeholder="Çıkış Tarihi"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
          />
        </div>
        <div className="options">
          <h1 className="header-option">Rezervasyon Türleri</h1>
          <input
            type="radio"
            name="rezervation-type"
            value="special"
            onChange={(e) => setReservationType(e.target.value)}
          />{" "}
          Kişiye Özel
          <input
            type="radio"
            name="rezervation-type"
            value="travel"
            onChange={(e) => setReservationType(e.target.value)}
          />{" "}
          Seyahat Acentesi
          <input
            type="radio"
            name="rezervation-type"
            value="group"
            onChange={(e) => setReservationType(e.target.value)}
          />{" "}
          Grup Rezervasyonu
        </div>

        <div className="counts">
          <label>Oda Sayısı : <input type="number" id="room-count" min='1' max="50" value={roomCount}  
          onChange={(e) => setRoomCount(e.target.value)}/> </label>
          <label>Yetişkin Sayısı: <input type="number" id="adult-count" min="1" value={adultCount} 
          onChange={(e) => setAdultCount(e.target.value)} /> </label>
          <label>Çocuk Sayısı: <input type="number" id="child-count" min='1' value={childCount} 
          onChange={(e) => setChildCount(e.target.value)} /> </label>
        </div>

        <div className="extra">
          <textarea placeholder="Eklemek İstedikleriniz" value={extra} onChange={(e) => setExtra(e.target.value)} />
        </div>

        <button id="submit-btn" className="info" onClick={handleSubmit}>Gönder</button>
        {successMessage && <p>{successMessage}</p>}
      </div>
    </>
  );
}

export default App;

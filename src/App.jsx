import { BUSINESS, CAR, PACKAGES, EXTRAS, OFFERS } from "./data.js";
import { whatsappLink, telLink, pretty } from "./whatsapp.js";
import front from "./assets/car-front.jpg";
import side from "./assets/car-side.jpg";

function Header() {
  return (
    <header className="header">
      <div className="logo">RIDE<span>24</span> <small>Rentals</small></div>
      <a className="btn call sm" href={telLink(BUSINESS.primary)}>📞 Call</a>
    </header>
  );
}

function Hero() {
  return (
    <div className="hero">
      <div>
        <h1>Your Ride, <em>Your Time.</em></h1>
        <p className="lead">
          A brand-new {CAR.year} {CAR.name.replace(" S", "")} with a professional driver.
          CNG included. Hourly and full-day packages across {BUSINESS.city}.
        </p>
        <div className="row">
          <a className="btn wa" href={whatsappLink(BUSINESS.primary)} target="_blank" rel="noopener noreferrer">Book on WhatsApp</a>
          <a className="btn call" href={telLink(BUSINESS.primary)}>Call Now</a>
        </div>
        <div className="chips">
          <span className="chip">🚗 Brand-new car</span>
          <span className="chip">👨‍✈️ Driver included</span>
          <span className="chip">⛽ CNG included</span>
          <span className="chip">❄️ AC</span>
        </div>
      </div>
      <img src={front} alt={`White ${CAR.name} front view`} />
    </div>
  );
}

function PackageCard({ pkg }) {
  const number = BUSINESS[pkg.phone];
  return (
    <div className={`pk ${pkg.popular ? "best" : ""}`}>
      <h3>{pkg.label}{pkg.popular && " · Popular"}</h3>
      <div className="pr">₹{pkg.price.toLocaleString("en-IN")}</div>
      <ul>
        <li>{pkg.km} km included</li>
        <li>Driver included</li>
        <li>CNG included</li>
      </ul>
      <a className="btn wa block" href={whatsappLink(number, pkg.id)} target="_blank" rel="noopener noreferrer">Book {pkg.label}</a>
      <a className="btn call block" href={telLink(number)}>📞 Call {pretty(number)}</a>
    </div>
  );
}

function Packages() {
  return (
    <section>
      <h2>Rental Packages</h2>
      <p className="sub">Driver and CNG included in every package.</p>
      <div className="grid">
        {PACKAGES.map((p) => <PackageCard key={p.id} pkg={p} />)}
      </div>
      <div className="note">
        <b>Extra charges:</b> Extra km ₹{EXTRAS.perKm} · Extra hour ₹{EXTRAS.perHour} · Toll and parking at actuals ·
        Overnight driver allowance agreed separately. Booking is confirmed only after the owner replies on WhatsApp.
      </div>
    </section>
  );
}

function Offers() {
  return (
    <section>
      <div className="offer">
        <h3>🎉 New Car Launch Offer</h3>
        <ul>{OFFERS.map((o) => <li key={o}>{o}</li>)}</ul>
      </div>
    </section>
  );
}

function Car() {
  const specs = [
    ["Model", CAR.name], ["Fuel", CAR.fuel], ["Seats", CAR.seats],
    ["Comfort", CAR.ac], ["Year", `${CAR.year}, brand new`], ["Service area", BUSINESS.city],
  ];
  return (
    <section>
      <h2>Our Car</h2>
      <p className="sub">{CAR.name} · {CAR.year} · {CAR.fuel}</p>
      <div className="car">
        <img src={side} alt={`${CAR.name} side view`} />
        <div className="spec">
          {specs.map(([k, v]) => <div key={k}><b>{k}</b>{v}</div>)}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    "Choose your rental duration.",
    "Tap WhatsApp or call us.",
    "We confirm availability and pickup details.",
    "Pay in person, as agreed with the owner.",
  ];
  return (
    <section>
      <h2>How It Works</h2>
      <p className="sub">No login. No online payment.</p>
      <ol className="st">{steps.map((s) => <li key={s}>{s}</li>)}</ol>
    </section>
  );
}

function Contact() {
  const people = [["Primary", BUSINESS.primary], ["Alternate", BUSINESS.alternate]];
  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <p className="sub">{BUSINESS.city} · WhatsApp or call, whichever you prefer.</p>
      <div className="ct">
        {people.map(([label, num]) => (
          <div className="cc" key={label}>
            <h3>{label}</h3>
            <div className="n">{pretty(num)}</div>
            <div className="row">
              <a className="btn wa" href={whatsappLink(num)} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a className="btn call" href={telLink(num)}>Call</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <div className="w">
        <Header />
        <Hero />
        <Packages />
        <Offers />
        <Car />
        <HowItWorks />
        <Contact />
        <footer>© {new Date().getFullYear()} {BUSINESS.name} · {BUSINESS.city}</footer>
      </div>
      <a className="btn wa fab" href={whatsappLink(BUSINESS.primary)} target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
    </>
  );
}

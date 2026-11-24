"use client";

import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState("home");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [success, setSuccess] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setSuccess("Thank you! Your message has been received.");
    setForm({ name: "", email: "", phone: "", message: "" });
  }

  const products = [
    {
      icon: "📊",
      name: "Business Management",
      description: "Manage your business activities in one place.",
      price: "Rs. 2,500",
    },
    {
      icon: "🛒",
      name: "Online Shopping",
      description: "Explore products and shop easily.",
      price: "Rs. 1,500",
    },
    {
      icon: "💻",
      name: "Digital Services",
      description: "Grow your business with digital solutions.",
      price: "Rs. 3,000",
    },
  ];

  return (
    <div>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: Arial, sans-serif;
          background: #f8fafc;
          color: #172033;
        }

        button {
          cursor: pointer;
        }

        .navbar {
          background: white;
          padding: 22px 8%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 10;
          box-shadow: 0 2px 10px #0001;
        }

        .logo {
          font-size: 27px;
          font-weight: bold;
          color: #172033;
        }

        .logo span {
          color: #6366f1;
        }

        nav {
          display: flex;
          gap: 25px;
        }

        nav button {
          border: none;
          background: none;
          font-size: 16px;
          font-weight: bold;
          color: #334155;
        }

        nav button:hover {
          color: #6366f1;
        }

        .hero {
          min-height: 560px;
          padding: 80px 8%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          background: linear-gradient(120deg, #eef2ff, #f8fafc);
        }

        .hero-content {
          max-width: 560px;
        }

        .tag {
          color: #6366f1;
          font-weight: bold;
          letter-spacing: 2px;
        }

        .hero h1 {
          font-size: 55px;
          margin: 20px 0;
          line-height: 1.2;
        }

        .hero h1 span,
        .about-content h2 span {
          color: #6366f1;
        }

        .hero p,
        .about-content p {
          color: #64748b;
          line-height: 1.8;
          font-size: 17px;
        }

        .buttons {
          display: flex;
          gap: 15px;
          margin-top: 30px;
        }

        .btn {
          padding: 14px 25px;
          border: none;
          border-radius: 8px;
          background: #6366f1;
          color: white;
          font-weight: bold;
          font-size: 15px;
        }

        .btn:hover {
          background: #4338ca;
        }

        .outline {
          padding: 13px 24px;
          border: 1px solid #6366f1;
          border-radius: 8px;
          background: white;
          color: #6366f1;
          font-weight: bold;
        }

        .hero-image {
          width: 380px;
          height: 320px;
          border-radius: 25px;
          background: linear-gradient(135deg, #6366f1, #312e81);
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          text-align: center;
        }

        .hero-image span {
          font-size: 70px;
        }

        .hero-image h2 {
          margin: 15px;
          font-size: 30px;
        }

        .services {
          padding: 80px 8%;
        }

        .heading {
          text-align: center;
          margin-bottom: 45px;
        }

        .heading h2 {
          font-size: 35px;
          margin-bottom: 12px;
        }

        .heading p {
          color: #64748b;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .card {
          background: white;
          padding: 30px;
          border-radius: 15px;
          border: 1px solid #e2e8f0;
          transition: 0.3s;
        }

        .card:hover {
          transform: translateY(-7px);
          box-shadow: 0 10px 25px #0001;
        }

        .card span {
          font-size: 42px;
        }

        .card h3 {
          margin: 18px 0 12px;
        }

        .card p {
          color: #64748b;
          line-height: 1.7;
        }

        .card h4 {
          color: #6366f1;
          margin: 15px 0;
        }

        .small-btn {
          border: none;
          background: #eef2ff;
          color: #4f46e5;
          padding: 10px 18px;
          border-radius: 7px;
          font-weight: bold;
        }

        .cta {
          background: #312e81;
          color: white;
          text-align: center;
          padding: 65px 20px;
        }

        .cta h2 {
          margin-bottom: 15px;
        }

        .cta p {
          margin-bottom: 25px;
        }

        .banner {
          background: linear-gradient(120deg, #312e81, #6366f1);
          color: white;
          text-align: center;
          padding: 75px 20px;
        }

        .banner h1 {
          font-size: 45px;
          margin-bottom: 12px;
        }

        .about-section {
          padding: 90px 8%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
        }

        .about-content {
          max-width: 600px;
        }

        .about-content h2 {
          font-size: 40px;
          margin: 20px 0;
        }

        .about-content p {
          margin-bottom: 20px;
        }

        .about-box {
          width: 350px;
          height: 280px;
          background: linear-gradient(135deg, #6366f1, #312e81);
          border-radius: 20px;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .about-box span {
          font-size: 65px;
        }

        .about-box h2 {
          margin: 15px;
        }

        .contact-section {
          padding: 80px 8%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
        }

        .contact-info h2,
        .contact-form h2 {
          font-size: 30px;
          margin-bottom: 20px;
        }

        .contact-info > p {
          color: #64748b;
          line-height: 1.8;
          margin-bottom: 30px;
        }

        .info-item {
          display: flex;
          gap: 15px;
          margin-bottom: 25px;
          align-items: center;
        }

        .info-item span {
          font-size: 30px;
        }

        .info-item p {
          color: #64748b;
          margin-top: 5px;
        }

        .contact-form {
          background: white;
          padding: 35px;
          border-radius: 15px;
          box-shadow: 0 5px 25px #0001;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 14px;
          margin-bottom: 18px;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          font-size: 15px;
          font-family: inherit;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          outline: 1px solid #6366f1;
        }

        .success {
          color: green;
          margin-top: 18px;
          font-weight: bold;
        }

        footer {
          background: #172033;
          color: white;
          text-align: center;
          padding: 40px 20px;
        }

        footer p {
          color: #cbd5e1;
          margin-top: 12px;
        }

        @media (max-width: 768px) {
          .navbar {
            padding: 20px 5%;
            flex-wrap: wrap;
            gap: 15px;
          }

          nav {
            gap: 15px;
          }

          nav button {
            font-size: 14px;
          }

          .hero {
            flex-direction: column;
            padding: 60px 6%;
          }

          .hero h1 {
            font-size: 40px;
          }

          .hero-image {
            width: 100%;
          }

          .grid {
            grid-template-columns: 1fr;
          }

          .about-section {
            flex-direction: column;
            padding: 60px 6%;
          }

          .about-box {
            width: 100%;
          }

          .contact-section {
            grid-template-columns: 1fr;
            padding: 60px 6%;
          }
        }
      `}</style>

      {/* NAVBAR */}

      <header className="navbar">
        <div className="logo">
          Karobar<span>App.</span>
        </div>

        <nav>
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("about")}>About</button>
          <button onClick={() => setPage("contact")}>Contact</button>
        </nav>
      </header>

      {/* HOME PAGE */}

      {page === "home" && (
        <main>
          <section className="hero">
            <div className="hero-content">
              <span className="tag">WELCOME TO KAROBARAPP</span>

              <h1>
                Grow Your Business
                <span> With Us.</span>
              </h1>

              <p>
                Your business deserves better tools. Discover smart solutions to
                manage, improve and grow your business.
              </p>

              <div className="buttons">
                <button className="btn" onClick={() => setPage("contact")}>
                  Get Started
                </button>

                <button className="outline" onClick={() => setPage("about")}>
                  Learn More
                </button>
              </div>
            </div>

            <div className="hero-image">
              <div>
                <span>🚀</span>
                <h2>Grow Faster</h2>
                <p>Smart Business Solutions</p>
                <h3>KarobarApp</h3>
              </div>
            </div>
          </section>

          <section className="services">
            <div className="heading">
              <h2>Our Services</h2>
              <p>Everything you need to grow your business.</p>
            </div>

            <div className="grid">
              {products.map((item) => (
                <div className="card" key={item.name}>
                  <span>{item.icon}</span>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <h4>{item.price}</h4>

                  <button
                    className="small-btn"
                    onClick={() => setPage("contact")}
                  >
                    Get Details
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section className="cta">
            <h2>Ready to Start Your Business Journey?</h2>
            <p>Contact us today and explore our services.</p>

            <button className="btn" onClick={() => setPage("contact")}>
              Contact Us
            </button>
          </section>
        </main>
      )}

      {/* ABOUT PAGE */}

      {page === "about" && (
        <main>
          <section className="banner">
            <h1>About Us</h1>
            <p>Learn more about KarobarApp</p>
          </section>

          <section className="about-section">
            <div className="about-content">
              <span className="tag">WHO WE ARE</span>

              <h2>
                We Help Businesses
                <span> Grow Better.</span>
              </h2>

              <p>
                Welcome to KarobarApp. We provide simple and smart business
                solutions to help individuals and companies manage their
                business activities.
              </p>

              <p>
                Our goal is to make business management easier through modern
                technology, excellent services and innovative ideas.
              </p>

              <button className="btn" onClick={() => setPage("contact")}>
                Contact Our Team
              </button>
            </div>

            <div className="about-box">
              <span>💼</span>
              <h2>KarobarApp</h2>
              <p>Your Business. Our Support.</p>
            </div>
          </section>

          <section className="services">
            <div className="heading">
              <h2>Why Choose Us?</h2>
              <p>We focus on making your business successful.</p>
            </div>

            <div className="grid">
              <div className="card">
                <span>⭐</span>
                <h3>Quality Services</h3>
                <p>We provide reliable business services.</p>
              </div>

              <div className="card">
                <span>🤝</span>
                <h3>Customer Support</h3>
                <p>We value our customers and their needs.</p>
              </div>

              <div className="card">
                <span>🚀</span>
                <h3>Business Growth</h3>
                <p>We help businesses move forward.</p>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* CONTACT PAGE */}

      {page === "contact" && (
        <main>
          <section className="banner">
            <h1>Contact Us</h1>
            <p>We would love to hear from you.</p>
          </section>

          <section className="contact-section">
            <div className="contact-info">
              <h2>Get In Touch</h2>

              <p>Have a question about our services? Send us a message.</p>

              <div className="info-item">
                <span>📧</span>
                <div>
                  <h3>Email</h3>
                  <p>info@karobarapp.com</p>
                </div>
              </div>

              <div className="info-item">
                <span>📞</span>
                <div>
                  <h3>Phone</h3>
                  <p>+92 300 1234567</p>
                </div>
              </div>

              <div className="info-item">
                <span>📍</span>
                <div>
                  <h3>Location</h3>
                  <p>Pakistan</p>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Send Message</h2>

              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
              />

              <textarea
                placeholder="Your Message"
                rows="5"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />

              <button type="submit" className="btn">
                Send Message
              </button>

              {success && <p className="success">{success}</p>}
            </form>
          </section>
        </main>
      )}

      {/* FOOTER */}

      <footer>
        <h2>KarobarApp</h2>
        <p>Grow your business with confidence.</p>
        <p>© 2026 KarobarApp. All rights reserved.</p>
      </footer>
    </div>
  );
}

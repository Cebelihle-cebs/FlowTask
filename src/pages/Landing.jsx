import { useNavigate } from "react-router-dom";
import photo3 from "../assets/photo3.jpg";

function Landing() {
  const navigate = useNavigate();

  return (
    <div
      className="landing"
      style={{
        backgroundImage: `url(${photo3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        fontWeight: "700",
      }}
    >
      {/* HEADER */}
      <header className="landing-header">
        <nav className="auth-links">
          <button
            className="btn-ghost"
            onClick={() => navigate("/login")}
          >
            Sign In
          </button>

          <button
            className="btn-primary"
            onClick={() => navigate("/register")}
          >
            Sign Up
          </button>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="glass-box hero-card">
          <h1 style={{ fontWeight: "800" }}>FlowTask</h1>

          <p className="lead">
            FlowTask is a modern productivity platform that helps
            students, professionals and teams organize work,
            manage deadlines, track progress and achieve goals
            efficiently.
          </p>

          <div className="cta-row">
            <button
              className="btn-primary"
              onClick={() => navigate("/register")}
            >
              Get Started
            </button>

            <button
              className="btn-ghost"
              onClick={() => navigate("/login")}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-grid">
        <div className="feature glass-box">
          <h3 style={{ fontWeight: "800" }}>Task Management</h3>
          <p>
            Create, update and manage all your daily tasks
            in one place.
          </p>
        </div>

        <div className="feature glass-box">
          <h3 style={{ fontWeight: "800" }}>Progress Tracking</h3>
          <p>
            Monitor tasks from To Do to Completed
            with ease.
          </p>
        </div>

        <div className="feature glass-box">
          <h3 style={{ fontWeight: "800" }}>Productivity</h3>
          <p>
            Stay focused and achieve more every day.
          </p>
        </div>

        <div className="feature glass-box">
          <h3 style={{ fontWeight: "800" }}>Secure Accounts</h3>
          <p>
            JWT authentication and BCrypt security
            keep your data protected.
          </p>
        </div>
      </section>

      {/* WHY FLOWTASK */}
      <section className="glass-box info-card">
        <h2 style={{ fontWeight: "800" }}>Why Choose FlowTask?</h2>

        <p>
          FlowTask helps you organize your workflow through a simple system:
        </p>

        <h3 style={{ fontWeight: "800" }}>
          To Do → In Progress → Done
        </h3>

        <p>
          Whether you're a student, freelancer or developer,
          FlowTask helps you stay organized and productive.
        </p>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="glass-box stat-card">
          <h2 style={{ fontWeight: "800" }}>100%</h2>
          <p>Task Visibility</p>
        </div>

        <div className="glass-box stat-card">
          <h2 style={{ fontWeight: "800" }}>24/7</h2>
          <p>Access Anywhere</p>
        </div>

        <div className="glass-box stat-card">
          <h2 style={{ fontWeight: "800" }}>Secure</h2>
          <p>Protected Accounts</p>
        </div>
      </section>

      {/* CTA */}
      <section className="glass-box cta-section">
        <h2 style={{ fontWeight: "800" }}>
          Ready To Get Started?
        </h2>

        <p>
          Join FlowTask today and take control of your productivity.
        </p>

        <button
          className="btn-primary"
          onClick={() => navigate("/register")}
        >
          Create Free Account
        </button>
      </section>
    </div>
  );
}

export default Landing;
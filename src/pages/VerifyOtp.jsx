import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function VerifyOtp() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email;

  const handleVerify = (e) => {
    e.preventDefault();

    if (!otp) {
      setError("Enter OTP");
      return;
    }

    // frontend demo OTP
    if (otp === "123456") {
      alert("OTP Verified");
      navigate("/login");
    } else {
      setError("Invalid OTP (try 123456)");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>Verify OTP</h2>

        <p className="info">
          OTP sent to: <b>{email}</b>
        </p>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleVerify}>
          <input
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />

          <button>Verify</button>
        </form>
      </div>
    </div>
  );
}

export default VerifyOtp;
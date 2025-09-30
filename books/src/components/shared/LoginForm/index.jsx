import "./LoginForm.css";

const LoginForm = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <form>
          <div className="form-group">
            <label>Username</label>
            <input type="text" placeholder="Masukkan username" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Masukkan email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Masukkan password" />
          </div>
          <button type="submit" className="btn-login">Login</button>
        </form>
        <p className="register-text">
          Belum punya akun? <a href="/register">Daftar</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;

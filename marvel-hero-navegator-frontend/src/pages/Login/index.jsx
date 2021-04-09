import React from 'react';

function Login() {
  return (
    <div className="text-center">
      <form className="form-signin">
        <h1 className="h1 mb-3 font-weight-normal">Login</h1>
        <label htmlFor="email">
          Email
          <input
            className="form-control"
            type="email"
            id="email"
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            className="form-control"
            type="password"
            id="password"
            data-testid="password-input"
          />
        </label>
        <button
          className="btn btn-lg btn-danger btn-block"
          type="button"
          data-testid="signin-btn"
        >
          Entrar
        </button>
        <br />
        <button
          to="/register"
          data-testid="no-account-btn"
          className="btn btn-lg btn-primary"
          type="button"
        >
          Register
        </button>
        <p className="mt-5 mb-3 text-muted">
          © Marvel Hero Navegator 2021
        </p>
      </form>
    </div>
  );
}

export default Login;

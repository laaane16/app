import React from "react";

const ErrorPage: React.FC = (props) => {
  return (
    <main className="app-content">
      <div className="error-page__content">
        <p className="error-page__text">
          THE PAGE YOU A LOOKING FOR CAN'T BE FOUND
        </p>
        <p className="error-page__num">404</p>
      </div>
    </main>
  );
};

export default ErrorPage;

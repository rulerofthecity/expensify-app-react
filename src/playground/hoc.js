import React from "react";
import ReactDOM from "react-dom";

const Component1 = (props) => (
  <div>
    <h1>Title</h1>
    <p>Something important and useful comes here .. </p>
    {props.msg && (
      <p>If you see this message than that means you are logged in as Admin.</p>
    )}
  </div>
);

const WithAdminWarningComponent = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.msg && (
        <p>
          If you see this message than that means you are logged in as Admin.
        </p>
      )}
      <WrappedComponent {...props} />
    </div>
  );
};

const AdminComponent = WithAdminWarningComponent(Component1);

ReactDOM.render(<AdminComponent msg={false} />, document.getElementById("app"));

import Alert from "react-bootstrap/Alert";

// variant [
//   'primary',
//   'secondary',
//   'success',
//   'danger',
//   'warning',
//   'info',
//   'light',
//   'dark',
// ]


function Message ({variant, text }) {
    return (
      <div>
        <Alert variant={variant}>
          {text}
        </Alert>
      </div>
    );
}

export default Message

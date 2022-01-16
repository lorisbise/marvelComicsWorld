import Button from 'react-bootstrap/Button'

const Btn=({onClick, text, variant})=>{

return (
  <Button
    style={{marginBottom: '10px', margin: 'auto',marginTop: '10px', height: '60px', width: '15rem'}}
    onClick={onClick}
    text={text}
    variant={variant}
  
  >
    {text}{" "}
  </Button>
);
    
}

export default  Btn;
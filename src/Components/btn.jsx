import Button from 'react-bootstrap/Button'

const Btn=({onClick, text, variant})=>{

return (
  <Button
    style={{display: 'block',
    marginRight: 'auto', marginLeft: 'auto', marginTop: '10px',height: '60px', width: '15rem'}}
    onClick={onClick}
    text={text}
    variant={variant}
  
  >
    {text}{" "}
  </Button>
);
    
}

export default  Btn;
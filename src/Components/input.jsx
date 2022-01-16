

const Input=({placeholder, onChange, value})=>{

    return(
        <input style={{marginBottom: '10px', margin: 'auto' ,height: '60px', width: '15rem',}} placeholder={placeholder} onChange={onChange} value={value}/>
    )
}
export default Input;
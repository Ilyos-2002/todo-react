export function Input({ type, placeholder, name, value, required }) {
    console.log(type);
    return (
        <input type={type} placeholder={placeholder} name={name} value={value} required={required} />
    )
}

// placeholder = { placeholder } name = { name } value = { value } required = { required } ?

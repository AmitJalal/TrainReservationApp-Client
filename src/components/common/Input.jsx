const Input = ({type, text, name, styles, ...props}) => {
  return (
    <input
      type={type}
      placeholder={text}
      name={name}
      className={`min-w-[10rem] max-w-[15rem] p-2 border-[.5px] focus:outline-none ${styles}`}
      {...props}
    />
  );
}
export default Input
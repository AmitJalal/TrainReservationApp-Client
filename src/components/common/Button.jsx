const Button = ({children, styles, ...props}) => {
  return (
    <button
      className={`max-w-[10rem] grid place-items-center hover:brightness-90 rounded-md text-white font-bold py-3 px-5 ${styles}`}
      {...props}
    >
      {children}
    </button>
  );
}
export default Button
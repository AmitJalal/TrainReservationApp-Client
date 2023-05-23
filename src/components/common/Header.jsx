const Header = ({styles,children}) => {
  return (
    <header className={`grid place-content-center text-center p-4 my-4 ${styles}`}>
      {children}
    </header>
  );
}
export default Header
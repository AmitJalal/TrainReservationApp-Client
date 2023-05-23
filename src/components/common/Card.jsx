const Card = ({styles, children }) => {
  return (
    <article className={`w-[8rem] xxsm:w-[8.25rem] xsm:w-[10rem] sm:w-[11.25rem] h-[10rem] grid place-items-center p-2  rounded-md ${styles}`}>
      {children}
    </article>
  );
};
export default Card;

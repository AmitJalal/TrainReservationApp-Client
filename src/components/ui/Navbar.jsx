import logo from '../../assets/images/logo.png';
const navItems = {
  main: [{ logo }, { heading: 'Travel' }],
  links: [
    { id: 1, title: 'Lorem1', url: '/' },
    { id: 2, title: 'Lorem22', url: '/about' },
    { id: 3, title: 'Lorem4', url: '/services' },
    { id: 4, title: 'Loremsaa', url: '/contact' },
  ],
};

export const Navbar = ({ ...styles }) => {
  return (
    <div {...styles}>
      <header className="font-sans">
        <nav className="flex justify-between">
          {/*========= LOGO Starts ====== */}
          <div className="flex">
            {navItems?.main.map(({ logo, heading }) => (
              <div className="min-width-full max-h-full flex justify-center items-center p-2">
                <img src={logo} className="h-[50px]" />
                <span className="text-5xl font-sans font-bold z-10">
                  {heading}
                </span>
              </div>
            ))}
          </div>
          {/*========= LOGO Ends ====== */}

          {/*=========  LINKS Starts========*/}
          <div className="flex">
            {navItems?.links.map((item) => {
              return (
                <div>
                  <ul className="nav-links" key={item.id}>
                    <li>
                      <a href={item.url}>{item.title}</a>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
          {/*=========  LINKS Ends========*/}
        </nav>
      </header>
    </div>
  );
};

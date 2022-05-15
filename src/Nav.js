import './scss/main.scss';


function Nav() {
  return (
    <>
      <div className='baner'><div className='img'></div> </div>
      <header className="App-header static">
        <a className='header-section' href='#about_author'>O mnie</a>
        <a className='header-section' href='#VideoAndAnimations'>Multimedia i animacje</a>
        <a className='header-section' href='#graphic3D'>Grafika 3D</a>
        <a className='header-section' href='#digital_art'>Grafika cyfrowa</a>
        <a className='header-section' href='#graphic_design'>Projektowanie graficzne</a>
        <a className='header-section' href='#illustration'>Ilustracje</a>
        <a className='header-section' href='#drawings'>Rysunki i szkice</a>
        <a className='header-section' href='#'>Kontakt</a>
      </header>
    </>
  );
}

export default Nav;

import './scss/main.scss';


function Nav() {
  return (
    <div className="App">
      <div className='baner'><div className='img'></div> </div>
      <header className="App-header">
        <a className='header-section' href='#'>O mnie</a>
        <a className='header-section' href='#'>Multimedia i animacje</a>
        <a className='header-section' href='#'>Grafika cyfrowa</a>
        <a className='header-section' href='#'>Projektowanie graficzne</a>
        <a className='header-section' href='#'>Ilustracje</a>
        <a className='header-section' href='#'>Grafika 3D</a>
        <a className='header-section' href='#'>Rysunki i szkice</a>
        <a className='header-section' href='#'>Kontakt</a>
      </header>
    </div>
  );
}

export default Nav;
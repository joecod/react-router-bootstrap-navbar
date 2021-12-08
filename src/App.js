import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

function App() {
  const [searchValue, setSearchValue] = useState('');
  const onChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  }
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark" >
        <div className="container-fluid">
          <NavLink className="navbar-brand" to='/' >Home</NavLink>
          <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse collapse" id="navbarsExample03">
            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
              <li className="nav-item">
                <NavLink className='nav-link' to='/one'>One</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link' to='/two'>Two</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link' to='/three'>Three</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link' to='/four'>Four</NavLink>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/#" id="dropdown08" data-bs-toggle="dropdown">Dropdown</a>
                <ul className="dropdown-menu" aria-labelledby="dropdown08">
                  <Link className='dropdown-item' to='/a'>A</Link>
                  <Link className='dropdown-item' to='/b'>B</Link>
                  <Link className='dropdown-item' to='/c'>C</Link>
                  <Link className='dropdown-item' to='/page_not_exixts'>?</Link>
                </ul>
              </li>
            </ul>
            <form action={`/search/${searchValue}`} >
              <input className="form-control" type="text" value={searchValue} onChange={onChangeSearchValue} placeholder="Search" />
            </form>
          </div>
        </div>
      </nav>

      <Outlet />


    </div>
  );
}

export default App;


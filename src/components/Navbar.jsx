import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const isActiveNav = ({isActive}) => {
    return isActive ? "active" : "notActive";
  }
  return (
    <nav className='myNavBar'>
      <div className='navLink'>
        <NavLink to = "/" className = {isActiveNav}>
          Home
        </NavLink>
        <NavLink to = "/pokemones" className = {isActiveNav}>
          Pokemón
        </NavLink>
      </div>
      <div className='iconoPagina'>
        <NavLink to="/">
          <img src="https://cdn.icon-icons.com/icons2/896/PNG/512/pokemon_go_play_game_cinema_film_movie_icon-icons.com_69163.png" alt="icono" />
        </NavLink>
      </div>
    </nav>
  )
}
export default Navbar;
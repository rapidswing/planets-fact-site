import Icon from 'assets/icon-hamburger.svg'

export default function HamburgerMenu({ toggleHamburger }) {
  return (
    <div className="hamburger-menu">
      <img src={Icon} alt="Hamburger Menu" height="17" width="24" onClick={toggleHamburger}/>
    </div>
  )
}
import './SideBar.scss';
import mediationIcon from './../../assets/icons/meditation.svg';
import swimmingIcon from './../../assets/icons/swimming.svg';
import bikeIcon from './../../assets/icons/bike.svg';
import bodybuildingIcon from './../../assets/icons/bodybuilding.svg';
const SideBar = () => {
  return (
    <aside className="sidebar app-sidebar">
      <nav className="sidebar-menu">
        <ul className="sidebar-menu-list">
          <li className="sidebar-menu-list-item"><img src={mediationIcon} alt="" /></li>
          <li className="sidebar-menu-list-item"><img src={swimmingIcon} alt="" /></li>
          <li className="sidebar-menu-list-item"><img src={bikeIcon} alt="" /></li>
          <li className="sidebar-menu-list-item"><img src={bodybuildingIcon} alt="" /></li>
        </ul>
      </nav>
      <p className="sidebar-copi">Copiryght, SportSee 2020</p>
    </aside>
  );
}
export default SideBar;
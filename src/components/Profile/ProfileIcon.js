import React, { useState } from 'react';

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './ProfileIcon.css';
import { LOGOUT } from '../../constants/constants';

const ProfileIcon = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const routeChange = props.onRouteChange;
  const logout = () => {
    fetch(LOGOUT, {
      method: 'post',
      headers: {
        "Content-Type": "application/json",
        Authorization: window.sessionStorage.getItem('token'),
      },
    })
      .then(resp => {
        if (resp.status === 200) {
          window.sessionStorage.removeItem("token");
          routeChange('signout');
        }
      })
      .catch(console.log());
  };

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} className='pa4 tc'>
      <DropdownToggle
        tag="span"
        data-toggle="dropdown"
        aria-expanded={dropdownOpen}
      >
        <img
            src="http://tachyons.io/img/logo.jpg"
            className="br-100 ba h3 w3 dib" alt="avatar"/>
        </DropdownToggle>
      <DropdownMenu
        className='b--transparent shadow-5 dropdown-menu-right'
        style={{backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
        <DropdownItem onClick={props.toggleModal}>View Profile</DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={ logout }>Sign Out</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default ProfileIcon;

/*class ProfileIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
    }
  }

  render() {
    return(
      <div class="pa4 tc">
        <img
            src="http://tachyons.io/img/logo.jpg"
            class="br-100 ba h3 w3 dib" alt="avatar"/>
      </div>
    );
  }
}
*/


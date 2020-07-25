import React, { useState } from 'react';

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const ProfileIcon = (props) => {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} className='pa4 tc'>
      <DropdownToggle
        tag="span"
        data-toggle="dropdown"
        aria-expanded={dropdownOpen}
      >
        <img
            src="http://tachyons.io/img/logo.jpg"
            class="br-100 ba h3 w3 dib" alt="avatar"/>
        </DropdownToggle>
      <DropdownMenu
        right
        className='b--transparent shadow-5'
        style={{marginTop: '10px', backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
        <DropdownItem>View Profile</DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={() => props.onRouteChange('signout') }>Sign Out</DropdownItem>
        <DropdownItem disabled>Action (disabled)</DropdownItem>
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


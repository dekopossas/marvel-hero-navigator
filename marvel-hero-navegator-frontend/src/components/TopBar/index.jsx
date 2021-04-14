import React from 'react';
import {
  Menu,
  MenuButton,
  IconButton,
  HamburgerIcon,
} from '@chakra-ui/react';

function TopBar() {
  return (
    <div>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
        />
      </Menu>
    </div>
  );
}

export default TopBar;

import React from 'react';
import {
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react';
import { ImMenu } from 'react-icons/im';

function TopBar() {
  return (
    <div>
      <Stack height="80%" borderRadius="md" width="90%" align="start">
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<ImMenu />}
            variant="outline"
          />
          <MenuList>
            <MenuItem command="⌘T">
              New Tab
            </MenuItem>
            <MenuItem command="⌘N">
              New Window
            </MenuItem>
            <MenuItem command="⌘⇧N">
              Open Closed Tab
            </MenuItem>
            <MenuItem command="⌘O">
              Open File...
            </MenuItem>
          </MenuList>
        </Menu>
      </Stack>
    </div>
  );
}

export default TopBar;

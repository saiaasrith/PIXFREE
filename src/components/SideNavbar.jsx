import React from 'react';
import { ProSidebar, SidebarHeader, SidebarContent, SidebarFooter, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { RiDashboardFill } from 'react-icons/ri';
import { BiSearchAlt2 } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { MdCollections } from 'react-icons/md';
import { HiOutlineMenu } from 'react-icons/hi';


class SideNavbar extends React.Component{

  constructor(props){
    super(props);
    this.state = {isCollapsed: false};
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar(){
    this.setState((prevState) => ({
      isCollapsed: !prevState.isCollapsed
    }));
  }

  render(){
    return (
      <ProSidebar
        collapsed={this.state.isCollapsed}
        toggled={true}
        breakPoint="md"
      >
        <SidebarHeader>
          <div>
            <h3>Swash.lib</h3>
            <button onClick={this.toggleSidebar}>
              <HiOutlineMenu />
            </button>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem icon={<RiDashboardFill />}>Dashboard</MenuItem>
            <MenuItem icon={<BiSearchAlt2 />}>Search</MenuItem>
            <MenuItem icon={<FaStar />}>Topics</MenuItem>
            <MenuItem icon={<FiUsers />}>Users</MenuItem>
            <MenuItem icon={<MdCollections />}>Collections</MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <div>
            <p>Developed by G. Nitish</p>
          </div>
        </SidebarFooter>
      </ProSidebar>
    );
  }
}

export default SideNavbar;

import React from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import SettingsIcon from '@material-ui/icons/Settings';
import ComputerIcon from '@material-ui/icons/Computer';
import PeopleIcon from '@material-ui/icons/People';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import TableChartIcon from '@material-ui/icons/TableChart';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DnsIcon from '@material-ui/icons/Dns';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import SidebarItem from '../../components/SidebarItem'

export const mainItemList = (realm, component) => {
    return (
        <div>
            <ListSubheader inset>Configure</ListSubheader>
            <SidebarItem to='settings' realm={realm} component={component} icon={<SettingsIcon />} label="Realm Settings" />
            <SidebarItem to='consumers' realm={realm} component={component} icon={<ComputerIcon />} label="Consumers" />
            <SidebarItem to='roles' realm={realm} component={component} icon={<PeopleIcon />} label="Roles" />
            <SidebarItem to='providers' realm={realm} component={component} icon={<CompareArrowsIcon />} label="Identity Providers" />
            <SidebarItem to='federation' realm={realm} component={component} icon={<DnsIcon />} label="User Federation" />
            <SidebarItem to='authentication' realm={realm} component={component} icon={<LockIcon />} label="Authentication" />
        </div>
    );
}

export const secondaryItemList = (realm, component) => (
    <div>
        <ListSubheader inset>Manage</ListSubheader>
        <SidebarItem to='groups' realm={realm} component={component} icon={<PeopleIcon />} label="Groups" />
        <SidebarItem to='users' realm={realm} component={component} icon={<PersonIcon />} label="Users" />
        <SidebarItem to='sessions' realm={realm} component={component} icon={<TableChartIcon />} label="Sessions" />
        <SidebarItem to='events' realm={realm} component={component} icon={<AssignmentIcon />} label="Events" />
        <SidebarItem to='import' realm={realm} component={component} icon={<ImportExportIcon />} label="Import / Export" />
    </div>
);
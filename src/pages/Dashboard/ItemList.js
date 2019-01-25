import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
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
import BoringLink from '../../components/BoringLink.js'

export const mainItemList = (
    <div>
        <ListSubheader inset>Configure</ListSubheader>
        <BoringLink to='/admin/default/settings'>
            <ListItem button>
                <ListItemIcon>
                    <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Realm Settings" />
            </ListItem>
        </BoringLink>
        <BoringLink to='/admin/default/consumers'>
            <ListItem button>
                <ListItemIcon>
                    <ComputerIcon />
                </ListItemIcon>
                <ListItemText primary="Consumers" />
            </ListItem>
        </BoringLink>
        <BoringLink to='/admin/default/roles'>
            <ListItem button>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Roles" />
            </ListItem>
        </BoringLink>
        <BoringLink to='/admin/default/providers'>
            <ListItem button>
                <ListItemIcon>
                    <CompareArrowsIcon />
                </ListItemIcon>
                <ListItemText primary="Identity Providers" />
            </ListItem>
        </BoringLink>
        <BoringLink to='/admin/default/federation'>
            <ListItem button>
                <ListItemIcon>
                    <DnsIcon />
                </ListItemIcon>
                <ListItemText primary="User Federation" />
            </ListItem>
        </BoringLink>
        <BoringLink to='/admin/default/authentication'>
            <ListItem button>
                <ListItemIcon>
                    <LockIcon />
                </ListItemIcon>
                <ListItemText primary="Authentication" />
            </ListItem>
        </BoringLink>
    </div>
);

export const secondaryItemList = (
    <div>
        <ListSubheader inset>Manage</ListSubheader>
        <BoringLink to='/admin/default/groups'>
        <ListItem button>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Groups" />
        </ListItem>
        </BoringLink>
        <BoringLink to='/admin/default/users'>
            <ListItem button>
                <ListItemIcon>
                    <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Users" />
            </ListItem>
        </BoringLink>
        <BoringLink to='/admin/default/sessions'>
            <ListItem button>
                <ListItemIcon>
                    <TableChartIcon />
                </ListItemIcon>
                <ListItemText primary="Sessions" />
            </ListItem>
        </BoringLink>
        <BoringLink to='/admin/default/events'>
            <ListItem button>
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Events" />
            </ListItem>
        </BoringLink>
        <BoringLink to='/admin/default/import'>
            <ListItem button>
                <ListItemIcon>
                    <ImportExportIcon />
                </ListItemIcon>
                <ListItemText primary="Import / Export" />
            </ListItem>
        </BoringLink>
    </div>
);
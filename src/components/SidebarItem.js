import React, { Component } from 'react'
import BoringLink from './BoringLink'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

export default class SidebarItem extends Component {
    render() {
        const { to, icon, label, realm, component } = this.props

        return (
            <BoringLink to={`/admin/${realm}/${to}`}>
                <ListItem button selected={to === component}>
                    <ListItemIcon>
                        {icon}
                    </ListItemIcon>
                    <ListItemText primary={label} />
                </ListItem>
            </BoringLink>
        )
    }
}
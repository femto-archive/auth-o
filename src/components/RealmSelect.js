import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default class RealmSelect extends Component {
    async handleChange(event, child) {
        const { onChange, realms } = this.props
        const selected = realms.find(realm => realm.name.slug === child.key)

        onChange(selected)
    }

    render() {
        const { realms, selected } = this.props

        return (
            <FormControl>
                <Select
                    value={selected ? selected.name.slug : ''}
                    onChange={this.handleChange.bind(this)}
                    displayEmpty
                    name="realm"
                >
                    {realms.map(realm => 
                        <MenuItem key={realm.name.slug} value={realm.name.slug}>
                            {realm.name.human}
                        </MenuItem>
                    )}
                </Select>
            </FormControl>
        )
    }
}
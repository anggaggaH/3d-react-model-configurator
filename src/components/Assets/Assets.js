import React, { Component } from 'react'

export default class Assets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 1,
                    asset: 'shoe-draco.glb',
                    name: 'Shoe'
                },
                {
                    id: 2,
                    asset: 'Fox.glb',
                    name: 'Fox'
                }
            ]
        }
    }

    handleChangeItems(value) {
        this.props.setItems(value)
        this.setState({
            selectedItems: value,
        });
    }

    render() {
        let items
        if (this.state.items) {
            items = this.state.items?.map(itm => {
                return (
                    <option key={itm.id} value={itm.asset}>{itm.name}</option>
                )
            })
        }
        return (
            <div>
                <select name="items" id="items" onChange={(event) => this.handleChangeItems(event.target.value)}>
                    {items}
                </select>
            </div>
        )
    }
}

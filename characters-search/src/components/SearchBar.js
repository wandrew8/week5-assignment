import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text" name="query" />
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}

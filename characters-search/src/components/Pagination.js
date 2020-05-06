import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Pagination extends Component {
    static propTypes = {
        nextPage: PropTypes.func,
        prevPage: PropTypes.func,
        totalPages: PropTypes.number,
        currentPage: PropTypes.number
    }

    render() {
        return (
            <nav aria-label="Page navigation example">
                <ul>
                    <li onClick={this.props.prevPage}>Previous</li>
                    <li onClick={this.props.prevPage}>{this.props.currentPage > 1 ? this.props.currentPage - 1 : "<"}</li>
                    <li>{this.props.currentPage}</li>
                    <li onClick={this.props.nextPage}>{this.props.currentPage >= this.props.totalPages ? ">" : this.props.currentPage + 1}</li>
                    <li onClick={this.props.nextPage}>Next</li>
                </ul>
            </nav>
        )
    }
}

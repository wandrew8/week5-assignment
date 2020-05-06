import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import '../App.scss';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: {},
            errMess: '',
            currentPage: 1,
            totalPages: 1,
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        const key = process.env.REACT_APP_API_KEY
        fetch(`https://www.superheroapi.com/api.php/${key}/search/t`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let pages = [];
            while(data.results.length) {
                pages.push(data.results.splice(0,25))
            }
            this.setState({ data: pages, totalPages: pages.length, isLoading: false });
        })
        .catch(err => {
            this.setState({ isLoading: false, errMess: "Oops, something's not right"})
        })
    }

    nextPage = () => {
        if (this.state.currentPage + 1 <= this.state.totalPages) {
            this.setState({ currentPage: this.state.currentPage + 1 });
        }
    }

    prevPage = () => {
        if(this.state.currentPage - 1 > 0) {
            this.setState({ currentPage: this.state.currentPage - 1 });
        }
    }

    render() {
        
        return (
            <div>
                <NavBar />
                <Hero />
                <SearchBar />
                {this.state.isLoading ? <div>Loading...</div> : this.state.data[this.state.currentPage - 1].map(hero => {
                    return (
                        <div>
                            <h2>{hero.name}</h2>
                            <img src={hero.image.url ? hero.image.url : "https://wallpapertag.com/wallpaper/full/7/5/0/255125-widescreen-marvel-wallpapers-1920x1080-for-1080p.jpg"} alt={hero.name} />
                        </div>
                    )
                })}
                <Pagination currentPage={this.state.currentPage} totalPages={this.state.data.length} nextPage={this.nextPage} prevPage={this.prevPage} />
            </div>
        )
    }
}

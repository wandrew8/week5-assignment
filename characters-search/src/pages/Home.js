import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: {},
            errMess: ''
        }
    }

    componentDidMount() {
        const key = process.env.REACT_APP_API_KEY
        fetch(`https://www.superheroapi.com/api.php/${key}/search/t`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({ data: data, isLoading: false });
        })
        .catch(err => {
            this.setState({ isLoading: false, errMess: "Oops, something's not right"})
        })
    }

    render() {
        
        return (
            <div>
                {this.state.isLoading ? <div>Loading...</div> : this.state.data.results.map(hero => {
                    return (
                        <div>
                            <h2>{hero.name}</h2>
                            <img src={hero.image.url ? hero.image.url : "https://wallpapertag.com/wallpaper/full/7/5/0/255125-widescreen-marvel-wallpapers-1920x1080-for-1080p.jpg"} alt={hero.name} />
                        </div>
                    )
                })}
            </div>
        )
    }
}

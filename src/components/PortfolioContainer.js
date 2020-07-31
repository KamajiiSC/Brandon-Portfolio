import React from 'react';
import GalleryItem from './GalleryItem';
import CoffeeExpress from '../../resources/CoffeeExpress.png';

export default class PortfolioContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
         coffeeExpress: {id: 0, title: 'Coffee Express', imgSrc: CoffeeExpress, description: 'A mock up website for a coffee shop', githubLink:'https://github.com/KamajiiSC/CoffeeExpress'}      
        };
    }
    render(){
        return(
        <div id="portfolio-container" class="box-container">
            <h1>My Work</h1>
            <ul>
                <li><GalleryItem title={this.state.coffeeExpress.title} imgSrc={this.state.coffeeExpress.imgSrc} description={this.state.coffeeExpress.description}
                githubLink={this.state.coffeeExpress.githubLink}/></li>
                <li><GalleryItem title={this.state.coffeeExpress.title} imgSrc={this.state.coffeeExpress.imgSrc} description={this.state.coffeeExpress.description} githubLink={this.state.coffeeExpress.githubLink}/></li>
                <li><GalleryItem title={this.state.coffeeExpress.title} imgSrc={this.state.coffeeExpress.imgSrc} description={this.state.coffeeExpress.description} githubLink={this.state.coffeeExpress.githubLink}/></li>
                <li><GalleryItem title={this.state.coffeeExpress.title} imgSrc={this.state.coffeeExpress.imgSrc} description={this.state.coffeeExpress.description} githubLink={this.state.coffeeExpress.githubLink}/></li>
                <li><GalleryItem title={this.state.coffeeExpress.title} imgSrc={this.state.coffeeExpress.imgSrc} description={this.state.coffeeExpress.description} githubLink={this.state.coffeeExpress.githubLink}/></li>
                <li><GalleryItem title={this.state.coffeeExpress.title} imgSrc={this.state.coffeeExpress.imgSrc} description={this.state.coffeeExpress.description} githubLink={this.state.coffeeExpress.githubLink}/></li>
            </ul>
        </div>
    )}
};

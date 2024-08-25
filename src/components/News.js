import React,{ Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
    constructor(){
        super();
        console.log("hello from news component");
        this.state= {
            articles:[],
            loding:false
        }
    }

    async componentDidMount() {
        let url= "https://newsapi.org/v2/everything?q=apple&from=2024-08-24&to=2024-08-24&sortBy=popularity&apiKey=8304f1b721a64382ab990f992243bf66";
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({articles:parsedData.articles})
    }


    render(){
        console.log("render")
        return (
           
            <div className="container my-3">
                <h2> NewsMonkey - Top HeadLines</h2>
                
                <div className="row my-3">
                {this.state.articles.map((element)=>{

                    return <div className="col-md-4" key={element.url} >
                    <Newsitem title={element.title?element.title.slice(0, 37):""} 
                    description={element.description?element.description.slice(0,80):""} 
                    imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>

                })}
                    
                </div>
            
            </div>
        )
    }
}

export default News;
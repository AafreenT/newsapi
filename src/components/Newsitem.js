import React,{ Component} from "react";

export class Newsitem extends Component {
    
    render(){
        let {title,description,imageUrl, newsUrl} = this.props;
        return(
        <div className="my-3">
            <div className="card" style={{width: "18rem"}}>
                <img src={!{imageUrl}?"https://pics.computerbase.de/1/1/3/7/4/8-e95cc9f3ac6b7019/article-1280x720.9496adfe.jpg":imageUrl}/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                </div>
                </div>
        </div>
        )
    }
}

export default Newsitem;
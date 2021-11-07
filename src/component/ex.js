import React ,{Component} from 'react' ;
class Ex extends Component{
    render(props){
        return(
            <div className="contacts">
            <div className="contact-card">
               <img src={this.props.img}/>
                <h3>{this.props.name}</h3>
                <p>Phone :{this.props.phone}</p>
                <p>Email :{this.props.Email}</p>
            </div>
            </div>
                
        )
    }
}
export default Ex;
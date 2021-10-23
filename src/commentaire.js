import React ,{Component} from 'react';
class Commentaire extends Component {
    render() {
      return (
        <div>
            <textarea class="form-control" placeholder="Tapez un commentaire..."></textarea>
             <small>120 Restants</small>
        </div>
      )
    }
}
export default Commentaire ;

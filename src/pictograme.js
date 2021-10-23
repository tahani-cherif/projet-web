import React ,{Component} from 'react';
import Icone from './icone';
class Pictogramme extends Component {
    render(props) {
      return (
    <div>

          {/* Inclut le sous-composant LikeIcon à l'intérieur du composant Like*/}
          <Icone />
          <hr />
        <div>
         <button type="button" class="btn no-outline btn-secondary"  onClick={this.props.x}>
          <i class="fa fa-thumbs-o-up fa-4 align-middle" aria-hidden="true"></i>
         &nbsp;  
          <span class="align-middle">J'aime</span>
        </button>
        </div>
    </div>
        )
    }}
  
  export default Pictogramme;
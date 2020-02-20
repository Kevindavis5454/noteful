import React from 'react';
import { NavLink} from "react-router-dom";


class Folder extends React.Component {


    render() {
        const { id }= this.props
        return (
            <NavLink className='folder-names' to={`/name/${this.props.folderId}`}>
             <div className='postit-surr' key={id}>
                <div className='postit div-button'>
                    <h2>{this.props.folder}</h2>
                </div>
                 <button
                     className='glow-on-hover note'
                     type='button'
                     onClick={this.handleClickDelete}
                 >
                    <span>
                    Delete
                    </span>
                 </button>
             </div>
            </NavLink>
        )
    }
}

export default Folder
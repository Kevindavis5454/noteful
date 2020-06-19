import React from 'react';
import { NavLink} from "react-router-dom";
import PropTypes from "prop-types";
import config from "../config";
import ApiContext from "../ApiContext";


class Folder extends React.Component {

    static defaultProps ={
        onDeleteFolder: () => {},
    }

    static contextType = ApiContext;

    handleClickFolderDelete = e => {
        e.preventDefault()
        const folderId = this.props.id

        fetch(`${config.API_ENDPOINT}/folders/${folderId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => {
                if (!res.ok)
                    this.props.history.push(`/`)
                this.props.onDeleteFolder(folderId)
            })
            .catch(error => {
                console.error({ error })
            })
    }

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
                     onClick={this.handleClickFolderDelete}
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

Folder.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    modified: PropTypes.string
}

export default Folder
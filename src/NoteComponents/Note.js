import React from 'react';
import { Link } from 'react-router-dom'
import config from "../config";
import ApiContext from "../ApiContext";
import { format } from 'date-fns'
import PropTypes from 'prop-types'


class Note extends React.Component {



    static defaultProps ={
        onDeleteNote: () => {},
    }

    static contextType = ApiContext;

    handleClickDelete = e => {
        e.preventDefault()
        const noteId = this.props.id

        fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e))
                return res.json()
            })
            .then(() => {
                /*this.context.deleteNote(noteId)
                // allow parent to perform extra behaviour*/
                this.props.onDeleteNote(noteId)
                window.location.reload();
            })
            .catch(error => {
                console.error({ error })
            })
    }

    render() {
        const { title, id, content } = this.props
        return (
            <div className='postit-surr' key={id}>
                <Link to={`/notes/${id}`}>
                    <div className='postit div-button' key={id}>
                        <h2>
                        {title}
                        </h2>
                        <p className='para-note'>
                            {content}
                          {/*Last Modified: {format(new Date(modified), 'MM/dd/yyyy')}*/}
                        </p>
                    </div>
                </Link>

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

        )
    }
}

Note.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    modified: PropTypes.string
}


export default Note
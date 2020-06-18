import React from 'react';
import { format } from 'date-fns'
import PropTypes from "prop-types";
import ApiContext from "../ApiContext";
import config from "../config";

class NoteSingle extends React.Component {


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
                this.context.deleteNote(noteId)
                // allow parent to perform extra behaviour
                this.props.onDeleteNote(noteId)
            })
            .catch(error => {
                console.error({ error })
            })
    }


    render() {
        console.log(this.props)
        const note = this.props.notes.find(n => n.id == this.props.match.params.note_id)
        console.log(note);
        return (
            <div className='paper content-col-large'>
                <div className='pattern'>
                    <div className='content'>
                    {note.title}
                    <br /><br />
                    {note.content}
                    <br /><br />
                    {/*Last Modified: {format(new Date(note.modified), 'MM/dd/yyyy')}*/}
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
            </div>
        )
    }
}

NoteSingle.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
}

export default NoteSingle
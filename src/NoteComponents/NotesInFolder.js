import React from 'react';
import Note from "./Note";
import ApiContext from "../ApiContext";
import PropTypes from "prop-types";

class NotesInFolder extends React.Component {

    static defaultProps = {
        match: {
            params: {}
        }
    }

    handleDeleteNote = () => {
        this.props.history.push(`/`)
    }

    static contextType = ApiContext

    render() {
        const folderIdSelect =  this.props.match.params.folderId
        const noteMatch = this.props.notes.filter(note => {
            if (note.folderId === folderIdSelect) {
                return note
            }
        })

        const noteDisplay = noteMatch.map (noteMatch => {

            return (
                    <Note onDeleteNote={this.handleDeleteNote} key={noteMatch.id} id={noteMatch.id} title={noteMatch.title}/>
            )

    })
        return (
            <section className='content-col-large'>
                {noteDisplay}
            </section>
        )
                }
}

NotesInFolder.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    modified: PropTypes.string
}

export default NotesInFolder


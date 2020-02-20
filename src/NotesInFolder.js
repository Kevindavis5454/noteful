import React from 'react';
import Note from "./Note";
import ApiContext from "./ApiContext";

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
                    <Note onDeleteNote={this.handleDeleteNote} id={noteMatch.id} name={noteMatch.name} modified={noteMatch.modified}/>
            )

    })
        return (
            <section className='content-col-large'>
                {noteDisplay}
            </section>
        )
                }
}

export default NotesInFolder


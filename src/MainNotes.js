import React from 'react';
import Note from "./Note";
import ApiContext from "./ApiContext";

class MainNotes extends React.Component {

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
        const noteName = this.props.notes.map(note => <Note onDeleteNote={this.handleDeleteNote} id={note.id} name={note.name} modified={note.modified}/>)
        return (
            <section className='content-col-large'>
                {noteName}
            </section>
        )
    }
}

export default MainNotes
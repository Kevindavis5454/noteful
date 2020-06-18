import React from 'react';
import Note from "./Note";
import ApiContext from "../ApiContext";

class MainNotes extends React.Component {
    static defaultProps = {
        match: {
            params: {},
        }
    }

    handleDeleteNote = () => {
        this.props.history.push(`/`)
    }

    static contextType = ApiContext

    render() {
        const noteName =this.props.notes.map(note => <Note key={note.id} onDeleteNote={this.handleDeleteNote} id={note.id} title={note.title} content={note.content} /*modified={note.modified}*//>)
        return (
            <section className='content-col-large'>
                {noteName}
            </section>
        )
    }
}

export default MainNotes
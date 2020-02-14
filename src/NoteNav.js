import React from 'react';
import Store from "./Store";

class NoteNav extends React.Component {

    render() {
        const note = Store.notes.find(n => n.name === this.props.match.params.name )
        return (
            <div className='content-col-large'>
            <ul>
                <li key={note.id}>
                    <a href={`/note/${note.name}`}>
                        {note.name}
                    </a>
                    <br />
                    <br />
                    <br />
                    {note.modified}
                    <p>{note.content}</p>
                </li>

            </ul>
            </div>


        )
    }
}

export default NoteNav
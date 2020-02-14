import React from 'react';
import Store from "./Store";
import NoteNav from "./NoteNav";
import { Route } from 'react-router-dom';

class FolderNavNoteDisplay extends React.Component {

    render() {
        const noteFind = Store.notes.find(n => n.folderId === this.props.match.params.folderId )
        const noteMatch = Store.notes.map(note => Store.notes[noteFind])
        return (

            <div className='content-col-large'>
                <ul>
                    <li key={noteMatch.id}>
                        <Route path={`/note/${noteMatch.name}`} component={NoteNav}/>
                            {noteMatch.name}
                        <br />
                        <br />
                        <br />
                        {noteMatch.modified}
                        <p>{noteMatch.content}</p>
                    </li>

                </ul>
            </div>
        )
    }
}

export default FolderNavNoteDisplay
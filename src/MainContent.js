import React from 'react';
import MainNoteDisplay from "./MainNoteDisplay";
import Store from "./Store";

class MainContent extends React.Component {

    render() {
        const noteName = Store.notes.map(note => <MainNoteDisplay key={note.id} name={note.name} modified={note.modified}/>)
        return (
            <div className='content-col-large'>
                {noteName}
            </div>
        )
    }
}

export default MainContent
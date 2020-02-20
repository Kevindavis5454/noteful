import React from 'react';
import { format } from 'date-fns'

class NoteSingle extends React.Component {

    render() {
        const note = this.props.notes.find(n => n.id === this.props.match.params.id )
        return (
            <div className='paper content-col-large'>
                <div className='pattern'>
                    <div className='content'>
                    {note.name}
                    <br /><br />
                    {note.content}
                    <br /><br />
                    Last Modified: {format(new Date(note.modified), 'MM/dd/yyyy')}
                    </div>
                </div>
            </div>


        )
    }
}

export default NoteSingle
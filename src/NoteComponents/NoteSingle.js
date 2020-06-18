import React from 'react';
import { format } from 'date-fns'
import PropTypes from "prop-types";

class NoteSingle extends React.Component {

    render() {
        const note = this.props.notes.find(n => n.id === this.props.match.params.id )
        return (
            <div className='paper content-col-large'>
                <div className='pattern'>
                    <div className='content'>
                    {note.params.title}
                    <br /><br />
                    {note.params.content}
                    <br /><br />
                    {/*Last Modified: {format(new Date(note.modified), 'MM/dd/yyyy')}*/}
                    </div>
                </div>
            </div>
        )
    }
}

NoteSingle.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    modified: PropTypes.string
}

export default NoteSingle
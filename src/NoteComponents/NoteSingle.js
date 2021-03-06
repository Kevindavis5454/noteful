import React from 'react';
import { format } from 'date-fns'
import PropTypes from "prop-types";
import ApiContext from "../ApiContext";
import config from "../config";

class NoteSingle extends React.Component {



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
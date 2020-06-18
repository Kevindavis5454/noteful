import React from 'react';
import { format } from 'date-fns'
import PropTypes from "prop-types";
import ApiContext from "../ApiContext";

class NoteSingle extends React.Component {


    render() {
        const note = this.props.notes.find(n => n.id === this.props.match.params.id )
        console.log(note);
        const { title, content } = note
        return (
            <div className='paper content-col-large'>
                <div className='pattern'>
                    <div className='content'>
                    {title}
                    <br /><br />
                    {content}
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
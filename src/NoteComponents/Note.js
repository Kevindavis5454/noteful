import React from 'react';
import { Link } from 'react-router-dom'
import config from "../config";
import ApiContext from "../ApiContext";
import { format } from 'date-fns'
import PropTypes from 'prop-types'


class Note extends React.Component {

    render() {
        const { title, id, content } = this.props
        return (
            <div className='postit-surr' key={id}>
                <Link to={`/notes/${id}`}>
                    <div className='postit div-button' key={id}>
                        <h2>
                        {title}
                        </h2>
                        <p className='para-note'>
                            {content}
                          {/*Last Modified: {format(new Date(modified), 'MM/dd/yyyy')}*/}
                        </p>
                    </div>
                </Link>

            </div>

        )
    }
}

Note.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    modified: PropTypes.string
}


export default Note
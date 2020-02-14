import React from 'react';

class MainNoteDisplay extends React.Component {

    render() {
        return (
            <ul>
                <li key={this.props.key}>
                <a href={`/note/${this.props.name}`}>
                {this.props.name}
                </a>
                <br />
                <br />
                <br />
                {this.props.modified}
                </li>
            </ul>
        )
    }
}

export default MainNoteDisplay
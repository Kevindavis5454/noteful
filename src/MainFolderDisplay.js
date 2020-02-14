import React from 'react';

class MainFolderDisplay extends React.Component {

    render() {
        return (
            <ul>
                <li key={this.props.id}>
                    <a href={`/name/${this.props.folderId}`}>
                        {this.props.folder}
                    </a>
                </li>
            </ul>
        )
    }
}

export default MainFolderDisplay
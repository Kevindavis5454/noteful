import React from 'react';
import Folder from "./Folder";
import ApiContext from "../ApiContext";

class MainFolders extends React.Component {

    static defaultProps = {
        match: {
            params: {},
        }
    }

    handleDeleteFolder = () => {
        this.props.history.push(`/`)
    }

    static contextType = ApiContext

    render() {
        const folderName = this.props.folders.map(name => <Folder onDeleteFolder={this.handleDeleteFolder} key={name.id} folderId={name.id} id={name.id} folder={name.folder_name} />)
        return (
            <section className='content-col-small'>
                {folderName}
            </section>
        )
    }
}

export default MainFolders
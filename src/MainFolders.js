import React from 'react';
import Folder from "./Folder";

class MainFolders extends React.Component {

    render() {
        const folderName = this.props.folders.map(name => <Folder folderId={name.id} id={name.id} folder={name.name} />)
        return (
            <section className='content-col-small'>
                {folderName}
            </section>
        )
    }
}

export default MainFolders
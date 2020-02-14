import React from 'react';
import MainFolderDisplay from "./MainFolderDisplay";
import Store from "./Store";

class Sidebar extends React.Component {

    render() {
        const folderName = Store.folders.map(name => <MainFolderDisplay folderId={name.id} id={name.id} folder={name.name} />)
        return (
            <div className='content-col-small'>
                {folderName}
            </div>
        )
    }
}

export default Sidebar
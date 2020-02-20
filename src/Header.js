import React from 'react';
import {Link} from "react-router-dom";

class Header extends React.Component {

    handleBack = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <div className='page-header'>
                <div className="knockout">
                    <Link to='/'> <nav className='header-nav'><span className='nav-span'>Noteful</span></nav> </Link>
                </div>
                <div className='nav-buttons'>
                    <Link to='/AddFolder'><button className='glow-on-hover header'><span>Add a Folder</span></button></Link>
                    <button onClick={this.handleBack} className='glow-on-hover header'><span>Go Back</span></button>
                    <Link to='/AddNote'><button className='glow-on-hover header'><span>Add a Note</span></button></Link>
                </div>
            </div>
        )
    }
}

export default Header
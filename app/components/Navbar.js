import React from 'react';
import {Link} from 'react-router';
import NavbarStore from '../stores/NavbarStore';
import NavbarActions from '../actions/NavbarActions';
import Login from './Login';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = NavbarStore.getState();
    this.onChange = this.onChange.bind(this);
  };

  componentDidMount() {
    NavbarStore.listen(this.onChange);

    $('.ui.dropdown').dropdown();
    $('#show-login').popup({ hoverable: true, position: 'bottom right' });
  };

  componentWillUnmount() {
    NavbarStore.unlisten(this.onChange);
  };

  onChange(state) {
    this.setState(state);
  };

  handleSubmit(event) {
    event.preventDefault();
    // Search shit goes here
  };

  render() {
    return (
      <nav id='navbar'>
        <div className='ui secondary pointing menu'>
          <Link to='/' id='home-route' className='item'>
            Home
          </Link>
          <div className='right menu'>
            <div className='item'>
              <div className='ui transparent icon input'>
                <input type='text' placeholder='Search for an user...' />
                <i className="search link icon" />
              </div>
            </div>
            <a id='show-login' className='item'>
              Login
              <i className='dropdown icon' />
            </a>
            <Login />
          </div>
        </div>
      </nav>
    );
  };

};

export default Navbar;
var React = require('react');
var ContactsStore = require('../stores/ContactsStore');
var ViewActionCreators = require('../actions/ViewActionCreators');

var App = React.createClass({
    getInitialState () {
        return ContactsStore.getState();
    },

    componentDidMount () {
        ContactsStore.addChangeListener(this.handleStoreChange);
        ViewActionCreators.loadContacts();
    },

    componentWillUnmount () {
        ContactsStore.removeChangeListener(this.handleStoreChange);
    },

    handleStoreChange () {
        this.setState(ContactsStore.getState());
    },

    deleteUser (user){
        ViewActionCreators.deleteUser(user);
    },

    renderContacts () {
        return this.state.contacts.map((contact) => {
            return <li>{contact.first} {contact.last}
                <button onClick={this.deleteUser.bind(this,contact)}>delete</button>
            </li>;
        });
    },

    render () {
        if (!this.state.loaded) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <ul>{this.renderContacts()}</ul>
            </div>
        );
    }
});

module.exports = App;


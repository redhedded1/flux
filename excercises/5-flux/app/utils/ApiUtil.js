var xhr = require('../lib/xhr');
var { API, ActionTypes } = require('../Constants');
var ServerActionCreators = require('../actions/ServerActionCreators');

var ApiUtils = {
    loadContacts () {
        xhr.getJSON(`${API}/contacts`, (err, res) => {
            ServerActionCreators.loadedContacts(res.contacts);
        });
    },
    deleteUser(contact){
        xhr.deleteJSON('${API}/contact/${contact.id}', (err, res) => {
            ServerActionCreators.deletedUser(contact);
        });
    }
};

module.exports = ApiUtils;


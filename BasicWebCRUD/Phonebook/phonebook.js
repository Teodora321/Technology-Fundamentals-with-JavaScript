/* TODO: 
	create phonebook array
	add methods for adding in the phonebook and getting it
	export the methods
*/
const phonebook = [];

function getContact(){
	return phonebook;
}
function addContact(contact){
	phonebook.push(contact);
}
module.exports={
	getContact,
	addContact
};

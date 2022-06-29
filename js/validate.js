(function() {
	const form = document.getElementById('contact');
	form.addEventListener('submit', function(event) {
		validate(form, event);
	});
})();
function validate(form, event) {
	let value = document.getElementById('name').value;
	if (value === '') {
		alert('Please enter your name');
		event.preventDefault();
		return;
	}
	value = document.getElementById('email').value;
	if (value === '' || value.indexOf('@') === -1 || value.indexOf('.') === -1) {
		alert('Please enter a valid email address.');
		event.preventDefault();
	}
}

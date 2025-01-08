
const body        = document.querySelector('body');
const content_div = document.getElementById('content');

const insertContent = (page) => {
	fetch(page)
	.then(result => result.text())
	.then(data => {
		const dom_parser =  new DOMParser();
		const html_data  = dom_parser.parseFromString(data, 'text/html');
		const script     = html_data.querySelector('script');
		console.log(script);
		if(script)
		{
			body.appendChild(script);
		}
		content_div.innerHTML = data;
	})
};

document.addEventListener('DOMContentLoaded' ,function() {	

	event.preventDefault();

	insertContent('./landing_page.html');	

	const nav_options = document.addEventListener('click', (event) => {
		let target = event.target.attributes;
		let option = target.getNamedItem('name').value;
		console.log(document.getElementById('landing_page'));
		console.log(option == "contacts");
		if (option == "contacts") {
			insertContent('./contatos.html');
		}
		else if (option == "orders") {
			insertContent('./pedidos.html');
		}

	});
});

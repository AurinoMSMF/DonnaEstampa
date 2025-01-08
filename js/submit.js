
let form = document.getElementById('message-form');

form.addEventListener('submit', function (event) {
	event.preventDefault();
	let form_data = new FormData(form);
	createOrder(form_data);
});

const createOrder = function (form_data)
{
	const order = {
		clientName: form_data.get('clientName'),
		cellphone:  form_data.get('cellphone'),
		email:      form_data.get('email'),
		order:      form_data.get('order')
	}
	setOrder(JSON.stringify(order));
	getOrders();
}

let db_order_list = localStorage.getItem('db_order_list') ?? [];

const setOrder = function(order)
{
	db_order_list = JSON.parse(db_order_list);
	console.log(db_order_list);
	db_order_list.push(order);
	localStorage.setItem('db_order_list', db_order_list);
}

const getOrders = function()
{
	console.log(db_order_list);
	return db_order_list;
}

const listOrders = function()
{
	let orders = getOrders();
	console.log(orders);
}

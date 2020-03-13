console.log('HELLO URSUS');

const orders = [];

$(document).ready(init);

function init() {
  // create any event i want to listen for
  $('.js-pizza-add-order').on('submit', submitPizzaOrder);
  $('.js-table-body').on('click', '.js-btn-delete', deleteOrder);

  // $('.js-click-add-order').on('click', clickAddToOrder);
}

function deleteOrder() {
  console.log('DELETE:', this);
  // $(this).parent().parent().remove();
  const orderIndex = $(this).data('index')
  console.log('DELETE:',orderIndex);

  // create a function to adjust price
  orders.splice(orderIndex, 1);

  render();
}

function submitPizzaOrder(event) {
  event.preventDefault();
  console.log('PIZZA YAY!!!');

  const pizzaOrder = {
    pizzaType: $('.js-input-pizza').val(),
    pizzaQuantity: $('.js-input-quantity').val(),
    pizzaPrice: parseFloat($('.js-input-price').val()),
  };

  orders.push(pizzaOrder);
  console.log('ORDERS:', orders);
  render();
}

function render() {
  $('.js-table-body').empty();
  // starting with a base total price to be able to ad order cost to it
  let totalPrice = 0;

  // loop through every item in the orders array
  for (let i = 0; i < orders.length; i++) {
    // TODO: make this add order to DOM
    const individualOrder = orders[i];
    // multiply the price with the quantity and then add it to the totalPrice
    totalPrice += (individualOrder.pizzaPrice * individualOrder.pizzaQuantity);

    // add individual order items to the DOM
    $('.js-table-body').append(`
    <tr>
      <td>${individualOrder.pizzaType}</td>
      <td>${individualOrder.pizzaQuantity}</td>
      <td>$${individualOrder.pizzaPrice}</td>
      <td><button class="js-btn-delete" data-index="${i}">Delete</button></td>
    </tr>
    `);
  }

  // show total price in the DOM
  $('.js-total-price').text(`$${totalPrice}`);

}

// function clickAddToOrder() {
//   console.log('CLICKIDY');
// }
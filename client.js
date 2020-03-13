console.log('HELLO URSUS');

const orders = [];

$(document).ready(init);

function init() {
  // create any event i want to listen for
  $('.js-pizza-add-order').on('submit', submitPizzaOrder);
  $('.js-table-body').on('click', submitPizzaOrder);

  // $('.js-click-add-order').on('click', clickAddToOrder);
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
  let totalPrice = 0;

  for (let i = 0; i < orders.length; i++) {
    // TODO: make this add order to DOM
    const individualOrder = orders[i];
    totalPrice += (individualOrder.pizzaPrice * individualOrder.pizzaQuantity);

    $('.js-table-body').append(`
    <tr>
      <td>${individualOrder.pizzaType}</td>
      <td>${individualOrder.pizzaQuantity}</td>
      <td>$${individualOrder.pizzaPrice}</td>
      <td><button class="js-btn-delete">Delete</button></td>
    </tr>
    `);
  }

  // add sum of prices
  $('.js-total-price').text(`$${totalPrice}`);

}

// function clickAddToOrder() {
//   console.log('CLICKIDY');
// }
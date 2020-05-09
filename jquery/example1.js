// greeting
const name = 'Molly';
const greeting = `Howdy ${name}, please check your order:`;

// set greeting message
$('#greeting').text(greeting);

// user sign
$('#user-sign').append(name).addClass('signature');

const tiles = 20;
const price = 5;
const shipping = 7;

// show values
$('#tiles').append(tiles);
$('#subtotal').append(tiles * price);
$('#shipping').append(shipping);
$('#grandtotal').append((tiles * price) + shipping);

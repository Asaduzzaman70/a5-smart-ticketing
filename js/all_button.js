let button_status = {
    a1: false,
    a2: false,
    a3: false,
    a4: false,
    
    b1: false,
    b2: false,
    b3: false,
    b4: false,

    c1: false,
    c2: false,
    c3: false,
    c4: false,

    d1: false,
    d2: false,
    d3: false,
    d4: false,

    e1: false,
    e2: false,
    e3: false,
    e4: false,

    f1: false,
    f2: false,
    f3: false,
    f4: false,

    g1: false,
    g2: false,
    g3: false,
    g4: false,

    h1: false,
    h2: false,
    h3: false,
    h4: false,

    i1: false,
    i2: false,
    i3: false,
    i4: false,

    j1: false,
    j2: false,
    j3: false,
    j4: false,
};
let selected = document.getElementById('selected');
let selected_number = parseInt(selected.innerText);

let available = document.getElementById('available');
let available_number = parseInt(available.innerText);

// Sum ticket 
let ticket_sum = 0;
let ticket_show_section = document.getElementById('ticket_show_section');

// total price
const total_price = document.getElementById('total_price');

// seat_number
const seat_number = document.getElementById('seat_number');
let seat_number_int = parseInt(seat_number.innerText);

// Coupon 
const coupon = document.getElementById('coupon');
const coupon_apply = document.getElementById('coupon-apply');

// discount price
const discount_price = document.getElementById('discount_price');
let discount_price_float = parseFloat(discount_price.innerText);

// grand_total
const grand_total = document.getElementById('grand_total');
let grand_total_float = parseFloat(grand_total.innerText);

// form section
const phone_number = document.getElementById('phone_number');
const phone_number_int = parseInt(phone_number);
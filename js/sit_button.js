function button_click_caught(button_key){
    if(!button_status[button_key] && selected_number < 4){
        document.getElementById(button_key).style.backgroundColor = 'green';
        // selected
        selected_number += 1;
        selected.innerText = selected_number;
        // Available
        available_number -= 1;
        available.innerText = available_number;
        button_status[button_key] = true;
        // ticket sum
        const ticket_seat = document.createElement('p');
        const ticket_class = document.createElement('p');
        const ticket_price = document.createElement('p');
        ticket_seat.innerText = button_key.toUpperCase();
        ticket_class.innerText = 'Economy';
        ticket_price.innerText = '550';
        ticket_show_section.append(ticket_seat);
        ticket_show_section.append(ticket_class);
        ticket_show_section.append(ticket_price);
        // total price
        ticket_sum += 550;
        total_price.innerText = ticket_sum;
        // seat Number
        seat_number_int += 1;
        seat_number.innerText = seat_number_int;
        // Coupon apply
        if(selected_number === 4){
            coupon_apply.style.backgroundColor = 'green';
        }
        // grand total
        grand_total_float = ticket_sum;
        grand_total.innerText = grand_total_float;



    }
    else{
        return alert('You only 4 Seat select.');
    }
}

// Coupon
document.getElementById('coupon-apply').addEventListener('click', function(){
    const coupon_value = coupon.value;
    if('NEW15' === coupon_value && selected_number === 4){
        total_price_sum = ticket_sum - (ticket_sum*15/100);
        total_price.innerText = total_price_sum;

        // grand total
        grand_total.innerText = total_price_sum;

        discount_price_sum = (ticket_sum*15/100);
        discount_price.innerText = discount_price_sum;

        const coupon_hide = document.getElementById('coupon_hide');
        coupon_hide.style.display = 'none'
    }
    else if('Couple 20' === coupon_value){
        total_price_sum = ticket_sum - (ticket_sum*20/100);
        total_price.innerText = total_price_sum;

        // grand total
        grand_total.innerText = total_price_sum;

        discount_price_sum = (ticket_sum*20/100);
        discount_price.innerText = discount_price_sum;

        const coupon_hide = document.getElementById('coupon_hide');
        coupon_hide.style.display = 'none'
    }
    else if(selected_number < 4){
        return alert('You Select 4 seat then add Coupon.')
    }
    else{
        return alert('Your Coupon Not valid, Please Try Again.')
    }
})

// Form section
document.getElementById('phone_number').addEventListener('keyup', function(event){
    if(selected_number > 0){
        const even_target = event.target.value;
        const text = parseInt(even_target);
        const btn_delete = document.getElementById('next_button');
        if(typeof(text) === 'number'){
            btn_delete.removeAttribute('disabled', false);
        }
    }
    else{
        return alert('Please at first select your seat then add number. Reload your page and select seat.')
    }

})


for(const button_sta in button_status){
        document.getElementById(button_sta).addEventListener('click', function(){
        button_click_caught(button_sta);
    })
}
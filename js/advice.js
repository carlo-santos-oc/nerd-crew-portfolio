'use strict';

let adviceContain = $('#advice');
$.ajax({

    type: 'GET',
    url: 'https://api.adviceslip.com/advice',
    success: function (data) {
        let slipObject = JSON.parse(data);
        adviceContain.append(`<p class="slip">${slipObject.slip.advice}</p>`);
    }
});
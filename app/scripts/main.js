'use strict';

(function () {

    // Define vars and get hold of input fields
    var xInput = $('.x-value'),
        yInput = $('.y-value'),
        addBtn = $('.btn-add'),
        subBtn = $('.btn-sub'),
        result = $('.show-result');

    // Add value
    $(addBtn).on('click', function(e) {
        e.preventDefault();
        var sum = Number($(xInput).val()) + Number($(yInput).val());
        result.show().html(xInput.val() + ' plus ' + yInput.val() + ' = ' + '<strong>' + sum + '</strong>');
        return sum;
    });

    // Subtract Value
    $(subBtn).on('click', function(e) {
        e.preventDefault();
        var sub = Number($(xInput).val()) - Number($(yInput).val());
        result.show().html(xInput.val() + ' minus ' + yInput.val() + ' = ' + '<strong>' + sub + '</strong>');
        return sub;
    });

})();

/**
 * Created by anthony on 10/22/16.
 */

//API by Anthony
var userAPI = '/userlist';

// console.log('hello');

$.ajax({
    url: userAPI,
    method: 'GET'
}).done(function (response) {
    $.each(response, function (key, value) {


        // console.log(key);
        // console.log(value);
        $('#userlist').append('<li class="collection-item click-to-call" data-user="' + value.username + '"><div>' + value.username + '<a href="#!" class="secondary-content"><i class="material-icons red-text text-darken-4">videocam</i></a> <a href="#!" class="secondary-content"><i class="material-icons red-text text-darken-4">chat</i></a> <a href="#!" class="secondary-content"><i class="material-icons red-text text-darken-4">phone</i></a></div></li>');

    });

});

$(document).on('click','.click-to-call', function () {
    console.log($(this).attr('data-user'));
});
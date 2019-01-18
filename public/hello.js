$(document).ready(function() {
    $.ajax({
        url: "service"
    }).then(function(data) {
       $('.greeting-content').append(data);
    });
});
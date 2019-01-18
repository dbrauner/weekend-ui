$(document).ready(function() {
    $.ajax({
        url: "https://weekend-backend.cfapps.sap.hana.ondemand.com"
    }).then(function(data) {
       $('.greeting-content').append(data);
    });
});
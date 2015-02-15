$(document).ready(function() {
    $(".prices").hide();
    
    $("input[name$='subscription-period']").click(function() {
        var test = $(this).val();
        $(".prices").hide();
        $(".prices[data-period='" + test + "']").show();
    });
});
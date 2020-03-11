// handling increase the number of products
$(document).ready(function() {
    var max_pd = 10;
    $("button[type='submit'].plus").click(function() {
        var num_of_pd = parseInt($(this).parent('.input-quantity').children('input#quantity').val());
        num_of_pd ++;
        if(num_of_pd > max_pd) {
            num_of_pd --;
            alert('Hãy gọi điện cho shop nến bạn mún đặt số lượng nhiều hơn nhé');
        }
        $(this).parent('.input-quantity').children('input#quantity').val(num_of_pd);
    });
    $("button[type='submit'].minus").click(function() {
        var num_of_pd = parseInt($(this).parent('.input-quantity').children('input#quantity').val());
        num_of_pd --;
        if(num_of_pd < 1) {
            alert('Bạn phải đặt tối thiểu là 1 sản phẩm');
            return false;
        }
        $(this).parent('.input-quantity').children('input#quantity').val(num_of_pd);
    });
});
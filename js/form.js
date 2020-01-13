$(function () {
    $('.form-content input').on('focus', function () {
        $(this).siblings('label').css({
            top: '-30px',
            color: '#e21f25',
            fontSize: '13px',
            fontWeight: 'bold',
            transition: 'all .3s ease-in-out'
        });
        $(this).siblings('.form-border').css('width', '100%')
    });
    $('#date, .form-content input').on('change', function () {
        $(this).siblings('label').css({
            top: '-30px',
            color: '#2d3e50',
            fontSize: '13px',
            fontWeight: 'bold',
        });
        $(this).siblings('.form-border').css({
            width: '100%',
            backgroundColor: '#2d3e50'
        })
    });
    $('.form-content input').on('blur', function () {
        if ($(this).val() !== '') {
            false
        } else {
            $(this).siblings('label').css({
                top: '15%',
                color: '#999',
                fontSize: '16px',
                fontWeight: 'normal',
                transition: 'all .3s ease-in-out'
            });
            $(this).siblings('.form-border').css({
                width: '0%',
                backgroundColor: '#e21f25'
            })
        }
    });
    $('.mobile').on('input', function () {
        if (isNaN($(this).val())) {
            $(this).val('')
        }
    });
    // Submit
    $('form .submit').on('click', function (e) {
        e.preventDefault()
        if ($('input').val() === '') {
            $('.alert').slideDown(1000)
        } else {
            $('.alert').fadeOut(1000)
        }
    })
    
    // Date Picker
    $('[data-toggle="datepicker"]').datepicker();
});
$(document).ready(function () {
    $('.products_docs_box_keys ul li').click(function () {
        var index = $(this).index();
        $('.products_docs_box_keys ul li').removeClass('active');
        $(this).addClass('active');
        $('.product_doc_door').removeClass('active');
        $('.product_doc_door').eq(index).addClass('active');
    });

    $('.products_docs_box_keys ul li').first().addClass('active');
    $('.product_doc_door').first().addClass('active');
});

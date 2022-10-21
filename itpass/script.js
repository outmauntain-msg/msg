$(function(){
    $(".btn").on("click", function(){
        console.log($(this).parent().data("ans"));
        $(this).text($(this).parent().data("ans")).off("click");
    })
})
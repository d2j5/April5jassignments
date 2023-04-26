
$(function() {
    $("#submit").on("click", function(e) {
e.preventDefault();

    let name = $('#name').val();      //$('') = document.getElementById('')'
    console.log(name);
    let email = $('#email').val();
    let phone = $('#phone').val();
    
    let required = [name, email, phone];

    for (let i = 0; i < required.length; i++) {
        if (required[i] == '') {
            $("#message").text("Please Fill Out Required Fields").addClass("warning");
            $("label").eq(i).addClass("warning");
            $("input").eq(i).on("change", function() {
            $("label").eq(i).removeClass("warning");
             })
        } else {
            $("#message").html("").removeClass("warning");
            $("label").eq(i).removeClass("warning");
        } 
        }  if (!$("label").hasClass("warning")) {
    $('#form').remove();
    $("h2").html('Thanks for your feedback!');
}
})
});
function fun() {
    var l   = [];
    var n   = $("#name").val();
    var e   = $("#email").val();
	var pwd = $("#password").val();
    var p   = $("#phn").val();
    var ph  = $("#photo").val();
    var j   = $('input[name="gender"]:checked').val();;
    var selected = new Array();
    $("input[type=checkbox]:checked").each(function () {
        selected.push(this.value);
    });
    var k = '<div class=s1>'+'<table><tr><td><p class="p"><strong>Name </strong>:'+`${n}`+'</p><p class="p"><strong>Email </strong>: '+`${e}`+'</p><p class="p"><strong>Password </strong>:'+`${pwd}`+'<p class="p"><strong>Phone </strong>:'+`${p}`+'</p><p class="p"><strong>Gender</strong> : '+`${j}`+'</p><p class="p"><strong>Skills</strong> : '+`${selected}`+'<td><img src="'+`${ph}`+'"></td></tr></table> </div>';
    $('#s').append(k);
    $("#fo").trigger("reset");
}
$(".part-one").show();
$(".toby-sele").hide();
$(".tommy-sele").hide();
$(".b-b").hide();
$(".part-three-toby").hide();
$(".part-three-tommy").hide();
$(".part-three-img").hide();
$(".part-three-button").hide();
$(".part-four-yes").hide();
$(".part-four-no").hide();
$(".part-five").hide(); 
$(".part-six-spoke").hide();
$(".part-six-toby").hide();
$(".part-six-tommy").hide();
$(".part-six-tbutton").hide(); 
$(".part-six-tobutton").hide(); 
$(".part-seven-toby").hide();
$(".part-seven-tommy").hide();
$(".part-seven-img2").hide();
$(".part-seven-button").hide();
$(".part-eight").hide();
 
$(".tobyb").click(function() {
    $(".toby-sele").show();
    $(".part-one").hide();
    $(".b-b").show();
});
$(".tommyb").click(function() {
    $(".tommy-sele").show();
    $(".part-one").hide();
    $(".b-b").show();
});

$(".begin-button").dblclick(function() {
    $(".part-three-toby").show();
    $(".toby-sele").hide();
    $(".b-b").hide();
    $(".part-three-img").show(); 
    $(".part-three-button").show(); 
});

$(".begin-button").dblclick(function() {
    $(".tommy-sele").hide();
     $(".b-b").hide();
    $(".part-three-img").show();
     $(".part-three-tommy").show();
     $(".part-three-toby").hide();
});

$(".part-three-yes").click(function() {
    $(".part-four-yes").show();
     $(".part-three-toby").hide();
     $(".part-three-tommy").hide();
    $(".part-three-img").hide();
    $(".part-three-button").hide();
});

$(".part-three-no").click(function() {
    $(".part-four-no").show();
     $(".part-three-toby").hide();
     $(".part-three-tommy").hide();
    $(".part-three-img").hide();
    $(".part-three-button").hide();
});

$(".part-four-img").dblclick(function() {
    $(".part-five").show();
     $(".part-four-yes").hide();
});

$(".part-four-img").dblclick(function() {
    $(".part-five").show(); 
    $(".part-four-yes").hide();
});

$(".part-four-spoke").hover(function() {
    $(".part-four-spoke").css("color","#ff66ff");
});

$(".part-four-spoke").dblclick(function() {
    $(".part-five").show(); 
    $(".part-four-no").hide();
});

$(".part-five-img").click(function() {
    $(".part-five").hide(); 
    $(".part-six-spoke").show();
    $(".part-six-toby").show(); 
    $(".part-six-tbutton").show(); 
});

$(".part-five-button").dblclick(function() { 
    $(".part-five").hide(); 
    $(".part-six-spoke").show();
     $(".part-six-tommy").show();
    $(".part-six-toby").hide();
     $(".part-six-tobutton").show(); 
});

$(".part-six-tbutton").click(function() {
    $(".part-six-spoke").hide(); 
    $(".part-seven-toby").show();
     $(".part-seven-img2").show();
    $(".part-six-toby").hide();
     $(".part-seven-button").show(); 
    $(".part-six-tbutton").hide();
});

$(".part-six-tobutton").click(function() {
    $(".part-six-spoke").hide(); 
    $(".part-seven-tommy").show();
     $(".part-seven-img2").show();
    $(".part-six-tommy").hide();
     $(".part-seven-button").show();
    $(".part-six-tobutton").hide(); 
}); 

$(".part-seven-img").dblclick(function() {
    $(".part-eight").show();
    $(".part-seven-tommy").hide();
    $(".part-seven-img2").hide();
    $(".part-seven-button").hide();
});
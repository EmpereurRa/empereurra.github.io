var upvotenum = 0;
document.getElementById("buttonu").onclick = function(){
	upvotenum++;
	document.getElementById("comfirmu").innerHTML = upvotenum;
}
var downvotenum = 0;
document.getElementById("buttond").onclick = function(){
	downvotenum++;
	document.getElementById("comfirmd").innerHTML = downvotenum;
}
var elem = document.getElementById('succtext');
if(upvotenum>downvotenum){
  elem.style.color = lightgreen;
}
else{
  elem.style.color = lightred;
}


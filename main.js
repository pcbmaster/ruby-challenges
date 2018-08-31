function sortString(s) {
    s.toLowerCase();
    n=[];
    for(i=0; i<s.length; i++){
	n[i] = s.charCodeAt(i);
    }
    n.sort(function(a, b){return a - b});
    o="";
    n.forEach(function(e){
	o += String.fromCharCode(e);
    });
    return o;
}

function capWords(s) {
    words = s.split(' ');
    sentance = "";
    words.forEach(function(word) {
	upper = word.toUpperCase();
	word.setCharAt(0, upper.charAt(0));
	sentance += word + ' ';
    });
    return sentance;
}

//Test Function Calls
console.log(sortString("gfedcba"));
console.log(capWords("hello world, i'd like to sing you a song"));

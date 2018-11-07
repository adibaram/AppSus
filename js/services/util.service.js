

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function makeId(length=5) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (var i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }

function makeLorem(num) {
    var text = "";
    var texts = ''; 
    var possible = "abcdefghijklmnopqrstuvwxyz";
    
    for (let j = 0; j < num+1; j++) {
        for (let j = 0; j < Math.random()*num; j++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        texts += (' '+ text)
    }
    return texts;
}

export default {
    getRandomInt,
    makeId,
    makeLorem
}


'use strict';

var http = require('http');
var md5  = require('md5');
var request = require('request');
var math = require('./math');

var port = 3000;

var server = http.createServer(requestHandler);
  
function requestHandler (req, res) {

  res.setHeader('Access-Control-Allow-Origin','http://localhost:8000')

  console.log('\n\nurl:', req.url);

  var params = req.url.split('/');
  var lib = params[1];
  var operator = params[2];
  var args = params.slice(3);
  console.log('lib ',lib)
  console.log('operator', operator)
  console.log('args', args)

  switch (lib) {

    case 'math':
      var result = (math[operator]) ? math[operator](args) : 'unknown operation'
      console.log('result', typeof result);
      res.end('\n' + JSON.stringify(result) + '\n');
      break;

    case 'gravatar':
      console.log('finding gravatar address of ', operator);
      var emailHash = md5(operator);
      var gravUrl = 'https://secure.gravatar.com/avatar/' + emailHash;
      res.end('\n' + JSON.stringify(gravUrl) + '\n');
      break;

    case 'sentence':
      console.log('switch case sentence')
      var sentence = decodeURI(operator + ' a');
      console.log('decoded scentence: ', sentence)
      var words = sentence.match(/\S+/g).length - 1;
      var chars = sentence.match(/\S/g).length - 1;
      var spaces = sentence.match(/\s/g).length - 1;
      var strData = {
        words: words,
        chars: chars,
        spaces: spaces,
        avgWrdLen: words ? chars/words : 0
      }
      res.end('\n' + JSON.stringify(strData) + '\n');
    break;


    default:
    res.end('\nunknown operation\n');
  }

}

server.listen(port);
console.log('node server listening on port :' + port)









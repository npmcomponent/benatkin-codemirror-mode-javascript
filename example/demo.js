var codemirror = require('codemirror');
require('codemirror-mode-javascript')(codemirror);
var textarea = document.getElementById('source');
codemirror.fromTextArea(textarea);

(function(){
  var codeField = document.getElementById('code');
  var output = document.getElementById('output');
  document.getElementById('run').addEventListener('click', function(){
    try {
      var result = eval(codeField.value);
      if (result !== undefined) {
        output.textContent = String(result);
      } else {
        output.textContent = '';
      }
    } catch (e) {
      output.textContent = e.toString();
    }
  });
})();

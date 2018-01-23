
// this functions adds a a table row to the table
const createRow = function (value) {
  let table = document.getElementsByTagName('table');
  const row = document.createElement('tr');
  const data = document.createElement('td');
  data.innerHTML = value;
  row.appendChild(data);
  console.log('table', table);
  table[0].appendChild(row);
};

// this function send the value to the server to process and returns a response
const handleSubmit = function (e) {
  e.preventDefault();
  const wordNode = document.getElementsByName('sort-value');
  const value = wordNode[0].value;
  wordNode[0].value = '';

  // ajax request
  $.post({
    url: 'http://127.0.0.1:4000/sort',
    data: { word: value },
    success: function (response) {
      createRow(response);
      wordNode.innerHTML = '';
    },
    error: function (error) {
      console.log('error', error);
    }
  });
};

// add event listener to button
const $button = $('button');
$button.on('click', handleSubmit);
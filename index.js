const handleClick = function (e) {
  e.preventDdefault();
  let word = e.target;
  console.log('word is', word);
}
let p = document.querySelector('.greet');
  p.after('ここは柳町有俊のHPです。');

const table = document.getElementsByClassName('table');
for(let i = 0; i < table.length; i++){
  const table_row = table[i];
  table_row.computedStyleMap.bgcolor = black;
}
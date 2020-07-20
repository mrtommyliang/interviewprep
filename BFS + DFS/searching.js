let beasts = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie'];

beasts.indexOf('Godzilla');
// 1

beasts.findIndex(function (item) {
  return item === 'Godzilla';
});
// 1

beasts.find(function (item) {
  return item === 'Godzilla';
})
// 'Godzilla'

beasts.includes('Godzilla')
// true
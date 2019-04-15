var path = require('path');
var app = require(path.resolve(__dirname, '../server'));

var dataSource = app.dataSources.accountDs;

dataSource.discoverAndBuildModels('Siswa', {schema: 'loopback_test'},
    function(err, models) {
  if (err) throw err;

  models.Siswa.find(function(err, siswas) {
    if (err) return console.log(err);

    console.log(siswas);

    dataSource.disconnect();
  });
});

var path = require('path');
var app = require(path.resolve(__dirname, '../server'));

var siswas = [
  {
    Nama: 'Riki Setiyo Pambudi',
    Kelas: 'XII RPL B',
    Email: 'Setiyoriki589@gmail.com',
    Password:'21232f297a57a5a743894a0e4a801fc3',
    Image:'riki.jpg'
  }
];
var dataSource = app.dataSources.accountDs;

dataSource.automigrate('Siswa', function(err) {
  if (err) throw err;

  var Siswa = app.models.Siswa;
  var count = siswas.length;

  siswas.forEach(function(ssiswa) {
    ssiswa.create(ssiswa, function(err, record) {
      if (err) return console.log(err);

      console.log('Record created:', record);

      count--;

      if (count === 0) {
        console.log('done');
        //dataSource.disconnect();
      }
    });
  });
});

dataSource.automigrate('User', function(err) {
  if (err) throw err;

  console.log('User model migrated');
  //dataSource.disconnect();
});
dataSource.automigrate('AccessToken', function(err) {
  if (err) throw err;

  console.log('AccessToken model migrated');
  //dataSource.disconnect();
});
dataSource.automigrate('ACL', function(err) {
  if (err) throw err;

  console.log('ACL model migrated');
  //dataSource.disconnect();
});
dataSource.automigrate('RoleMapping', function(err) {
  if (err) throw err;

  console.log('RoleMapping model migrated');
  //dataSource.disconnect();
});
dataSource.automigrate('Role', function(err) {
  if (err) throw err;

  console.log('Role model migrated');
  dataSource.disconnect();
});

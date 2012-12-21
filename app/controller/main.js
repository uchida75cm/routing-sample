var app = module.parent.exports;

module.exports = function (options) {

  app.get('/', function(req, res){
    res.render('index', { title: 'Express' });
  });

  app.get('/hoge', function(req, res){
    res.render('index', { title: 'Hoge' });
  });

  app.get('/fuga', function(req, res){
    res.render('index', { title: 'Fuga' });
  });

  app.get('/hogehoge', function(req, res){
    res.render('index', { title: app.hogehoge });
  });

  app.get('/piyo', function(req, res){
    res.render('index', { title: options.piyo });
  }); 

}

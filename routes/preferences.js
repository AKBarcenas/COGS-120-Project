exports.view = function(req, res){
  showAlternate = false;
  res.render('preferences', showAlternate);
  //res.render('preferences', {'showAlternate': 'false'});
};

exports.viewAlt = function(req, res){
  showAlternate = true;
  //res.render('preferences', showAlternate);
  res.render('preferences', {'showAlternate': 'true'});
}
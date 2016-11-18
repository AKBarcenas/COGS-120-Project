exports.view = function(req, res){
  
  res.render('preferences', {'showAlternate': 'false'});
};

exports.viewAlt = function(req, res){
  res.render('preferences', {'showAlternate': 'true'});
}
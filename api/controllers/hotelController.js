exports.getAll                  = function(req, res) {

  var hotels                    = { 
    "hotels" : [

      {
        "name" : "Hotel Emperador",
        "stars" : "3",
        "price" : "1596"
      },
      {
        "name" : "Petit Palace San Bernardo",
        "stars" : "4",
        "price" : "2145"
      },
      {
        "name" : "Hotel Nuevo Boston",
        "stars" : "2",
        "price" : "861"
      }
    ]
  };
  res.status(200).json(hotels);
  
};
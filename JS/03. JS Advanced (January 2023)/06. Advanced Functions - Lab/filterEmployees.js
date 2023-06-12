function Main(data, criteria) {
  data = JSON.parse(data);
  criteria = criteria.split("-");
  let result = [];
  data.map((e) => {
    if (e[criteria[0]] === criteria[1]) {
      result.push(e);
    }
  });
  let counter = -1;
  console.log(
    result
      .map((e) => {
        counter++;
        return `${counter}. ${e.first_name} ${e.last_name} - ${e.email}`;
      })
      .join("\n")
  );
}

Main(
  `[{

    "id": "1",
    
    "first_name": "Kaylee",
    
    "last_name": "Johnson",
    
    "email": "k0@cnn.com",
    
    "gender": "Female"
    
    }, {"id": "2", "first_name": "Kizzee", "last_name": "Johnson", "email": "kjost1@forbes.com", "gender": "Female" }, { "id": "3", "first_name": "Evanne", "last_name": "Maldin", "email": "emaldin2@hostgator.com", "gender": "Male" }, { "id": "4", "first_name": "Evanne", "last_name": "Johnson", "email": "ev2@hostgator.com", "gender": "Male" }]`,
  "last_name-Johnson"
);

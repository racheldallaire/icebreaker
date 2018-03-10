module.exports = function makeDataHelpers(knex) {

  return {
        getAllUsers: function () {
      knex
        .select("*")
        .from("users")
        .then((result) => {
          console.log(result)
          return result;
        })
    }


  }
}



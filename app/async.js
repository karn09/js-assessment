exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise(function(resolve, reject) {
      if (value) resolve(value);
      reject(value);
    })
  },

  manipulateRemoteData: function(url) {
    // assuming that 'people' and 'name' exists as keys, with $ in global.
    return $.getJSON(url)
      .then(function(data) {
        return data.people.map(function(person) {
          return person.name;
        }).sort()
      })
  },
  
};

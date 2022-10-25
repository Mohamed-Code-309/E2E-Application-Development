const ROLE = {
    ADMIN: 'admin',
    BASIC: 'basic'
  }
  
  module.exports = {
    ROLE: ROLE,
    users: [
      { id: 1, name: 'Kyle', role: ROLE.ADMIN },
      { id: 2, name: 'Sally', role: ROLE.BASIC },
      { id: 3, name: 'Joe', role: ROLE.BASIC }
    ],
    projects: [
      { id: 1, name: "Kyle's Project", userId: 1 },
      { id: 2, name: "Sally's Project", userId: 2 },
      { id: 3, name: "Joe's Project", userId: 3 },
      { id: 4, name: "Joe's Project - part2", userId: 3 }
  
    ],
    posts : [ // = wrong
        {id : 1, name: 'Post 1'},
        {id : 2, name: 'Post 2'},
        {id : 3, name: 'Post 3'},
        {id : 4, name: 'Post 4'},
        {id : 5, name: 'Post 5'},
        {id : 6, name: 'Post 6'},
        {id : 7, name: 'Post 7'},
        {id : 8, name: 'Post 8'},
        {id : 9, name: 'Post 9'},
        {id : 10, name: 'Post 10'},
        {id : 11, name: 'Post 11'},
        {id : 12, name: 'Post 12'},
        {id : 13, name: 'Post 13'}
    ]
  }



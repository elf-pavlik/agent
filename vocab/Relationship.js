module.exports = {
  id: 'Relationship',
  collection: 'relationships',
  prefixes: require('./prefixes'),
  description: 'A relationship between multiple agents.',
  context: 'hol:Relationship',
  properties: {
    type: {
      description: 'The type of agent relationship.',
      context: 'hol:relationshipType',
      $ref: 'RelationshipType'
    },
    description: {
      description: "A description of the agents' relations.",
      context: 'schema:description',
      type: 'string'
    },
    roles: {
      description: 'The roles within this relationship.',
      context: 'hol:relationshipRole',
      type: 'array',
      items: {
        $ref: 'Role'
      },
      get: {
        deps: ['$roles'],
        fn: function (allRoles) {
          return allRoles
          .find({
            path: ['relationship'],
            eq: this.id
          })
        }
      }
    }
  }
}

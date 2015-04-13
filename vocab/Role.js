module.exports = {
  id: 'Role',
  collection: 'roles',
  prefixes: require('./prefixes'),
  description: 'A role filled by an agent.',
  context: 'hol:Role',
  properties: {
    type: {
      description: 'The type of agent role.',
      context: 'hol:roleType',
      $ref: 'RoleType'
    },
    agent: {
      description: 'The agent filling the role.',
      context: 'hol:filledBy',
      $ref: 'Agent'
    },
    relationship: {
      description: 'The relationship (if any) that contains this role.',
      context: 'hol:relationship',
      $ref: 'Relationship'
    }
  }
}

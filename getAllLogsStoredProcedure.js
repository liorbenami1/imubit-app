let self = module.exports = {
  init: async () => {
    for (let sproc of self.sprocs) {
      await _db.rawSql(`DROP PROCEDURE IF EXISTS ${sproc.name}`)
      await _db.rawSql(`${sproc.query}`)
      console.log(`STORED PROCEDURE: ${sproc.name} ADDED`)
    }
  },
  sprocs: [
    {
      name: 'getAllLogstoredProcedure',
      query: `
        CREATE PROCEDURE getAllLogstoredProcedure(IN done BOOLEAN)
        BEGIN
        SELECT *
        FROM log_table;
        END
        `
    }
  ]
}

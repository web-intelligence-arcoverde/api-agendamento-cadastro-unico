import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TimeDays extends BaseSchema {
  protected tableName = 'time_days'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.dateTime("hour")
      table.boolean("isActive")


      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

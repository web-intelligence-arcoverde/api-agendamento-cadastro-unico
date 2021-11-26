import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class DayMonths extends BaseSchema {
  protected tableName = 'day_months'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.date("date")
      table.boolean("isActive")


      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

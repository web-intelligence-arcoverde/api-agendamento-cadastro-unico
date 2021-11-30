import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'



class HourConfig {
  hour: number
  isActive: boolean

  constructor(hour: number, isActive: boolean) {
    this.hour = hour;
    this.isActive = isActive
  }

  greet() {
    return "Hello, " + this.hour;
  }
}

export default class HoursAppointmentsController {

  public async getAllHoursAppointmentDay({ response }: HttpContextContract) {

    var result = [];
    var nowHour = 0;

    for (var i = nowHour; i < 24; i++) {
      result.push({ hour: i, isActive: false });
    }

    const getAllDaysInMonth = (month, year) =>
      Array.from(
        { length: new Date(year, month, 0).getDate() - 1 },
        (_, i) => new Date(year, month, i + 1)
      );


    const year = new Date()
    var smonth = year.getMonth()
    var syear = year.getFullYear()
    const example = getAllDaysInMonth(smonth, syear).map(x => x.toLocaleDateString())

    return response.json(result)
  }

}

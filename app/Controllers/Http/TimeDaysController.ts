import TimeDay from 'App/Models/TimeDay'

export default class TimeDaysController {
  public async register() {

    var result = [];
    var nowHour = 0;

    for (var i = nowHour; i < 24; i++) {
      result.push({ hour: i, isActive: false });
    }

    await TimeDay.createMany(result)

  }


}

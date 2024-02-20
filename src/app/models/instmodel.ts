export class Incomestatement {

  constructor(
    public id: {type: string},
    public dateRangeStart:Date,
    public dateRangeEnd: Date,
    public total: {type: number},
    public account: { type: string },
    public firstMonth: { type: number },
    public secondMonth: { type: number },
    public thirdMonth: { type: number },


  ) {}
}

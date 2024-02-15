export class Incomestatement {
  constructor(
    public id: {
      type: string;
      required: true;
    },
    public dateRangeStart:string,
    public dateRangeEnd: string,
    public total: {
      type: number;
      required: true;
    },

    public account: { type: string },
    public firstMonth: { type: number },
    public secondMonth: { type: number },
    public thirdMonth: { type: number },

    public reportDate: {
      type: Date;
      required: true;
    }
  ) {}
}

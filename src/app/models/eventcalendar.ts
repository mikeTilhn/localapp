export class Evtcalendar {
  constructor(
    public id: {
      type: string,
      required: true
    },
    public organizer: {
      type: string,
      required: true
    },
    public startDate:
      {
        type: Date,
        required: true
      },
    public endDate: {
      type: Date,
      required: true
    },
    public evtName: {
      type: string,
      required: true
    },
    public evtType: {
      type: string,
      required: true
    },
    public evtLocation: {
      type: string,
      required: true
    },
    public description: {
      type: string,
      required: true
    },
  ) { }
}



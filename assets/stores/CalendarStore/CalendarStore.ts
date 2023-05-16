import { action, computed, observable } from 'mobx';
import moment, { Moment } from 'moment';

export class CalendarStoreClass {
    @observable today?: Moment;
    @observable startOfWeek?: Moment;
    @observable endOfWeek?: Moment;

    @action init() {
        this.today = moment();
        this.startOfWeek = moment().startOf('isoWeek');
        this.endOfWeek = moment().endOf('isoWeek');
    }

    @action isToday(todayNumber: string) {
        return todayNumber === this.today?.format('D');
    }

    @action isSunday(todayNumber: string) {
        return todayNumber === this.endOfWeek?.format('D');
    }

    @computed get startWeek() {
        return moment(this.startOfWeek);
    }
}

export const CalendarStore = new CalendarStoreClass();

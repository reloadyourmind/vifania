import { t } from 'i18next';
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

    @computed get weekInterval() {
        const interval = [
            this.startOfWeek?.format('D'),
            t(`Calendar.Month.${this.startOfWeek?.format('MMMM')}`),
            '—',
            this.endOfWeek?.format('D'),
            t(`Calendar.Month.${this.endOfWeek?.format('MMMM')}`),
            this.endOfWeek?.format('YYYY'),
            t(`Calendar.Year.Short`),
        ];

        return interval.join(' ');
    }
}

export const CalendarStore = new CalendarStoreClass();

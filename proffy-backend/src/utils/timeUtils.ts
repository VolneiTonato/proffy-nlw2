export default class TimeUtils {
    static convertHourToMinutes(time: string) {
        const [hour, minutes] = time.split(':').map(Number);

        return hour * 60 + minutes;
    }
}

import Vue    from 'vue';
import moment from 'moment';

Vue.filter('date', (string) => {
    return string
        ? moment(string).format('MM-DD-YYYY')
        : moment().format('MM-DD-YYYY');
});

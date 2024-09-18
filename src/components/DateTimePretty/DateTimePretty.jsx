// import React from 'react';
import moment from 'moment';

export function DateTimePretty(WrappedComponent) {
    return function EnhancedComponent(props) {
        const now = moment();
        const date = moment(props.date);
        let formattedDate;

        const duration = moment.duration(now.diff(date));

        if (duration.asMinutes() < 60) {
            formattedDate = `${Math.floor(duration.asMinutes())} минут назад`;
        } else if (duration.asHours() < 24) {
            formattedDate = `${Math.floor(duration.asHours())} часов назад`;
        } else {
            formattedDate = `${Math.floor(duration.asDays())} дней назад`;
        }

        return <WrappedComponent {...props} date={formattedDate} />;
    };
}

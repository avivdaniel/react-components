import React from 'react';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export function DayOfWeek(props) {
    return (
        <p>{days[props.day]} </p>
    )
}
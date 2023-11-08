import React, { FC, useMemo } from "react";
import "./SchedularPage.scss";

import { Calendar, Views, dayjsLocalizer } from 'react-big-calendar'
import dayjs from "dayjs";



const SchedularPage: FC = () => {

    const { defaultDate, scrollToTime } = useMemo(
        () => ({
            defaultDate: new Date(),
            scrollToTime: new Date(1970, 1, 1, 6),
        }),
        []
    )
    const djLocalizer = dayjsLocalizer(dayjs)
    return (
        <div className='schedular-page-body'>
            <div className="toolbox">
                toolbox
            </div>
            <div className="schedular-container">
                <Calendar
                    localizer={djLocalizer}
                    defaultDate={defaultDate}
                    defaultView={Views.WEEK}
                    events={[]}
                    selectable
                    scrollToTime={scrollToTime}
                    messages={{
                        week: 'Неделя',
                        work_week: 'Рабочая неделя',
                        day: 'День',
                        month: 'Месяц',
                        previous: 'Назад',
                        next: 'Вперед',
                        today: `Текущий момент`,
                        agenda: 'Список',
                        showMore: (total) => `+${total} плюс`,
                    }}
                />
            </div>
        </div>)

};

export default SchedularPage;

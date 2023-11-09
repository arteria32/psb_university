import React, { FC, useEffect, useMemo, useState } from "react";
import "./SchedularPage.scss";

import { Calendar, Views, dayjsLocalizer } from 'react-big-calendar'
import dayjs from "dayjs";
import { Lesson } from "../../../../types/lesson";
const djLocalizer = dayjsLocalizer(dayjs)

type CalendarEvent = {
    id: number,
    title: string,
    start: Date, end: Date
}

const parseLessonToEvent = (lesson: Lesson): CalendarEvent => ({ id: lesson.id, title: lesson.name, start: dayjs().toDate(), end: dayjs().add(1, 'day').toDate() })


const SchedularPage: FC = () => {

    const { defaultDate, scrollToTime } = useMemo(
        () => ({
            defaultDate: new Date(),
            scrollToTime: new Date(1970, 1, 1, 6),
        }),
        []
    )
    /* 1. Забор уроков c бека  */
    const [curLessons, setCurLessons] = useState<Lesson[]>([])
    useEffect(() => {
        setCurLessons([
            {
                "id": 0,
                "name": "Математика",
                "description": "string",
                "urls": [
                    "string"
                ],
                "programModelId": 0
            }
        ])
    }, [])

    /*  */
    /* 2. Парсим события  */
    const [curEvents, setCurEvents] = useState<CalendarEvent[]>([])
    useEffect(() => {
        console.log("curSel", curLessons)
        setCurEvents(curLessons.map(parseLessonToEvent))
    }, [curLessons])

    /* 3. Открываем урок  */
    const handleSelectEvent = (event: CalendarEvent) => {
        window.open(`${window.location.origin}/lesson/${event.id}`)
    }

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
                    events={curEvents}
                    selectable
                    scrollToTime={scrollToTime}
                    onSelectEvent={handleSelectEvent}
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

type Notification = {
    text: string;
    id: string;
};

export const NOTIFICATIONS: Notification[] = [
    { id: 'typeSessionStudent', text: 'Lectures (for students)' },
    { id: 'typeDeadline', text: `Deadlines (for students)` },
    { id: 'typeStatusStudent', text: 'Tasks (for students)' },
    { id: 'typeScore', text: `Score (for students)` },
    { id: 'typeSessionLecturer', text: 'Lectures (for mentors)' },
    { id: 'typeStatusMentor', text: 'Ready for Review Tasks (for mentors)' },
];

export const TIME_OPTIONS: string[] = [
    '00:00',
    '01:00',
    '02:00',
    '03:00',
    '04:00',
    '05:00',
    '06:00',
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00',
];

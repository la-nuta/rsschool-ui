export interface IProfile {
    city: string;
    emails: Array<{ value: string; type: string | undefined }>;
    employmentHistory: string;
    englishLevel: string;
    firstName: string;
    firstNameNative: string;
    isInternshipNeeded: boolean;
    isWorkNeeded: boolean;
    lastName: string;
    lastNameNative: string;
    notes: string;
    phone: string;
    primaryEducation: {
        university: string;
        graduationYear: string;
        faculty: string;
    };
    notifications: {
        fromTime?: string;
        readyToReceive: string;
        toTime?: string;
        telegramUserName?: string;
        types?: INotificationsTypes;
    };
}

export interface INotificationsTypes {
    sessionStudent: string;
    deadline: string;
    statusStudent: string;
    score: string;
    sessionLecturer: string;
    statusMentor: string;
}

export interface IUserBase {
    _id: string;
}

export interface IUserSession extends IUserBase {
    role: 'mentor' | 'student';
    isAdmin: boolean;
}

export interface IUserParticipation {
    _id: string;
    isActive: boolean;
    courseId: string;
    role: 'mentor' | 'student';
}

export interface IUser extends IUserSession {
    profile: Partial<IProfile>;
    participations: IUserParticipation[];
}

export enum FeedPriority {
    Critical = 0,
    High = 5,
    Medium = 10,
    Low = 15,
}

export interface IFeedRecord {
    priority?: FeedPriority;
    dateTime: number;
    actionType: Actions;
    data: any;
    courseId?: string;
    userId: string;
    entityType: FeedEntities;
}

export enum FeedEntities {
    Course = 'Course',
    Task = 'Task',
    User = 'User',
    Event = 'Event',
    Participation = 'Participation',
}

export enum FeedActions {
    'ENROLL' = 'ENROLL',
    'SIGNUP' = 'SIGNUP',
}

type CourseActions = FeedActions.ENROLL;
type UserActions = FeedActions.SIGNUP;

type Actions = CourseActions | UserActions;

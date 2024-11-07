export type INotificationType = 'error' | 'warning' | 'success' | 'info';

export interface INotification {
    id: number;
    message: string;
    type: INotificationType;
};
export declare class TelegramService {
    private botToken;
    private chatId;
    sendOrderNotification(order: any): Promise<void>;
    sendUpdateStatus(order: any, dto: any): Promise<void>;
}

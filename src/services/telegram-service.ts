import { WebAppUser } from "../types/web-app-user";

export class TelegramService {
  private window: Window | null;
  telegram: any;

  constructor() {
    this.window = document.defaultView;
    this.telegram = (this.window as any).Telegram.WebApp;
  }

  get User(): WebAppUser {
    const initData = this.telegram.initDataUnsafe;

    return initData.user !== undefined ? this.telegram.initDataUnsafe.user : {
      id: 1,
      is_bot: false,
      first_name: 'Test',
      last_name: 'User',
      username: 'test_user',
      language_code: 'en',
      is_premium: false,
      added_to_attachment_menu: false,
      allows_write_to_pm: false
    };
  }
}

import { useEffect, useState } from "react";
import { TelegramService } from "../services/telegram-service"
import { WebAppUser } from "../types/web-app-user";

export const useUser = () => {
  const [user, setUser] = useState<WebAppUser>({
    id: 1,
    is_bot: false,
    first_name: 'Test',
    last_name: 'User',
    username: 'test_user',
    language_code: 'en',
    is_premium: false,
    added_to_attachment_menu: false,
    allows_write_to_pm: false
  });


  useEffect(() => {
    const service = new TelegramService();

    setUser(service.User);
  }, []);

  return {
    user,
  };
}

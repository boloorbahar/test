import { useEffect, useState } from "react";
import { initData, WebApp } from "@twa-dev/sdk";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // فعال کردن Telegram Mini App SDK
    WebApp.ready();

    // دریافت اطلاعات کاربر
    if (WebApp.initDataUnsafe?.user) {
      setUser(WebApp.initDataUnsafe.user);
    }
  }, []);

  return (
    <div className="App">
      <h1>Telegram Mini App</h1>
      {user ? (
        <div>
          <p>👤 نام کاربر: {user.first_name} {user.last_name}</p>
          <p>🆔 آیدی: {user.id}</p>
          <p>📧 یوزرنیم: @{user.username}</p>
        </div>
      ) : (
        <p>دریافت اطلاعات کاربر...</p>
      )}
    </div>
  );
}

export default App;

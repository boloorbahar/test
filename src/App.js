import { useEffect, useState } from "react";
import WebApp from "@twa-dev/sdk";

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
          <p style={{ color: "white" }}>👤 نام کاربر: {user.first_name} {user.last_name}</p>
          <p style={{ color: "white" }}>🆔 آیدی: {user.id}</p>
          <p style={{ color: "white" }}>📧 یوزرنیم: @{user.username}</p>
        </div>
      ) : (
        <p>دریافت اطلاعات کاربر...</p>
      )}
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const giveConsent = () => {
    Cookies.set('cookieConsent', 'true', { expires: 365 }); // 设置cookie有效期为1年
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div>
      <p>We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.</p>
      <button onClick={giveConsent}>Accept</button>
    </div>
  );
}

import { useState, useEffect } from 'react';

const IsPhone = () => {
    const [isPhone, setIsPhone] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            // Check screen width
            const isSmallScreen = window.innerWidth <= 768;
            const isMobileDevice =
                /Mobi|Android|iphone/i.test(navigator.userAgent);

            setIsPhone(isSmallScreen || isMobileDevice)
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isPhone;
};

export default IsPhone;

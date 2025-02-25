import { useState, useEffect } from 'react';

const IsPhone = () => {
    const [isPhone, setIsPhone] = useState(false);

    useEffect(() => {
        const handleResize = () => {

            setIsPhone(window.innerWidth <= 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isPhone;
};

export default IsPhone;

import React from 'react';

type Props = {
    children: React.ReactNode;
};

const PrivateRouter: React.FC<Props> = ({ children }) => {
    const userJson = sessionStorage.getItem('user');
    console.log(userJson);
    
    const user = userJson ? JSON.parse(userJson) : null;
    // console.log(user);
    

    // Kiểm tra quyền truy cập
    if ( user?.role === "Admin") {
        return (
            <div>Bạn không có quyền truy cập</div>
        );
    }
    return <>{children}</>;

    
};

export default PrivateRouter;

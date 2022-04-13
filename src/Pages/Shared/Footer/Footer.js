import React from 'react';

const Footer = () => {
    const date = new Date();
    return (
        <div>
            <h2 style={{ textAlign: 'center', color: 'gray', fontSize: '18px', marginTop: '30px' }}><small>Copyright &copy; {date.getFullYear()}</small></h2>
        </div>
    );
};

export default Footer;
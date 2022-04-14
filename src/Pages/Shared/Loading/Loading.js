import React from 'react';
import LoadingImg from '../../../images/loading/loading.gif';

const Loading = () => {
    return (
        <div style={{ width: '500px', margin: '0 auto' }}>
            <img style={{ width: '100%', marginTop: '20px' }} src={LoadingImg} alt="" />
        </div>
    );
};

export default Loading;
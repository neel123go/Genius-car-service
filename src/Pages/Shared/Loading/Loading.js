import React from 'react';
import LoadingImg from '../../../images/loading/loading.gif';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Loading = () => {
    return (
        <div style={{ width: '500px', margin: '0 auto' }}>
            <PageTitle title="Loading.."></PageTitle>
            <img style={{ width: '100%', marginTop: '20px' }} src={LoadingImg} alt="" />
        </div>
    );
};

export default Loading;
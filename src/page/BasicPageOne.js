import { Content } from 'antd/es/layout/layout';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPopleOne } from '../store/pracReact/action';

const BasicPageOne = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPopleOne("haha"));
    }, [])

    return (
        <Content
            style={{
                padding: '0 24px',
                minHeight: 280,
            }}
        >
            hahahaha
        </Content>
    );
};

export default BasicPageOne;
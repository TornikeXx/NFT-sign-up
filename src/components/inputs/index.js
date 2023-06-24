import { Input, Space } from 'antd';
import React from 'react';
import './styled.css'
import styled from 'styled-components';

const H5 = styled.h5`
margin-bottom:5px;
color:#344054 ;
`;
const StyledH5 = styled(H5)`
color:#5429FF
`;



const InputDesign = () => {
    return (
        <Space direction="vertical" className='inputs'>
            <H5>Email</H5>

            <Input allowClear={true} placeholder='Email@example.com' />
            <H5>Password</H5>

            <Input.Password className='input' />
            <div className='infos'>
                <div className='checkbox'>
                    <input type="checkbox" />
                    <H5>Remember me</H5>
                </div>
                <StyledH5>Forgot Password?</StyledH5>
            </div>
        </Space>


    );
};

export default InputDesign;
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
position: absolute;
width: 70%;
top: 10px;
right: 12%;
background: white;
    height: auto;
    padding: 32px 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.62);
    border-radius: 8px;
    margin: auto;

`
const FooterContainer = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
`
const Tag = styled.span`
padding: 2px 8px;
    background: #3b8e27;
    color: white;
    border-radius: 30px;
    margin-right: 8px;
    font-size: 12px;
`
const Close = styled.span`
width: 20px;
height: 20px;
border: black solid 2px;
background: white;
display: flex;
border-radius: 24px;
justify-content: center;
align-items: center;
position: absolute;
top: 13px;
font-weight: 600;
cursor:pointer;
`

export default (props) => {
    const { data } = props;

    const date = new Date(data.created_at).toLocaleDateString('fa-IR');


    return (
        <Container>
            <Close onClick={() => props.setFull(false)}>X</Close>
            <div>
                <h4 style={{ display: 'inline-block' }}>{data.title}</h4>

                {data.open === 1 ? <Tag>در حال پردازش</Tag> : <Tag style={{ backgroundColor: '#cc2020' }}>بسته</Tag>}
            </div>
            <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
            <hr />   <FooterContainer>
                <span>{date}</span>
            </FooterContainer>
        </Container>
    )
};


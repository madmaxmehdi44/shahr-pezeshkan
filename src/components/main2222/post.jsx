import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: 380px;
    height: 260px;
    padding: 2px 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.62);
    border-radius: 8px;
    margin: auto;
    @media (max-width: 900px) {
        width: 280px;
    }
`
const FooterContainer = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
`

export default ({ data, onMore }) => {
    const [text, setText] = React.useState('')

    const date = new Date(data.created_at).toLocaleDateString('fa-IR');

    React.useEffect(() => {
        var span = document.createElement('span');
        span.innerHTML = data.content;
        console.log(typeof span.innerText);
        var text;
        if (span.innerText.length > 80) {
            text = span.innerText.slice(0, 80)
            text += "...";

            console.log('text', text);
            setText(text)
        } else {
            setText(span.innerText)
        }

    }, ['input']);
    console.log(data);

    return (
        <Container>
            <h4>{data.title}</h4>

            <p>{text}</p>
            <FooterContainer>
                <span>{date}</span>
                {onMore ?
                    <a onClick={() => onMore(data)} className="link" >ادامه مطلب</a>
                    :
                    <a href={`/post/${data.slug}`} className="link" >ادامه مطلب</a>
                }

            </FooterContainer>
        </Container>
    )
};
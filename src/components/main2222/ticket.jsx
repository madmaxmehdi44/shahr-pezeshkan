import React from 'react'
import styled from 'styled-components'
import SingleTicket from './singleTicket'
const Container = styled.div`
width: 310px;
    height: 260px;
    padding: 2px 16px;
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

export default (props) => {
    const { data } = props;
    const [text, setText] = React.useState('')
    const [full, setFull] = React.useState(false)

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


    return (
        <Container>
            <div>
                <h4 style={{ display: 'inline-block' }}>{data.title}</h4>

                {data.open === 1 ? <Tag>در حال پردازش</Tag> : <Tag style={{ backgroundColor: '#cc2020' }}>بسته</Tag>}
            </div>
            <p>{text}</p>
            <FooterContainer>
                <span>{date}</span>
                <a onClick={() => setFull(true)} className="link">جزئیات</a>
            </FooterContainer>
            {full && <SingleTicket setFull={setFull} data={data} />}
        </Container>
    )
};


import Fetch from 'components/fetch/fetch';
import React from 'react'
import styled from 'styled-components'

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

export default ({ data }) => {
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

    function deletePost() {
        let ask = window.confirm("از پاک کردن این پست اطمینان دارید؟");
        if (ask) {
            Fetch.delete(`/posts/${data.slug}`, (res) => {
                if (res === 0) {
                    alert('خطایی رخ داده است')
                } else if (res === 1) {
                    alert("با موفقیت حذف شد!");
                    window.location.reload();
                }
            })
        }

    };
    return (
        <Container>
            <h4>{data.title}</h4>
            <p>{text}</p>
            <FooterContainer>
                <span>{date}</span>
                <div className="row">
                    <a href={`/dashboard/edit/${data.slug}`} className="link"> اصلاح</a>
                    <span className="delete" onClick={deletePost}>حذف</span>
                </div>
            </FooterContainer>
        </Container>
    )
};

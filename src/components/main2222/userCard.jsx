import React from 'react'
import styled from 'styled-components'
import Fetch from 'components/fetch/fetch';

const Container = styled.div`
width: 400px;
    box-shadow: 2px 2px 4px 1px rgb(0 0 0 / 25%);
    padding: 5px 16px;
    border-radius: 4px;
    margin: 16px 0;
`
const Head = styled.div`


`
const Foot = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`


export default (props) => {
    const { data } = props;

    const date = new Date(data.created_at).toLocaleDateString('fa-IR');

    React.useEffect(() => {

    }, ['input']);


    function deleteUser() {
        let ask = window.confirm("از حذف کردن این کاربر اطمینان دارید؟");
        if (ask) {
            Fetch.delete(`/users/${props.id}`, (res) => {
                if (res === 0) {
                    alert('خطایی رخ داده است')
                } else if (res === 1) {
                    alert("با موفقیت حذف شد!");
                    window.location.reload();
                }
            })
        }
    }

    return (
        <Container>
            <h4>{data.name}</h4>
            <h5>{data.email}</h5>

            <Foot>
                <span>{date}</span>

                <span style={{ display: 'inline-block' }} className="delete" onClick={deleteUser}>حذف</span>

            </Foot>
        </Container>
    )
};

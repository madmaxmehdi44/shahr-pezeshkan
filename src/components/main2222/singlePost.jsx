import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import { useParams } from "react-router-dom";
import Fetch from 'components/fetch/fetch'

const Container = styled.div`
width: 65%;
min-width: 300px;
    min-height: 400px;
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

export default function Post(props) {
let { slug } = useParams();

const [data, setData] = useState(null)
useEffect(() => {
    Fetch.get(`/posts/${slug}`, (res) => {
        console.log(res);
        if (res) {
setData(res)
        }
      })
}, ['input']);

    if (!data) return 'loading...';
    
    const date = new Date(data.created_at).toLocaleDateString('fa-IR');

    return(
        <Container>
            <h4>{data.title}</h4>
          
              <p dangerouslySetInnerHTML={{__html: data.content}}></p>
              <FooterContainer>
              <span>{date}</span>
              
              </FooterContainer>
        </Container>
    )
};

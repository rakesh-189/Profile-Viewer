import styled from 'styled-components';

const Wrapper = styled.div`

.card {
display: inline-block;
margin: 20px 45px;
height: 300px;
width: 200px;
padding: 0px;
background-color: #FFF;
/* -webkit-filter: drop-shadow(0px 0px 5px #555); */
/* filter: drop-shadow(0px 0px 5px #555); */
}

.card .delete {
    position: absolute;
    top: 5px;
    right: 0;
    border: none;
    background: #FFF;
    color: red;
    /* color: #D11A2A;  (for hover) */
    display: none;
}

.card:hover {
    /* margin-top: 10px; */
    -webkit-filter: drop-shadow(0px 0px 15px #555);
    filter: drop-shadow(0px 0px 15px #555);
}

.card:hover .delete {
    display: block;
}

.delete:hover {
    color: #D11A2A;
}

 

`

export default Wrapper;
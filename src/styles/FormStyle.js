import styled from 'styled-components'

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
    border-bottom: 5px solid var(--primary-500);
  }

  h2 {
    text-align: center;
    margin-bottom: -5px;
  }

  .icon {
    position: relative;
    top: -35px;
    right: -255px;
    font-size: 24px;
  }
 
  .btn {
    margin-top: 1rem;
    background-color: #4CAF50;
    color: white;

  }
  
`
export default Wrapper
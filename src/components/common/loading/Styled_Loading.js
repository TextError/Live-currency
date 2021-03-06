import styled from 'styled-components';

const StyledLoading = styled.div`
  .loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 26px;
    width: 100%;

    p, span {
      animation: loading 2s linear infinite forwards;
      min-height: 26px;
      background: linear-gradient(to right, #e0e0e0 8%, #F0F0F0 18%, #e0e0e0 33%);
      background-size: 800px 104px;
      position: relative;
      width: 80%;
    }
    span {
      height: 30px;
      margin: 10px 0 30px 0;
    }
  }

  @keyframes loading{
    0%{
        background-position: -468px 0
    }
    100%{
        background-position: 468px 0
    }
  }
`

export default StyledLoading;
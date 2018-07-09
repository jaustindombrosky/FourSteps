import styled from 'styled-components';


let StrategyCheckListContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    // max-width: 800px:
    justify-content: center;
    width: calc(100% - 190px);
    margin: auto;
    grid-gap: 15%;
    margin-top: 50px;
`

let StrategyContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    // max-width: 500px;
    max-height: 100%;
    font-size: 9px;
    text-align: center;
`

let StrategyConName = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid grey;
    font-size: 10px;
    width: 100%;
    margin-bottom: 30px;
`

let StrategyButton = styled.button`
    background-image: url(${props => props.backgroundImage});
    background-size: 100%;
    background-position: 50%;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    transition: 0.2s ease-in-out;
    border: 0px;
    ${props => props.filter}
`

let StrategyListCon = styled.div`
    // display: flex;
    // flex-wrap: wrap;
    // justify-content: space-around;
    padding: 20px;
    display: grid;
    width: 100%;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;

    p{
        text-align: center;
        padding-top: 10px;
        font-size: 12px;
        margin: 0px;
    }
`


let StrategyItem = styled.div`

`

export {
    StrategyCheckListContainer,
    StrategyConName,
    StrategyContainer,
    StrategyButton,
    StrategyItem,
    StrategyListCon
}
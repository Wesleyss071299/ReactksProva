import {BetItemContainer,BetItemInfo, TypeText} from './styles';

const BetItem = () => {
    return(
    <BetItemContainer >
        <BetItemInfo color="#F79C31">
            <strong>1,3,4,5,6,7,89,7,5,4,3,4,5,67</strong>
            <p>30/11/2020 - (R$ 2,50)</p>
            <TypeText color="#F79C31">Quina</TypeText>
        </BetItemInfo>
    </BetItemContainer>
    )
}

export default BetItem;
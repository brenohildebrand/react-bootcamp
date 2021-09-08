import styled from 'styled-components'

const Button = styled.button`
    padding: 15px 35px;
    min-width: 130px;

    transform: scale(1.2);

    outline: none;
    border: none;

    &:hover {
        cursor: pointer;
        transform: scale(1.3);
    }

    ${props => props.primary && css`
        background-color: whitesmoke;
        color: black;
        box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
    `}

    ${props => props.secondary && css`
        background-color: black;
        color: whitesmoke;
        box-shadow: 0 0 5px 2px rgba(255, 255, 255, 0.2);
    `}
`

export default Button
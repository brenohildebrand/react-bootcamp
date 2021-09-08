import { createContext, useContext, useState } from "react"
import styled, { css } from "styled-components";

const NotifyContext = createContext({});

const NotifyProvider = ({ children }) => {

    const [notifications, setNotifications] = useState([]);

    const notify = (notification, delay) => {
        
        // Generate ID
        const currentID = Date.now();
        
        // Assign ID to current notification
        notification['ID'] = currentID;

        // Include current notification in notifications
        setNotifications(notifications.concat(notification))

        // Remove current notification from notifications after delay || 3000
        setTimeout(() => {
            setNotifications((prevState) => {
                return prevState.filter(notification => notification['ID'] !== currentID)
            })
        }, delay || 3000)

    }

    return (
        <NotifyContext.Provider value={{
            notifications,
            notify
        }}>
            {children}
        </NotifyContext.Provider>
    )

}

const Notify = () => {
    const { notifications } = useContext(NotifyContext);

    return (
        <NotifyDiv>
            {notifications.map(({ID, message, type}) => {
                return (
                    <NotificationDiv 
                        key={ID} 
                        error={type === 'error'} 
                        success={type === 'success'}
                    >
                        {message}
                    </NotificationDiv>
                )
            })}
        </NotifyDiv>
    )
}

const NotifyDiv = styled.div`
    display: block;

    position: absolute;
    top: 5%;
    right: 2%;
`

const NotificationDiv = styled.div`
    padding: 15px 15px;

    background-color: whitesmoke;
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.2);
    border-radius: 5px;

    margin-bottom: 15px;

    ${props => props.success && css`
        color: green;
    `}

    ${props => props.error && css`
        color: red;
    `}
`

export default Notify
export { NotifyContext, NotifyProvider }
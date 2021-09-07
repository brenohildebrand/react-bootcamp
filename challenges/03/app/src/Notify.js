import { createContext, useContext, useState } from "react"

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
        }, delay || 10000)

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
        <div>
            {notifications.map(({ID, message, type}) => {
                return (
                    <div key={ID} className={`notification-${type}`}>
                        {message}
                    </div>
                )
            })}
        </div>
    )
}

export default Notify
export { NotifyContext, NotifyProvider }
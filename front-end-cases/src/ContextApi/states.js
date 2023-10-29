import { createContext, useState } from "react";

export const StateContext = createContext({});

function StatesProvider({ children }){
    
    const [log, setLog] = useState(false);

    return (
        <StateContext.Provider value={{ log, setLog }}>
            {children}
        </StateContext.Provider>
    )

} 

export default StatesProvider;
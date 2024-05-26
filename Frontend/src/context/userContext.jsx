import { createContext } from "react";
const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null); 
    const [ready, setReady] = useState(false);  
    useEffect(() => {
        axios.get("/profile").then(({ data }) => {
            console.log(data);
            setUser(data);
            setReady(true);
        });
    }, [ready]);
    return <UserContext.Provider value={{user,setUser,ready}}>{children}</UserContext.Provider>;
}

export default UserContext;

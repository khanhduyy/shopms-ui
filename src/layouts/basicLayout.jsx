import Header from "../components/header/header"

const BasicLayout = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
        </div>
    )
}

export default BasicLayout
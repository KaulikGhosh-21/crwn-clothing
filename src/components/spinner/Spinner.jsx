import { SpinnerOverlay, SpinnerContainer } from "./SpinnerStyles";

const WithSpinner = (WrappedComponent) => {
    const Spinner = ({isLoading, ...props}) => {
        return (
            isLoading ? 
            (<SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>)
            : <WrappedComponent {...props}/>
        )
    }
    return Spinner
}

export default WithSpinner;
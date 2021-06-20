import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({price}) => {

    const onToken = (token) => {
        alert("Payment was successful");
    }

    const stripeAmount = price * 100;
    const publishableKey = "pk_test_51J4RibSHaB6PMgwhEPmBZY9S1JHj5iqDkkpc0nxgiMRQ4yu8XQcX3QSeUAogC86z8WMWcnFHlX5NCDFcdwyG76yG00hbabs0dF"

    return(
        <StripeCheckout 
        name="CRWN Clothing Ltd."
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4iIB1QALnDE8ObAX1qCMbPV8fN4edxDrssw&usqp=CAU"
        amount={stripeAmount}
        panelLabel="Pay Now"
        stripeKey={publishableKey}
        token={onToken}
        allowRememberMe
        shippingAddress
        billingAddress
        description={`Your total amount is : $${price}`}
        />
    )
}

export default StripeButton
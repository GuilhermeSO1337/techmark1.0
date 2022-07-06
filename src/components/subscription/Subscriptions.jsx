import "./subscriptions.css"
function Subscriptions() {
    return(
        <div className="subscription_div">  
            <div className="every_subscriptions">
            <div className="subscription_simple">
                <h3 className="subscription_title">subscription simple</h3>
                <ul className="subscriptions_ul">
                    <li className="subscription_li">free</li>
                    <li className="subscription_li">standard</li>
                    <li className="subscription_li">fast</li>
                </ul>
                <p>Here you have rigths to a profile and publishs free</p>
                <button className="button_subscription">add</button>
            </div>
            <div className="subscription_week">
                <h3 className="subscription_title">weekly subscription</h3>
            <ul className="subscriptions_ul2">
                    <li className="subscription_li">contrast</li>
                    <li className="subscription_li">standard</li>
                    <li className="subscription_li">fast</li>
                    <li className="subscription_li">importance </li>
                    <li className="subscription_li">for R$5 to week</li>
                </ul>
                <p>Here you have rigths to show your commerce in contrast of week, with a renewable subscripiton</p>
                <button className="button_subscription">add</button>
            </div>
            <div className="subscription_month">
            <h3 className="subscription_title">monthly subscription</h3>
            <ul className="subscriptions_ul3">
                    <li className="subscription_li"> more contrast</li>
                    <li className="subscription_li"> more fast</li>
                    <li className="subscription_li"> more importance </li>
                    <li className="subscription_li"> more benefits</li>
                    <li className="subscription_li">for R$15 to month</li>
            </ul>
            <p>Here you have rigths to show your commerce in contrast of week, with a renewable subscripiton</p>
                <button className="button_subscription">add</button>
            </div>
          </div>
          <button className="button_subscription_office">Back to homepage</button>
        </div>
    )
}
export default Subscriptions;
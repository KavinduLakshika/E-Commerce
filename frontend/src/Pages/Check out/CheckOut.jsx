import { useState } from 'react';
import Delivery from '../Check out/Delivery/Delivery';
import Payment from './Payment/Payment';
import Review from './Review';
import './CheckOut.css';

function CheckOut() {
    const [activeSection, setActiveSection] = useState("delivery");
    const [deliveryCompleted, setDeliveryCompleted] = useState(false);

    const handleDeliveryCompletion = () => {
        setDeliveryCompleted(true);
        setActiveSection("payment");
    };

    const renderActiveSection = () => {
        switch (activeSection) {
            case "payment":
                return <Payment />;
            case "review":
                return <Review />;
            default:
                return <Delivery onProceedToPayment={handleDeliveryCompletion} />;
        }
    };

    const getTitle = () => {
        switch (activeSection) {
            case "payment":
                return "Payment";
            case "review":
                return "Review";
            default:
                return "Delivery";
        }
    };

    const handleSectionClick = (section) => {
        if (section === "payment" && !deliveryCompleted) {
            alert("Please complete the delivery form first.");
        } else {
            setActiveSection(section);
        }
    };

    return (
        <div className="m-4">
            <div className="d-flex align-items-center justify-content-between">
                <h1>{getTitle()}</h1>
                <div className="text-center">
                    <div className="d-flex justify-content-center cat">
                        <span
                            className={`cat-link ${activeSection === "delivery" ? "active" : ""}`}
                            onClick={() => handleSectionClick("delivery")}
                        >
                            <i className="bi bi-truck icon"></i>
                            <p>Delivery</p>
                        </span>
                        <span
                            className={`cat-link ${activeSection === "payment" ? "active" : ""}`}
                            onClick={() => handleSectionClick("payment")}
                        >
                            <i className="bi bi-credit-card icon"></i>
                            <p>Payment</p>
                        </span>
                        <span
                            className={`cat-link ${activeSection === "review" ? "active" : ""}`}
                            onClick={() => handleSectionClick("review")}
                        >
                            <i className="bi bi-card-checklist icon"></i>
                            <p>Review</p>
                        </span>
                    </div>
                </div>
            </div>
            <hr />
            <div>
                {renderActiveSection()}
            </div>
        </div>
    );
}

export default CheckOut;

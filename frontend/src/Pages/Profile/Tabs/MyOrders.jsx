import { useState } from 'react';
import './Tab.css';

function MyOrders() {
    const [activeTab, setActiveTab] = useState("All");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="row">
            <h3 className="fw-bold">My Orders</h3>
            <div className="text-center">
                <div className="d-flex justify-content-center category">
                    <span
                        className={`category-link ${activeTab === "All" ? "active" : ""}`}
                        onClick={() => handleTabClick("All")}
                    >
                        All
                    </span>
                    <span
                        className={`category-link ${activeTab === "To Pay" ? "active" : ""}`}
                        onClick={() => handleTabClick("To Pay")}
                    >
                        To Pay
                    </span>
                    <span
                        className={`category-link ${activeTab === "To Ship" ? "active" : ""}`}
                        onClick={() => handleTabClick("To Ship")}
                    >
                        To Ship
                    </span>
                    <span
                        className={`category-link ${activeTab === "To Pickup" ? "active" : ""}`}
                        onClick={() => handleTabClick("To Pickup")}
                    >
                        To Pickup
                    </span>
                    <span
                        className={`category-link ${activeTab === "Completed" ? "active" : ""}`}
                        onClick={() => handleTabClick("Completed")}
                    >
                        Completed
                    </span>
                </div>
                <hr />
            </div>
        </div>
    );
}

export default MyOrders;

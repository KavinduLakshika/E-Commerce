import { useState } from 'react';
import All from './MensWear/All';
import Formalwear from './MensWear/Formalwear';
import CasualWear from './MensWear/CasualWear';
import ActiveWear from './MensWear/ActiveWear';
import InnerWear from './MensWear/InnerWear';
import Accessories from './MensWear/Accessories';
import './Mens.css';

function Mens() {
    const [activeSection, setActiveSection] = useState("All");

    const renderActiveSection = () => {
        switch (activeSection) {
            case "formalwear":
                return <Formalwear />;
            case "casualWear":
                return <CasualWear />;
            case "activeWear":
                return <ActiveWear />;
            case "innerWear":
                return <InnerWear />;
            case "accessories":
                return <Accessories />;
            default:
                return <All />;
        }
    };

    return (
        <div className="p-4">
            <div className="text-center">
                <div className="d-flex justify-content-center cat">
                    <span
                        className={`cat-link ${activeSection === "all" ? "active" : ""}`}
                        onClick={() => setActiveSection("all")}
                    >
                        All
                    </span>
                    <span
                        className={`cat-link ${activeSection === "formalwear" ? "active" : ""}`}
                        onClick={() => setActiveSection("formalwear")}
                    >
                        Formal wear
                    </span>
                    <span
                        className={`cat-link ${activeSection === "casualWear" ? "active" : ""}`}
                        onClick={() => setActiveSection("casualWear")}
                    >
                        Casual Wear
                    </span>
                    <span
                        className={`cat-link ${activeSection === "activeWear" ? "active" : ""}`}
                        onClick={() => setActiveSection("activeWear")}
                    >
                        Active wear
                    </span>
                    <span
                        className={`cat-link ${activeSection === "innerWear" ? "active" : ""}`}
                        onClick={() => setActiveSection("innerWear")}
                    >
                        Inner wear
                    </span>
                    <span
                        className={`cat-link ${activeSection === "accessories" ? "active" : ""}`}
                        onClick={() => setActiveSection("accessories")}
                    >
                        Accessories
                    </span>
                </div>
            </div>

            <div>
                {renderActiveSection()}
            </div>
        </div>
    );
}

export default Mens;

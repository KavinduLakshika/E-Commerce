import { useState } from 'react';
import All from './MensWear/All';
import Formalwear from './MensWear/Formalwear';
import CasualWear from './MensWear/CasualWear';
import ActiveWear from './MensWear/ActiveWear';
import InnerWear from './MensWear/InnerWear';
import Accessories from './MensWear/Accessories';
import './Mens.css';
import NavBar from '../../Components/NavBar/NavBar';

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
        <div>
            <NavBar/>
            <div className="p-4">
                <div className="text-center">
                    <div className="d-flex justify-content-center category">
                        <span
                            className={`category-link ${activeSection === "all" ? "active" : ""}`}
                            onClick={() => setActiveSection("all")}
                        >
                            All
                        </span>
                        <span
                            className={`category-link ${activeSection === "formalwear" ? "active" : ""}`}
                            onClick={() => setActiveSection("formalwear")}
                        >
                            Formal wear
                        </span>
                        <span
                            className={`category-link ${activeSection === "casualWear" ? "active" : ""}`}
                            onClick={() => setActiveSection("casualWear")}
                        >
                            Casual Wear
                        </span>
                        <span
                            className={`category-link ${activeSection === "activeWear" ? "active" : ""}`}
                            onClick={() => setActiveSection("activeWear")}
                        >
                            Active wear
                        </span>
                        <span
                            className={`category-link ${activeSection === "innerWear" ? "active" : ""}`}
                            onClick={() => setActiveSection("innerWear")}
                        >
                            Inner wear
                        </span>
                        <span
                            className={`category-link ${activeSection === "accessories" ? "active" : ""}`}
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
        </div>

    );
}

export default Mens;

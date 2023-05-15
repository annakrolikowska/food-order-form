import React from 'react';
import { Field } from 'react-final-form';
import '../../styles/components-styles/Range.css';

const SoupDetails: React.FC = () => {
    const renderSpicinessLabels = () => {
        const labels = [];
        for (let i = 1; i <= 10; i++) {
            labels.push(<label key={i}>{i}</label>);
        }
        return labels;
    }

    const spiceLevels = ["Low", "Medium", "Spicy"];
    const spiceLevelElements = spiceLevels.map((level) => <p key={level}>{level}</p>);

    return (
        <div className="range">
            <label >
                <Field component="input" type="range" id="volume" name="spiciness" min="1" max="10"  required />
                <span  className="range__label">Spiciness</span>
                <div className="range__container range__container--numbers">
                    {renderSpicinessLabels()}
                </div>
                <div className="range__container">
                    {spiceLevelElements}
                </div>
            </label>
        </div>
    );
}

export default SoupDetails;
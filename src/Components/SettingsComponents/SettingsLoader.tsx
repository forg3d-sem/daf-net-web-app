import {Spinner} from "react-bootstrap";
import './settingsStyles.scss';

const SettingsLoader = () => {
    return (
        <div className='loader-wrapper'>
            <Spinner animation='border'/>
        </div>
    );
};

export default SettingsLoader;
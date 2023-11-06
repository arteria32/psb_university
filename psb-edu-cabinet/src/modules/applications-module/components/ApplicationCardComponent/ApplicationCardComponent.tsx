import React from "react";

import { Application } from "../../../../types/application";
import "./ApplicationCardComponent.scss";

const ApplicationCardComponent: React.FC<{ application: Application }> = ({ application }) => {
    return (<div>
        {application.info}
    </div>)
};

export default ApplicationCardComponent;

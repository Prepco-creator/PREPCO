import React from "react";

const GoogleMap: React.FC = () => {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3886.0455624867864!2d80.201047!3d13.096299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDA1JzQ2LjciTiA4MMKwMTInMDMuOCJF!5e0!3m2!1sen!2sin!4v1739283820411!5m2!1sen!2sin"
            width="100%"
            height="637"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    );
};

export default GoogleMap;

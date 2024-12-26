import React from "react";

const GoogleMap: React.FC = () => {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.3545595779167!2d80.25738135630078!3d13.054178196803955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52663bfa1ace61%3A0x60bb479a340ce102!2sThe%20New%20College!5e0!3m2!1sen!2sin!4v1735165059061!5m2!1sen!2sin"
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

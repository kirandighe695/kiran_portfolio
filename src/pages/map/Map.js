import React from 'react'

function Map() {
    return (
        <div>
            <iframe
                title="Google Maps - Custom Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.123456789!2d74.286931!3d19.561386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTkuNTYxMzg2LCA3NC4yODY5MzE!5e0!3m2!1sen!2sin!4v1694099876543!5m2!1sen!2sin"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
            ></iframe>
        </div>
    )
}

export default Map

import React from "react";
const AddressMap = () => {
  return (
    <div className="mapImg shadow-lg">
      <iframe title="myFrame"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3387.3188896061574!2d35.86663101546451!3d31.897931981246295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca7e4aee722d5%3A0x8693a9183825010b!2z2YPZhNmK2Kkg2YTZiNmF2YrZhtmI2LMg2KfZhNis2KfZhdi52YrYqSDYp9mE2KrZgtmG2YrYqSAtIChMdW1pbnVzIFRlY2huaWNhbCBVbml2ZXJzaXR5IENvbGxlZ2UgKExUVUM!5e0!3m2!1sen!2sjo!4v1656696868571!5m2!1sen!2sjo"

        width="600"
        height="500"
        frameborder="0"
        style={{ border: 0 }}
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  );
};
export { AddressMap };

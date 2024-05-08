import React from 'react';

function WelcomeMessage() {
  return (
    <div className="flex justify-center items-center w-full bg-white">
      <div className="w-screen text-center mt-5 flexjustify-center items-center">
        <h1 className="text-3xl md:text-4xl mb-3 poppins-semibold">Welcome to PetCare</h1>
        <p className="text-lg px-40 poppins-regular">
          Your trusted partner in ensuring the well-being of your beloved pets while you're away. Our comprehensive platform offers everything your furry companions need, from nourishing meals to cozy shelter and even prompt medical attention if necessary. With PetCare, you can rest assured that your pets are in good hands, allowing you to focus on your daily activities with peace of mind. Join us today and experience the difference in pet care excellence.
        </p>
      </div>
    </div>
  );
}

export default WelcomeMessage;

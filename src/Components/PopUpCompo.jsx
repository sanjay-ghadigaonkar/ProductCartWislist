import React from "react";

const PopUpCompo = () => {
  return (
    <div
      role="alert"
      className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
    >
      {/* user click the wislist btn i show this PopUp msg for save wish list */}
      <div className="bg-green-500 text-white px-6 py-3 rounded-md shadow-lg text-xl font-bold">
        Wishlist SucsessFull...
      </div>
    </div>
  );
};

export default PopUpCompo;

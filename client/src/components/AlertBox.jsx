import React, { useEffect, useState } from 'react';

function AlertBox({ props }) {
  const { status, message } = props;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (status === 'showAlert') {
      setVisible(true);

      const hideTimeout = setTimeout(() => {
        setVisible(false);
      }, 3000);

      return () => {
        clearTimeout(hideTimeout);
      };
    }
  }, [status]);

  return (
    <div
      id="alert-box"
      className={`w-full p-3 fixed left-0 z-50 flex justify-center transition-transform duration-500 ease-in-out ${
        visible ? 'translate-y-0' : '-translate-y-20'
      }`}
      style={{ top: '0' }}
    >
      <div className="w-full md:w-96 bg-white font-semibold text-black rounded-lg p-4 shadow-md shadow-zinc-400 text-start">
        {message || "Hello Scoopers!"}
      </div>
    </div>
  );
}

export default AlertBox;

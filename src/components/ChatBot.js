import { useState } from "react";

export function ChatBot() {
  const [visible, setVisible] = useState(false);
  const [messages, setMessage] = useState([
    {
      0: "Hello this is a message from server. Retrived from the server in each 5 seconds",
    },
  ]);

  function sendMessage(message) {
    if (message === "") {
      return;
    }
    setMessage((msgs) => {
      console.log(msgs);
      return [...msgs, { 1: message }];
    });

    /* Send message to backend API */
  }

  return (
    <div
      className={
        "fixed bottom-5 right-5 flex flex-col " +
        (!visible && " pointer-events-none")
      }
    >
      {messages.map((val, index) => {
        if (val["0"]) {
          return (
            <div
              className={
                "ml-5 overflow-y-auto transform transition-all duration-500 max-h-[100px] left-0 relative w-72 min-h-[3rem] bg-[#f2f2f2d7] backdrop-blur-lg text-primary opacity-95 m-2 rounded-xl rounded-br-none border-2 border-[#FE6D73] dark:border-[#910107] px-[10%] py-2 h-fit shadow-lg text-center " +
                (!visible && " opacity-0 left-16 pointer-events-none") +
                (visible ? " shadow-heavy" : " shadow-medium")
              }
            >
              {val["0"]}
            </div>
          );
        } else {
          return (
            <div
              className={
                "ml-5 overflow-y-auto transform transition-all duration-500 max-h-[100px] left-0 relative w-72 min-h-[3rem] bg-secondary dark:bg-secondary_dark text-black dark:text-white opacity-95 m-2 rounded-xl rounded-bl-none border-2 border-primary px-[10%] py-2 h-fit shadow-lg text-center " +
                (!visible && " opacity-0 left-16 pointer-events-none") +
                (visible ? " shadow-heavy" : " shadow-medium")
              }
            >
              {val["1"]}
            </div>
          );
        }
      })}

      <div className="flex flex-row">
        <input
          type="text"
          className={
            "focus:border-4 rounded-xl transform transition-all duration-500 bg-secondary min-h-[3rem] inline-block w-60 mx-3 h-fit px-3 py-2 break-all text-base border-2 border-[#FE6D73] dark:border-[#910107] shadow-lg relative " +
            (!visible && " opacity-0 pointer-events-none") +
            (visible ? " shadow-heavy" : " shadow-medium")
          }
          onKeyPress={(e) => {
            if (e.code === "Enter") {
              sendMessage(e.target.value);
              e.target.value = "";
            }
          }}
        />
        <button
          className={
            "rounded-full bg-secondary dark:bg-secondary_dark w-12 h-12 border-2 border-[#FE6D73] dark:border-[#910107] shadow-lg flex justify-center align-middle pointer-events-auto " +
            (visible ? "shadow-heavy" : "shadow-medium")
          }
          onClick={() => setVisible(!visible)}
        >
          <img src="/Icons/bot.png" className="w-6 h-6 m-auto" />
        </button>
      </div>
    </div>
  );
}

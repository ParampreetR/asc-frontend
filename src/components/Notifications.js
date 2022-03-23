export function Notifications() {
  return (
    <div className="notifications">
      <h2 className="text-3xl font-medium">Notifications</h2>
      <div className="flex flex-col text-2xl w-screen mt-3">
        <span className="my-2">
          <span className="mx-20 my-auto inline-block">
            Admission Open 2022-23
          </span>
          <button className="tranform duration-200 mx-20 transparent-btn text-xl px-5 py-2 font-medium hover:text-secondary2">
            Apply Now
          </button>
        </span>
        <span className="my-2">
          <span className="mx-20 my-auto inline-block">Notification 2</span>
          <button className="tranform duration-200 mx-20 transparent-btn text-xl px-5 py-2 font-medium hover:text-secondary2">
            Button
          </button>
        </span>
      </div>
    </div>
  );
}

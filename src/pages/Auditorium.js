export function Auditorium() {
  return (
    <div className="my-12 mx-8  md:mx-16 lg:mx-24 xl:mx-36">
      <div className="max-w-[1440px] mx-auto">
        <h1 className="text-center  text-2xl md:text-4xl my-2 md:my-4 text-[#003060] font-bold">
          College Auditorium
        </h1>
        <p className="text-black my-1 text-md md:text-lg dark:text-white">
          The splendid college Auditorium was constructed in 1948.It has a
          seating capacity of 700 seats. It is used to organize Cultural
          Programmes, Dramas, Debates, Declamation, Extension Lectures,
          Seminars, Prize Distribution and Convocation.It has been renovated
          with the help of Alumni Association. Recently it has been a hub of
          Panjab University's Zonal and Inter Zonal Youth Festivals and DST
          sponsored INSPIRE camps.
        </p>
        <img
          src="./auditorium.png"
          alt=""
          className=" mt-7 m-auto w-[50vw] max-w-[720px]"
        />
        <img
          src="./collegehall.png"
          alt=""
          className=" mt-7 m-auto w-[50vw] max-w-[720px]"
        />
      </div>
    </div>
  );
}

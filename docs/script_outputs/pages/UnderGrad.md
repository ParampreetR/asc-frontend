## UnderGrad

```jsx
export function UnderGrad() {
  return (
    <div className="my-12 mx-8  md:mx-16 lg:mx-24 xl:mx-36">
      <div className="mx-auto">
        <h1 className="mt-5 text-center text-2xl md:text-4xl my-2 md:my-4 text-[##141E27] dark:text-[##227C9D] font-bold">
          Under Graduate
        </h1>

        <div class="relative overflow-x-auto shadow-md rounded-md">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Sr No.
                </th>
                <th scope="col" class="px-6 py-3">
                  Course name
                </th>
                <th scope="col" class="px-6 py-3">
                  Course Duration
                </th>
                <th scope="col" class="px-6 py-3">
                  Contact Person
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4">1</td>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  BCA
                </th>

                <td class="px-6 py-4">3 Years</td>
                <td class="px-6 py-4">Dr. Vivek Bhambri</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4">2</td>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  B.Com
                </th>

                <td class="px-6 py-4">3 Years</td>
                <td class="px-6 py-4">Dr. K.K .Sharma</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4">3</td>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  B.Sc.
                </th>
                <td class="px-6 py-4">3 Years</td>
                <td class="px-6 py-4">Dr. Sanjay Talwani</td>
              </tr>
              <tr class="bg-white dark:bg-gray-800">
                <td class="px-6 py-4">4</td>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  B.A
                </th>
                <td class="px-6 py-4">3 Years</td>
                <td class="px-6 py-4">Dr. Puneet Aneja</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

```
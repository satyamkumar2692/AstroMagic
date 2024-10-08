// import React from "react";
// import { useSelector } from "react-redux";
// import lang from "../utils/langConstants";

// const HoroscopeBottom = () => {
//   const LangKey = useSelector(store => store.configApp.lang)
//   return (
//     <div className="w-full mt-6 lg:mt-20">
//       <div className="flex w-full  flex-col justify-center items-center">
//         <div className="flex justify-center items-center w-full flex-col ">
//           <span className="lg:text-4xl text-2xl text-center lg:font-semibold  font-[600] text-purple-300 pb-1.5 lg:pb-3 tracking-wider opacity-90 lg:tracking-wide">
//         {lang[LangKey].horobottomtitle1}
//           </span>
//           <span className="pt-1 lg:pb-3 pb-1.5 text-center text-purple-300 text-base lg:text-xl tracking-wider lg:tracking-wide">
//             ({lang[LangKey].horobottomtitle2})
//           </span>
//           <img
//             alt="line"
//             className="lg:w-48 w-28"
//             src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAAAPCAYAAADakUJeAAAJFUlEQVRoge2bC5CVZRnHf4suqCiXhYo1kbsBuparkZmSE0laZIVjlkZaaVmm2W1yxm5azeQMFmpOY9rFUCpNTLAyqEbUQh0uCSKgglxMzHB18YZJ+zTP8/3P2W/P+c6eC4eSOO/Mmf3e+/X/PP/ned9tev6mSRQFK07Kh1rystJ3Ks2qb6t8/LXAO4A3AUdgjARa9Ouj+tuAF4BNGJuAh4AHMe4DNlfUVzXjqkOe7YI265Q3HHgLxmHARODg+Bn9gQEq2wV06LcBYznwN+DPwFNV73ElZep9VuuZntHWng7gJuB9wHlYAPVJ4DngeSz+PgX8Q4B9EdgfGAKMEMBHAKMxxgJPAH8Efo9xO0T54r53HYAP0NgrAXBm2V0M4P2AaRgnAe8EDgQexVgPbAyA+l/j6Vh/L28B6tdBCNcDsFh/H/uwALVxNXBbvpcGgKtvoOYB/W8B3IRxPvARYKDie4em7QawH6J+0g5DsADz3cBdwJ8wVqXadq3RBrQDkzCOkqa4AVggTVLJuKoFhguTbwMfwIIdrAHWYiyMfnsCeCpwAsYbgPHScrdifBUCNLsCwM5cpmqdndkswbgfWAasDDbTXfZQYArGZOC4AK2xFVgNvBzCsxvAvp47sKjdqXW+SvHS4yo3j0rrVJNWqmwt6Rl19kQAtwlUTn8vDzD6AUnyW4I+w2SMaRD0bhFwJ8Y/lTcFOARjLXAzMBvj4Yy+Rgo0EzAeAOYGBa8fgPsKCK7pz1EfubxTBIILBeBZEj63pNp4I3AtFprRBc+/6ghgFw7Tow8LAC6Qhi0s6+s4AzgVQrA8jMV+OFV+DcbxwNvDTIHbsRCey0Wpva1+2o8vhqBNhMXKkuMqN49K61STVqpsLekZdbIAfDTG54HTquq02gH9dwC8l6R1WjYvDaprfKXXNpK4H6oPA2dgjBHYr49DklBBB8pRGPdA0Lm5JYDgWv6jOrB3Ar8DXuql397GlPs+QcBoBfbRYb85pdVc8FwkAH9XQMixhVNDKMF2jC0SNAt3EsD7Au8GjpdA+3lox+J6fQXu84BjMZaEYHHTw4WrcaZAuQ7jRuAXwSrKjQEuw4KaH5nKbxKr+ndF88iK72xaqfrVp/s6XIFxbzqxj/66TXGWnAOLZXcQmgh+ALHpu1NwreKH9lnZtRNSY2/LH4gk+CZ/HPigvtPBy30TGBeHLdEiV0ubjQLOlR08D0IguGPrEq1nOnQGxUs0xSCBZzZwItBc47rmaHmTxjVI+5ULL4uWHqrvXJisshtS8+0qar2y0Kw5zJbAGKQ5XqU5p8Mwrc0mrdU8rd25Wsu7tbYbtNbjtPZrC9pp0l75nqX3a632NheO0N4/K6a1u51hNxVmSbgiQb1YGD0rd8ZcA/8QOBvCBkyCxQZcIDpymKTjROWVDq8eDdwfY2gqfinGN/TtEv8ejAsVbw7tYdwK/AX4emab3fF9ZXPO0OIuw7gCuAlCS5+OhWPM6e33gBUZ2soF58nA+VjYhr+R9nSqvr3kvIop9Gr97sI4R9pnmyj0Lx280sBur39IFHqAWMi1MhUmSMBVSqH3kZZ1Lf7+sPWT8zIvLwh61jsc+IJo+m0Yc0K7JiD8HBbpCyQE3CZ/qcz8LwXepj3wsq8odxYW6W9W/BJMe5mErQU2d/k1rkdaqTbLp68So3lQgulKnZdc2AFcl6PQ+4VLP6FWZ2IB3KMhFv+twE/yC7V7ALgvxpdEWzvjsFh4OpHGuBGLRXki1YabDZ8OmpvVZna8VfTaJeJgaZBr5EltE1UcKKfSHQVUPteOe7A/GeueeFpdO/9BdvrqkmNIvg+RwOnCQrs9DvwUC7B+DfiOAHwx8K0AtfEx4CAIgebOOwfEI2XmPEH25bsCvO7oszAlfiRPcmG9PirrTrNOmRYr5Qx0jfsZ2bHXiyZv6WWOhXGn5650vp/KP1BmzRla5yQtEcoDRednlhVSWfGdTStVv3y6K5bPAvNjjQnq3KZ1d2HvV5cvZtnArfLQXpzZxe7vxPJwkjTIAlEV9xyf7hIttEL5+lkHrV3U5r1YaKPLRRc9f3ykJ2u7TBT68YJ29pJmO0VCZpS8sEvl0fb75s26b+6Qpm4RiA/HQliNDyZlYV/+ON980sfZYQ5ZSO41OtQrZK92yI5u0f3s8GBeCTtwrT4U4zGB4xYxhUK78iCBu1129fzoJ8k7WNT6ZCzSfyaGUosPwDXRJ4A58mg/Jyb0ayx8C6XrV7uv9Ugr1Wb16TPjTFlK2DXugcMRNEWH/l5pimIaWC7es2wzFgA8Tdczfr3xqPIcJNPFDEYEZbf81dRjBW2N1nVUm5jQcJkFg3Wl8ozqPKT71f0FMKdZG3oMrbvNkaK7J+qu1T27E2WDDtbV2TOim5sxVkhzLtF9bXrOo2RPHyfqulFCYW7KDBiLhSnmguFXMT7LU95q1zVtfkyXs3WHHIsLK9qzSsq8egGcmbenA7g+8dJtDRC43Cm4Xgc451BqkbaeJkB1yja/T1rXNW5HyTFaOKfcTJgRQLbQsIsKy1lxPeSRvk5afrak+6pe5tGiF1NHytQ6Vp71OyQE5uevdvzuPBFgY8KJlDxq2VbTOtd7z+pVp5q0UmVrSc+o0wBwPeKVteWg+ZS03Bxp3S7l9VP+VCzub9vFCraKhnfIAdOsG4IxehzSXx7dK3tY1+UBjDy4F2Bcpueh/uhinV6evSJHYIvo71Bpu2XyFrt9vijv3U5s3snhwEvYwTVZwqTqeAPAZfMaAK5HvDqt4tcbF8k56F5Ztyn/Gg6W7rLNYc9a2LfDUu+xOwRat5XHyfZb19t4egFwLj5WTrNH5EB7Qf11qb8n9cBiTcrji7zgx8RdeOJ1X6yru+V1A2EDwGXzGgCuR7y2QzkivM8WzwyHCsQP6IXYlrBDE63n74BfH/Q1ebwxRB7YmfEQo/c+KgEwYgBflif+admUSzH+rvfge8v+btV1or+wOka28g1YeKM3ZvbRAHADwMVp/xcATsfb9cB/kmzbVl0/IS/ret03/xbit73SPioEcO7b73jfo597k0fLS4+ug7bofvJ+LP5xo1ZPcqXjqb1uVrxedapJK1W2lvTCOsB/AGhRDpjYuAlQAAAAAElFTkSuQmCC"
//           ></img>
//         </div>

//         <span className="lg:w-11/12 w-full text-base lg:text-lg tracking-wider lg:tracking-wide lg:justify-start justify-center items-center px-4 lg:items-start lg:py-6 py-3 text-purple-200">
//         {lang[LangKey].horobottomdesc1}
//         </span>
//       </div>

//       <div className="w-full flex justify-center items-center my-6 flex-col">
//         <span className="py-2 lg:px-0 px-4 text-purple-300 font-semibold text-xl lg:text-2xl pb-2 border-dotted border-yellow-500 border-b-2 tracking-wide">
//         {lang[LangKey].horobottomtitle3}
//         </span>
//         <span className="lg:w-11/12 w-full text-base lg:text-lg tracking-wider lg:tracking-wide lg:justify-start justify-center items-center px-4 lg:items-start lg:py-6 py-3 text-purple-200">
//           {lang[LangKey].horobottomdesc2}
//         </span>
//       </div>

//       <div className="w-full flex justify-center items-center my-6 flex-col">
//         <span className="py-2 lg:px-0 px-4 text-purple-300 font-semibold text-xl lg:text-2xl pb-2 border-dotted border-yellow-500 border-b-2 tracking-wide ">
//         {lang[LangKey].horobottomtitle4}
//         </span>
//         <span className="lg:w-11/12 w-full text-base lg:text-lg tracking-wider lg:tracking-wide lg:justify-start justify-center items-center px-4 lg:items-start lg:py-6 py-3 text-purple-200">
//           <li>
//         {lang[LangKey].horopoint1}
//           </li>
//         </span>
//         <span className="lg:w-11/12 w-full text-base lg:text-lg tracking-wider lg:tracking-wide lg:justify-start justify-center items-center px-4 lg:items-start lg:py-6 py-3 text-purple-200">
//           <li>
//           {lang[LangKey].horopoint2}
//           </li>
//         </span>
//         <span className="lg:w-11/12 w-full text-base lg:text-lg tracking-wider lg:tracking-wide lg:justify-start justify-center items-center px-4 lg:items-start lg:py-6 py-3 text-purple-200">
//           <li>
//           {lang[LangKey].horopoint3}
//           </li>
//         </span>
//         <span className="lg:w-11/12 w-full text-base lg:text-lg tracking-wider lg:tracking-wide lg:justify-start justify-center items-center px-4 lg:items-start lg:py-6 py-3 text-purple-200">
//           <li>
//           {lang[LangKey].horopoint4}
//           </li>
//         </span>
//         <span className="lg:w-11/12 w-full text-base lg:text-lg tracking-wider lg:tracking-wide lg:justify-start justify-center items-center px-4 lg:items-start lg:py-6 py-3 text-purple-200">
//           <li>
//           {lang[LangKey].horopoint5}
//           </li>
//         </span>
//         <span className="lg:w-11/12 w-full text-base lg:text-lg tracking-wider lg:tracking-wide lg:justify-start justify-center items-center px-4 lg:items-start lg:py-6 py-3 text-purple-200">
//           <li>
//           {lang[LangKey].horopoint6}
//           </li>
//         </span>
//       </div>
//     </div>
//   );
// };

// export default HoroscopeBottom;

// "use client";
// import { get, ref } from "firebase/database";
// import { useEffect, useState } from "react";
// import { database } from "../firebaseConfig";

// export default function Home() {
//   const [users, setUsers] = useState<any[]>([]);

//   useEffect(() => {
//     const usersRef = ref(database, "users");
//     get(usersRef)
//       .then((snapshot) => {
//         if (snapshot.exists()) {
//           const usersArray = Object.entries(snapshot.val()).map(
//             ([id, data]) => ({
//               id,
//               ...data,
//             })
//           );
//           setUsers(usersArray);
//           console.log(usersArray);
//         } else {
//           console.log("No data available");
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);
//   return (
//     <div className="flex justify-center w-full h-full">
//       <div className="bg-slate-900 flex w-9/12 h-96 justify-center m-10 p-3">
//         <div className="bg-slate-50 flex flex-col w-72 h-72 mt-5 p-10">
//           {users.map((user) => (
//             <>
//               <div key={user.id}>
//                 <h2>{user.uname}</h2>
//                 <h2>{user.pass}</h2>
//               </div>
//               <div key={user.id}>
//                 <h2>{user.email}</h2>
//                 <h2>{user.mob}</h2>
//                 <h2>{user.name}</h2>
//               </div>
//             </>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

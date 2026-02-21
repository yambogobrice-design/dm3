"use client";
// import React from "react";
// import Inscription from "../Inscription/page";
// import Connexion from "../Connexion/page";

// export default function Home() {
//   return (
//     <div>
//         <Connexion/>
//         <Inscription/>
//     </div>
//   );
// }


// const User = (props) => {
//   return (
//     <section>
//       <img src={props.img} alt={props.name} width={200} />
//       <h1>Name: {props.name}</h1>
//       <h2>Age: {props.age +2}</h2>
//       <h3>Is married: {props.isMarried ? "Marie" : "Celibataire "}</h3>
//       <h4>Hobbies: {props.hobbies} </h4>
//       <h5>Nationalite: {props.nationalite} </h5>
//     </section>
//   );
// };   

// const App = () => {
//   return (
//     <User
//       img="https://avatars.githubusercontent.com/u/85052811?v=4"
//       name="Zagba_LeRequin"
//       age={18}
//       isMarried={true}
//       hobbies={["Paiya", "Manger_la_vie"]}
//       nationalite={"Malgache"}
//     />
//   );
// };

import React from 'react';
import Table from '../../Composant/Table';

// ─── Tes données JSON ─────────────────────────────────────────────────────────
const USERS = [
  {
    id: 1,
    name: 'Lewis Hamilton',
    country: 'United States',
    avatar: 'https://img.daisyui.com/images/profile/demo/2@94.webp',
    company: 'Zemlak, Daniel and Leannon',
    job: 'Desktop Support Technician',
    color: 'Purple',
  },
  {
    id: 2,
    name: 'Brice Swyre',
    country: 'China',
    avatar: 'https://img.daisyui.com/images/profile/demo/3@94.webp',
    company: 'Carroll Group',
    job: 'Tax Accountant',
    color: 'Red',
  },
  {
    id: 3,
    name: 'Marjy Ferencz',
    country: 'Russia',
    avatar: 'https://img.daisyui.com/images/profile/demo/4@94.webp',
    company: 'Rowe-Schoen',
    job: 'Office Assistant I',
    color: 'Crimson',
  },
  {
    id: 4,
    name: 'Yancy Tear',
    country: 'Brazil',
    avatar: 'https://img.daisyui.com/images/profile/demo/5@94.webp',
    company: 'Wyman-Ledner',
    job: 'Community Outreach Specialist',
    color: 'Indigo',
  },
];

// ─── Home ─────────────────────────────────────────────────────────────────────
export default function Home() {
  const handleDetails = (row) => {
    console.log('Row details:', row);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold p-4">Users</h1>
      <Table
        initialRows={USERS}
        columns={['Name', 'Prenom', 'filiere']}
        onDetails={handleDetails}
      />
    </div>
  );
}

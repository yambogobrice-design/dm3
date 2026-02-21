// "use client";
// import React from "react";

// const App = () => {
  
//   return (
//     <section>
//       <form>
//         <label >Email</label>
//             <input type="text" 
//             placeholder="Entrez Votre Email" 
//             id="Email" />
//          <label >Mot_de_passe</label>
//             <input type="text" 
//             placeholder="Entrez Votre Mot_de_passe" 
//             id="mot" />  
//         <button type="submit">Se connecter</button>
//       </form>
//     </section>
//   );
// };

// export default App;

// "use client";
// import React, { useState } from "react";

// const App = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Email:", email);
//     console.log("Password:", password);
//     // Ajoutez votre logique de connexion ici
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-200 to-base-300 p-4">
//       <div className="card w-full max-w-md bg-base-100 shadow-2xl">
//         <div className="card-body p-8">
//           {/* En-tête */}
//           <div className="text-center mb-8">
//             <div className="inline-block p-3 bg-primary/10 rounded-2xl mb-4">
//               <div className="text-3xl">🔐</div>
//             </div>
//             <h1 className="text-2xl font-bold text-gray-800">Bienvenue</h1>
//             <p className="text-gray-600 mt-2">Connectez-vous à votre compte</p>
//           </div>

//           {/* Formulaire */}
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Email */}
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text font-semibold">Adresse email</span>
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <span className="text-gray-500">📧</span>
//                 </div>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="votre@email.com"
//                   className="input input-bordered w-full pl-10 focus:input-primary focus:ring-2 focus:ring-primary/20"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Mot de passe */}
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text font-semibold">Mot de passe</span>
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <span className="text-gray-500">🔒</span>
//                 </div>
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="••••••••"
//                   className="input input-bordered w-full pl-10 pr-10 focus:input-primary focus:ring-2 focus:ring-primary/20"
//                   required
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                 >
//                   {showPassword ? "🙈" : "👁️"}
//                 </button>
//               </div>
//               <div className="flex justify-between items-center mt-2">
//                 <label className="cursor-pointer label p-0">
//                   <input type="checkbox" className="checkbox checkbox-sm" />
//                   <span className="label-text ml-2">Se souvenir de moi</span>
//                 </label>
//                 <a href="#" className="text-sm link link-primary">
//                   Mot de passe oublié ?
//                 </a>
//               </div>
//             </div>

//             {/* Bouton */}
//             <button
//               type="submit"
//               className="btn btn-primary w-full py-3 text-lg font-semibold hover:shadow-lg transition-all duration-300"
//             >
//               Se connecter
//             </button>

//             {/* Séparateur */}
//             <div className="divider text-gray-500 text-sm">OU</div>

//             {/* Lien inscription */}
//             <div className="text-center">
//               <p className="text-gray-600">
//                 Nouveau sur 2iE ?{" "}
//                 <a href="/Inscription" className="link link-primary font-semibold">
//                   Créer un compte
//                 </a>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const App = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // Ajoutez votre logique de connexion ici
    
    // Redirection vers la page Home après connexion
    router.push("/Home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-200 to-base-300 p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl">
        <div className="card-body p-8">
          {/* En-tête */}
          <div className="text-center mb-8">
            <div className="inline-block p-3 bg-primary/10 rounded-2xl mb-4">
              <div className="text-3xl">🔐</div>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Bienvenue</h1>
            <p className="text-gray-600 mt-2">Connectez-vous à votre compte</p>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Adresse email</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">📧</span>
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  className="input input-bordered w-full pl-10 focus:input-primary focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>
            </div>

            {/* Mot de passe */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Mot de passe</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">🔒</span>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="input input-bordered w-full pl-10 pr-10 focus:input-primary focus:ring-2 focus:ring-primary/20"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
              <div className="flex justify-between items-center mt-2">
                <label className="cursor-pointer label p-0">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span className="label-text ml-2">Se souvenir de moi</span>
                </label>
                <a href="#" className="text-sm link link-primary">
                  Mot de passe oublié ?
                </a>
              </div>
            </div>

            {/* Bouton */}
            <button
              type="submit"
              className="btn btn-primary w-full py-3 text-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Se connecter
            </button>

            {/* Séparateur */}
            <div className="divider text-gray-500 text-sm">OU</div>

            {/* Lien inscription */}
            <div className="text-center">
              <p className="text-gray-600">
                Nouveau sur 2iE ?{" "}
                <a href="/Inscription" className="link link-primary font-semibold">
                  Créer un compte
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
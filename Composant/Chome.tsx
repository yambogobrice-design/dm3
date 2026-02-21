import Link from "next/link";

interface TitrePage {
    Titre : string,
    Titre2 : string,
    SousTitle : string
}
const EntetePage = ({Titre , Titre2 , SousTitle } : TitrePage) => {

  return (

        <div>

            <h1 className="text-4xl md:text-5xl font-bold text-center">
                {Titre} <br />  {Titre2}
             
            </h1>
            <p className="py-6 text-gray-800 text-center">
                {SousTitle}
              
            </p>

        
          </div>


  );
}


export default EntetePage
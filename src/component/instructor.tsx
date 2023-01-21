import "../sass/component/_instructor.scss";

import profile from "./../assets/profile.jpg";


export default function Instructor() {
  return (
    <section className="instructor">
      
      <h3>Instructores y mentores</h3>
      {/* <div className="instructor__profile">

        <div
            className="instructor__profile-image"
            style={{
              backgroundImage: `url(${yahyrpic})`,
            }}
        ></div>
        <div className="instructor__profile-info">
        
          <p>
            <b>Yahyr Paredes</b> es un programador experimentado con más de 15 años de
            experiencia en la industria, ha trabajado en diversas empresas a lo
            largo de Latinoamérica, desde startups, corporaciones y unicornios.
          </p>
          
        </div>
        
      </div> */}
      <div className="instructor__profile">

        <div
            className="instructor__profile-image"
            style={{
              backgroundImage: `url(${profile})`,
            }}
        ></div>
        <div className="instructor__profile-info">
        
          <p>
            <b>Joel Ibaceta</b> es un programador experimentado con más de 15 años de
            experiencia en la industria, ha trabajado en diversas empresas a lo
            largo de Latinoamérica, desde startups, corporaciones y unicornios.
          </p>
          
        </div>
        
      </div>
    </section>
  );
}

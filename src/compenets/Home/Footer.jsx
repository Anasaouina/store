import React from "react";

import "./Footer.css";

const Footer = () => {
  var currentDate = new Date();

  // Get the current year using the getFullYear() method
  var currentYear = currentDate.getFullYear();
  return (
    <div>
      <footer className="container-fluid  text-light footer pt-2  wow " id="footer">
        <div className="container py-5">
          <div className="row g-5 d-flex justify-content-between">
            <div className="col-lg-4 col-md-6">
              <h4 className="text-white mb-3 text-center fw-bold">
                À propos de Store
              </h4>
              <div className="underline1 "></div>
              <p className="text-center mt-3">
                Store est votre destination en ligne de confiance pour des
                fruits, légumes, herbes et produits artisanaux de qualité
                supérieure. Découvrez notre sélection soigneusement choisie pour
                des ingrédients frais et savoureux qui inspirent des repas
                délicieux au quotidien.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 text-center">
              <h4 className="text-white mb-3 fw-bold">Contact</h4>
              <div className="underline1 "></div>
              <p className="mb-2 mt-3">
                <i className="fa fa-envelope me-3"></i>anasaouina2002@gmail.com
              </p>
              <div className="pt-2 d-flex justify-content-center align-items-center">
                <a className="btn btn-outline-light btn-social mx-2" href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-outline-light btn-social mx-2" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-light btn-social mx-2" href="">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-outline-light btn-social mx-2" href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <div className=" text-center fs-5 fw-light copy">
          {currentYear} &copy; Store
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};
export default Footer;

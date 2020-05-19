import React from "react";
import "../styles/aboutUs.css"


const AboutUs = props => {
  return (
    <div className="About imageAbout">
      <p>About us</p>
      <div className="imageAbout">
      
        <img
          src="/images/volkswagen-passat-1-8t-sel-premium-car-front-wheel-drive_tv50Veyr.png"
          alt="car"
        />
        <img
          src="/images/kia-motors-kia-carens-kia-rio_Se6VKdYp.png"
          alt="car"
        />
        <p>
          Nos véhicules de qualité sont à votre disposition pour un trajet des
          plus agréables, où confort, sécurité, et sérénité sont les
          maîtres-mots. Nos véhicules sont bien équipés, entretenus, propres et
          récents.
        </p>
      </div>
      <div className="imageAbout">
        <img src="/images/green.png" alt="green attitude" />
        <p>
          Quel que soit le véhicule que vous choisissez, vous limitez votre
          impact environnemental : l'intégralité des émissions de CO2 générées
          par nos véhicules hybrides sont limitées.
        </p>
      </div>

      <div className="imageAbout">
        <img
          src="/images/transfer_icon-icons.com_65407.png"
          alt="transfert"
        />
        <img
          src="/images/raiway_station_4329.png"
          alt="transfert"
        />
        <img
          src="/images/-local-airport_90221.png"
          alt="transfert"
        />
        <p>
          KARHABA est à votre disposition pour vos transferts personnels et
          professionels ainsi que vers les les gares et aéroports 2_Nous vous
          accompagnons à vos évènements, mariages(décoration véhicule sur
          demande), séminaires et réceptions.
        </p>
      </div>
      <di>
        <img src="/images/icone-mariage-png-2.png" alt="mariage" />
        <img src="/images/seminar-40-957444.png" alt="seminar" />
        <img src="/images/cocktail.png" alt="cocktail" />
        <p>
          Nous assurons également vos transferts longue distance (province,
          Europe) et trajets touristiques.{" "}
        </p>
      </di>

      <div>
        <img src="/images/driver.png" alt="driver" />
        <p>
          Un chauffeur ponctuel, serieux, réactif, professionnel, aimable,
          discret et courtois, à l’écoute de vos attentes, c’est ce que nous
          vous proposons chez KARHABA. Nous sommes à votre disposition 24h/24 et
          7j/7
        </p>
      </div>

      <div>
        <img src="/images/facturation.png" alt="facturation" />
        <p>
          La validation de votre prise en charge se fait par l’envoi d’un sms et
          email, la facturation également afin que vous disposiez rapidemnet de
          vos information.{" "}
        </p>
      </div>

      <div>
        <img
          src="/images/iconfinder_1_-_Paypal_2416651.png"
          alt="paypal"
        />
        <img src="/images/credicard.png" alt="credit card" />
        <p>
          Notre application est évidemment sécurisée, ce qui vous permet
          d’effectuer toutes vos réservations et paiement(Visa,Amex, Mastercard,
          Paypal) en toute sécrité.
        </p>
      </div>

      <div>
        <img
          src="/images/icon-tourisme-300x300.png"
          alt="tourisme"
        />
        <img src="/images/business-partner-handshake.png" alt="business" />
        <img
          src="/images/shopping-bag-png-icon.png"
          alt="shopping"
        />
        <p>
          Tourisme, business ou shopping? N’hésitez pas, choisissez-nous !
          KARHABA se démarque de ses concurrents grâce à la satisfaction de ses
          clients, demandez à Google : Avis et témoignages Clients.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

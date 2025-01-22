import React from "react";
import { Helmet } from "react-helmet"; // Voor de noindex tag
import "../terms.css"; // Zorg dat deze CSS gekoppeld is

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      {/* Noindex Meta Tag */}
      <Helmet>
        <meta name="robots" content="noindex" />
        <title>Algemene Voorwaarden - Xinu</title>
      </Helmet>

      {/* Pagina Titel */}
      <h1 className="text-4xl font-extrabold text-primary text-center mb-12">
        Algemene Voorwaarden
      </h1>

      {/* Inhoud */}
      <div className="text-gray-800 leading-relaxed space-y-8">
        {/* Inleiding */}
        <section>
          <p>
            Welkom bij Xinu. Hieronder kan je onze algemene voorwaarden terugvinden.
          </p>
          <p>
            Voor de leesbaarheid wordt Xinu in dit document afgekort tot "Xinudesign" en "X3DPrints".
          </p>
        </section>

        {/* Bedrijfsgegevens */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Bedrijfsgegevens:</h2>
          <ul className="list-disc pl-6">
            <li><strong>Naam van de vestigingseenheid:</strong> Xinu BV</li>
            <li><strong>Naam:</strong> Michaël Redant</li>
            <li><strong>Adres:</strong> Provincieweg 34a, 9552 Borsbeke</li>
            <li><strong>Telefoonnummer:</strong> 0496.90.85.03</li>
            <li><strong>E-mail:</strong> michael@xinudesign.be</li>
            <li><strong>BTW-nummer:</strong> BE0681759451</li>
          </ul>
        </section>

        {/* Artikel 1: Definities */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Artikel 1: Definities</h2>
          <p>In deze voorwaarden worden verstaan onder:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Opdrachtgever:</strong> de natuurlijke of rechtspersoon die de opdracht verstrekt aan Xinudesign of X3DPrints.</li>
            <li><strong>Xinudesign:</strong> Xinu BV, gevestigd aan Provincieweg 34a, 9552 Borsbeke, verantwoordelijk voor de uitvoering van de opdracht zoals omschreven in deze algemene voorwaarden. Zie de bedrijfsgegevens hierboven.</li>
            <li><strong>Opdracht:</strong> de door de opdrachtgever verstrekte opdracht tot het verrichten van werkzaamheden door Xinudesign of X3DPrints.</li>
            <li><strong>Overeenkomst:</strong> de overeenkomst tussen Xinudesign en de opdrachtgever.</li>
          </ul>
        </section>

        <section>
  <h2 className="text-2xl font-bold mb-4">Artikel 2: Toepasselijkheid</h2>
  <p>
    1. Deze algemene voorwaarden zijn van toepassing op alle producten, diensten, handelingen en overeenkomsten die worden verstrekt door, of gesloten met Xinudesign.
  </p>
  <p>
    2. Afwijkingen van deze voorwaarden zijn slechts geldig indien deze uitdrukkelijk en schriftelijk zijn overeengekomen tussen de opdrachtgever en Xinudesign.
  </p>
  <p>
    3. Door het ondertekenen van een overeenkomst of offerte, geef je ook aan dat je kennis hebt genomen van deze algemene voorwaarden en dat je ermee akkoord gaat.
  </p>
</section>
<section>
  <h2 className="text-2xl font-bold mb-4">Artikel 3: Offertes</h2>
  <ul className="list-disc pl-6 space-y-2">
    <li>
      Alle aanbiedingen en offertes van Xinudesign zijn vrijblijvend en gelden slechts als aanbod tot het sluiten van een overeenkomst. Deze offertes zijn 30 dagen geldig, tenzij een andere termijn vermeld wordt in de offerte. Aan de hand van de offerte zal een factuur opgesteld worden, met indien van toepassing mogelijke extra bestelde werken.
    </li>
    <li>
      Het aanbod kan enkel schriftelijk worden aanvaard of via een CRM-systeem door de opdrachtgever en dit samen met de algemene voorwaarden.
    </li>
    <li>
      Een samengestelde prijsopgave geeft geen verplichting aan Xinudesign tot het verrichten van enkel een deel van de opdracht tegen een overeenkomstig deel van de opgegeven prijs.
    </li>
    <li>
      De getekende offerte is allesbepalend en overstijgt eerder afgesproken mondelinge overeenkomsten.
    </li>
    <li>
      Aanbiedingen, promoties en kortingen gelden niet voor toekomstige opdrachten.
    </li>
  </ul>
</section>
<section>
  <h2 className="text-2xl font-bold mb-4">Artikel 4: Uitvoering van de overeenkomst</h2>
  <ol className="list-decimal pl-6 space-y-2">
    <li>Xinudesign zal de opdracht naar beste inzicht en vermogen uitvoeren en daarbij rekening houden met de eisen en wensen van de opdrachtgever, zoals deze bij de opdracht/offerte zijn vermeld.</li>
    <li>Indien tijdens de uitvoering van de opdracht blijkt dat voor een behoorlijke uitvoering meer werkzaamheden nodig zijn dan bij de opdracht zijn vermeld, zal Xinudesign deze werkzaamheden in overleg met de opdrachtgever uitvoeren en de opdrachtgever hierover tijdig informeren.</li>
    <li>Xinudesign heeft het recht om de uitvoering van de overeenkomst te laten verrichten door derden, al dan niet in onderaanneming.</li>
    <li>De opdrachtgever draagt er zorg voor dat alle gegevens, waarvan Xinudesign aangeeft dat deze noodzakelijk zijn of waarvan de opdrachtgever redelijkerwijs behoort te begrijpen dat deze noodzakelijk zijn voor het uitvoeren van de overeenkomst, tijdig worden overgemaakt aan Xinudesign. Indien deze niet tijdig worden overgemaakt, heeft Xinudesign het recht de uitvoering op te schorten en eventuele gemaakte kosten in rekening te brengen volgens het gebruikelijke tarief van €75 per uur.</li>
    <li>Xinudesign is niet aansprakelijk voor schade van welke aard dan ook veroorzaakt door foutieve, onvolledige of onjuiste gegevens verstrekt door de opdrachtgever.</li>
    <li>Xinudesign zal de werkzaamheden uitvoeren volgens de termijn opgegeven in de offerte. Indien dit in meerdere fasen gebeurt, kan Xinudesign volgende fasen opschorten totdat de opdrachtgever de voorgaande fasen heeft goedgekeurd en betaald.</li>
  </ol>
</section>
<section>
  <h2 className="text-2xl font-bold mb-4">Artikel 5: Gebruiksvoorwaarden</h2>
  <ol className="list-decimal pl-6 space-y-2">
    <li>De opdrachtgever zal de diensten niet gebruiken voor onrechtmatige handelingen, strafbare feiten of handelingen die in strijd zijn met deze voorwaarden.</li>
    <li>De opdrachtgever is zelf verantwoordelijk en aansprakelijk voor het gebruik van de geleverde diensten.</li>
    <li>Het verspreiden van auteursrechtelijk beschermd materiaal zonder vooraf verkregen toestemming van de auteur wordt beschouwd als een illegale activiteit.</li>
  </ol>
</section>
<section>
  <h2 className="text-2xl font-bold mb-4">Artikel 6: Extra werken en wijzigingen</h2>
  <ol className="list-decimal pl-6 space-y-2">
    <li>Indien Xinudesign op verzoek van de opdrachtgever extra prestaties heeft verricht die niet in de offerte staan, zullen deze prestaties worden gefactureerd volgens het gebruikelijke tarief van €75 per uur.</li>
    <li>Na het goedkeuren van de offerte is het niet mogelijk om kosteloos veranderingen aan te brengen aan een goedgekeurd design.</li>
  </ol>
</section>
<section>
  <h2 className="text-2xl font-bold mb-4">Artikel 7: Betaling en facturen</h2>
  <ol className="list-decimal pl-6 space-y-2">
    <li>Alle facturen zijn betaalbaar via overschrijving of online betalingssystemen. Eventuele betwistingen moeten binnen 7 dagen na factuurdatum schriftelijk worden gemeld.</li>
    <li>Facturen kunnen worden opgesplitst in eenmalige en wederkerende kosten, afhankelijk van de opdracht.</li>
    <li>Indien de betalingstermijn wordt overschreden, zal een schadevergoeding worden gerekend van €25 per aanmaning. Na 3 aanmaningen kan een incassobureau worden ingeschakeld.</li>
    <li>De opdrachtgever is pas eigenaar van de broncode en intellectuele eigendom na betaling van alle facturen.</li>
  </ol>
</section>
<section>
  <h2 className="text-2xl font-bold mb-4">Artikel 8: Aansprakelijkheid</h2>
  <ol className="list-decimal pl-6 space-y-2">
    <li>Xinudesign zal de te verstrekken diensten met zorg uitvoeren en is niet aansprakelijk voor fouten veroorzaakt door foutieve gegevens verstrekt door de opdrachtgever.</li>
    <li>De aansprakelijkheid van Xinudesign is beperkt tot het bedrag dat al in rekening is gebracht of nog in rekening te brengen is aan de opdrachtgever.</li>
  </ol>
</section>
<section>
  <h2 className="text-2xl font-bold mb-4">Artikel 9: Privacy</h2>
  <ol className="list-decimal pl-6 space-y-2">
    <li>Uw persoonsgegevens worden verzameld conform de AVG-verwerkingsovereenkomst.</li>
    <li>Alle persoonsgegevens kunnen op verzoek worden verwijderd, tenzij een lopende overeenkomst dit verhindert.</li>
  </ol>
</section>
<section>
  <h2 className="text-2xl font-bold mb-4">Artikel 10: Intellectueel eigendomsrecht</h2>
  <ol className="list-decimal pl-6 space-y-2">
    <li>Xinudesign behoudt het recht om gerealiseerde projecten te gebruiken voor referentiedoeleinden.</li>
    <li>Opdrachtgever verkrijgt na volledige betaling het gebruiksrecht voor de door Xinudesign vervaardigde zaken.</li>
  </ol>
</section>
<section>
  <h2 className="text-2xl font-bold mb-4">Artikel 12: Specifieke Voorwaarden voor 3D-prints</h2>
  <ol className="list-decimal pl-6 space-y-2">
    <li>X3DPrints biedt 3D-printdiensten aan op basis van aangeleverde ontwerpen en specificaties van de opdrachtgever.</li>
    <li>De opdrachtgever garandeert dat de aangeleverde ontwerpen en specificaties geen inbreuk maken op intellectuele eigendomsrechten van derden.</li>
    <li>X3DPrints behoudt het recht om opdrachten te weigeren die onwettig, ethisch onverantwoord of technisch onuitvoerbaar zijn.</li>
    <li>De door X3DPrints vervaardigde prints worden geleverd zoals overeengekomen in de offerte. Kleine afwijkingen in kleur, textuur of details zijn mogelijk en worden niet beschouwd als gebreken.</li>
  </ol>
</section>
<section>
  <h2 className="text-2xl font-bold mb-4">Artikel 13: Eigendom van Ontwerpen en Materialen</h2>
  <ol className="list-decimal pl-6 space-y-2">
    <li>Alle ontwerpen en modellen die door de opdrachtgever worden aangeleverd, blijven eigendom van de opdrachtgever. X3DPrints behandelt deze bestanden vertrouwelijk.</li>
    <li>Bij gebruik van door X3DPrints ontworpen modellen of wijzigingen in bestaande modellen blijft het intellectuele eigendomsrecht bij X3DPrints, tenzij anders schriftelijk overeengekomen.</li>
    <li>De opdrachtgever heeft geen recht op restmateriaal, tenzij dit vooraf anders is overeengekomen.</li>
  </ol>
</section>
<section>
  <h2 className="text-2xl font-bold mb-4">Artikel 14: Garantie en Klachten</h2>
  <ol className="list-decimal pl-6 space-y-2">
    <li>X3DPrints garandeert een kwalitatieve uitvoering van de opdracht, maar kan geen garanties bieden op de duurzaamheid of geschiktheid van een ontwerp voor specifieke toepassingen.</li>
    <li>Klachten over geleverde 3D-prints dienen binnen 7 dagen na ontvangst schriftelijk te worden gemeld. Na deze termijn worden de geleverde producten beschouwd als geaccepteerd.</li>
    <li>Bij gegronde klachten zal X3DPrints naar eigen inzicht overgaan tot reparatie, vervanging of restitutie van de betreffende print.</li>
  </ol>
</section>
<section>
  <h2 className="text-2xl font-bold mb-4">Artikel 15: Leveringstermijn en Verzending</h2>
  <ol className="list-decimal pl-6 space-y-2">
    <li>De leveringstermijn van 3D-prints wordt in de offerte gespecificeerd. Vertragingen door overmacht geven geen recht op annulering van de opdracht.</li>
    <li>Eventuele verzendkosten en risico’s voor verzending zijn voor rekening van de opdrachtgever, tenzij anders overeengekomen.</li>
    <li>X3DPrints is niet verantwoordelijk voor schade of verlies tijdens verzending door derden.</li>
  </ol>
</section>
<section>
  <h2 className="text-2xl font-bold mb-4">Artikel 16: Technische Beperkingen</h2>
  <ol className="list-decimal pl-6 space-y-2">
    <li>De opdrachtgever erkent dat 3D-printtechnologie beperkingen kent op het gebied van materiaal, precisie en schaal. X3DPrints streeft naar de beste mogelijke kwaliteit binnen deze beperkingen.</li>
    <li>Indien een ontwerp technisch niet uitvoerbaar is, zal X3DPrints de opdrachtgever tijdig informeren en een alternatieve oplossing voorstellen.</li>
  </ol>
</section>
<section>
  <h2 className="text-2xl font-bold mb-4">Artikel 16: Technische Beperkingen</h2>
  <ol className="list-decimal pl-6 space-y-2">
    <li>De opdrachtgever erkent dat 3D-printtechnologie beperkingen kent op het gebied van materiaal, precisie en schaal. X3DPrints streeft naar de beste mogelijke kwaliteit binnen deze beperkingen.</li>
    <li>Indien een ontwerp technisch niet uitvoerbaar is, zal X3DPrints de opdrachtgever tijdig informeren en een alternatieve oplossing voorstellen.</li>
  </ol>
</section>
<section>
  <h2 className="text-2xl font-bold mb-4">Artikel 17: Annulering en Wijzigingen</h2>
  <ol className="list-decimal pl-6 space-y-2">
    <li>Een opdracht kan enkel worden geannuleerd indien de productie nog niet is gestart. Reeds gemaakte kosten worden in rekening gebracht.</li>
    <li>Wijzigingen aan ontwerpen of specificaties na de start van de productie worden beschouwd als extra werk en gefactureerd tegen een tarief van €75 per uur.</li>
  </ol>
</section>
<section>
  <h2 className="text-2xl font-bold mb-4">Artikel 18: Verantwoordelijkheid van de Opdrachtgever</h2>
  <ol className="list-decimal pl-6 space-y-2">
    <li>De opdrachtgever is verantwoordelijk voor de naleving van alle wettelijke en regelgevende eisen met betrekking tot het gebruik van de 3D-prints.</li>
    <li>X3DPrints is niet aansprakelijk voor schade of claims die voortvloeien uit het onrechtmatig gebruik van door de opdrachtgever aangeleverde ontwerpen.</li>
  </ol>
</section>

      </div>
    </div>
  );
};

export default TermsAndConditions;

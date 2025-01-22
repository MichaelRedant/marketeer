import React from "react";

function CookiePolicy() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">Cookiebeleid</h1>
      <p className="mb-6">
        Xinudesign maakt gebruik van cookies om je ervaring te verbeteren,
        prestaties te analyseren en marketingactiviteiten te ondersteunen. Hier
        leggen we uit welke cookies we gebruiken en hoe je deze kunt beheren.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Welke cookies gebruiken we?</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full mb-6 border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border border-gray-300">Cookie</th>
              <th className="px-4 py-2 border border-gray-300">Niet-anonieme bezoeker</th>
              <th className="px-4 py-2 border border-gray-300">Anonieme bezoeker</th>
              <th className="px-4 py-2 border border-gray-300">Standaard levensduur</th>
              <th className="px-4 py-2 border border-gray-300">Module</th>
              <th className="px-4 py-2 border border-gray-300">Cookietype</th>
            </tr>
          </thead>
          <tbody>
            {/* Basic cookies */}
            <tr>
              <td className="border px-4 py-2">_pk_id.&lt;appID&gt;.&lt;domainHash&gt;</td>
              <td className="border px-4 py-2">Altijd</td>
              <td className="border px-4 py-2">Altijd (indien de 30-minuten-cookieoptie aanstaat)</td>
              <td className="border px-4 py-2">
                13 maanden (niet-anonieme bezoekers)
                <br />
                30 minuten (anonieme bezoekers, indien de 30-minuten-cookieoptie aanstaat)
              </td>
              <td className="border px-4 py-2">Tracker (JS tracking client)</td>
              <td className="border px-4 py-2">First-party</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">_pk_ses.&lt;appID&gt;.&lt;domainHash&gt;</td>
              <td className="border px-4 py-2">Altijd</td>
              <td className="border px-4 py-2">Altijd</td>
              <td className="border px-4 py-2">30 minuten</td>
              <td className="border px-4 py-2">Tracker (JS tracking client)</td>
              <td className="border px-4 py-2">First-party</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">ppms_privacy_&lt;appID&gt;</td>
              <td className="border px-4 py-2">Altijd</td>
              <td className="border px-4 py-2">Altijd</td>
              <td className="border px-4 py-2">12 maanden</td>
              <td className="border px-4 py-2">Consent Manager</td>
              <td className="border px-4 py-2">First-party</td>
            </tr>

            {/* Additional cookies */}
            <tr>
              <td className="border px-4 py-2">ppms_privacy_bar_&lt;appID&gt;</td>
              <td className="border px-4 py-2">Optioneel</td>
              <td className="border px-4 py-2">Optioneel</td>
              <td className="border px-4 py-2">Tot het einde van de sessie</td>
              <td className="border px-4 py-2">Consent Manager</td>
              <td className="border px-4 py-2">First-party</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">stg_traffic_source_priority</td>
              <td className="border px-4 py-2">Optioneel</td>
              <td className="border px-4 py-2">Optioneel</td>
              <td className="border px-4 py-2">30 minuten</td>
              <td className="border px-4 py-2">Tag Manager</td>
              <td className="border px-4 py-2">First-party</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">stg_last_interaction</td>
              <td className="border px-4 py-2">Optioneel</td>
              <td className="border px-4 py-2">Optioneel</td>
              <td className="border px-4 py-2">365 dagen</td>
              <td className="border px-4 py-2">Tag Manager</td>
              <td className="border px-4 py-2">First-party</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">stg_returning_visitor</td>
              <td className="border px-4 py-2">Optioneel</td>
              <td className="border px-4 py-2">Optioneel</td>
              <td className="border px-4 py-2">365 dagen</td>
              <td className="border px-4 py-2">Tag Manager</td>
              <td className="border px-4 py-2">First-party</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">stg_pk_campaign</td>
              <td className="border px-4 py-2">Optioneel</td>
              <td className="border px-4 py-2">Optioneel</td>
              <td className="border px-4 py-2">Tot het einde van de sessie</td>
              <td className="border px-4 py-2">Tag Manager</td>
              <td className="border px-4 py-2">First-party</td>
            </tr>
          </tbody>
        </table>
      </div>


    
      <h2 className="text-2xl mt-5 font-semibold mb-4">Hoe kun je cookies beheren?</h2>
      <p className="mb-6">
        Je kunt je cookievoorkeuren wijzigen via onze cookie-banner. Daarnaast
        kun je cookies beheren via de instellingen van je browser.
      </p>


      <h2 className="text-2xl font-semibold mb-4 mt-6">Contact</h2>
      <p>
        Als je vragen hebt over ons cookiebeleid, neem dan contact met ons op
        via{" "}
        <a
          href="mailto:michael@xinudesign.be"
          className="text-primary underline hover:text-accent transition duration-300"
        >
          michael@xinudesign.be
        </a>
        .
      </p>
    </div>
  );
}

export default CookiePolicy;

export interface ServiceArticle {
  title: string;
  url: string;
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  indications: string[];
  icon: string;
  images: string[];
  articles?: ServiceArticle[];
}

export const services: Service[] = [
  {
    slug: "diagnostyka",
    title: "Diagnostyka",
    shortDescription:
      "Kompleksowa ocena stanu zdrowia pacjenta, która pozwala na precyzyjne określenie przyczyn dolegliwości.",
    fullDescription:
      "Diagnostyka jest kluczowym elementem skutecznego leczenia. Wiedza na tematukładu ruchu i ciała człowieka pozwala na identyfikowanie zaburzeń, napięć wludzkim ciele. Dokładny wywiad, testy diagnostyczne, czy analiza chodu pomagajądobrać odpowiednie postępowanie terapeutyczne. Na postawę ciała, przewlekłe bóle iwiększość zależności w ludzkim ciele duży wpływ mają zapomniane schorzenia. Mogąto być zarówno kontuzje sprzed lat, jak również styl życia (praca, sport, codziennenawyki). To wszystko umożliwi wybrać kierunek terapii.",
    benefits: [
      "Precyzyjne określenie przyczyn dolegliwości",
      "Indywidualny plan terapii",
      "Holistyczne podejście do pacjenta",
      "Ocena postępów leczenia",
    ],
    indications: [
      "Bóle kręgosłupa i stawów",
      "Ograniczenia ruchomości",
      "Problemy z postawą ciała",
      "Przewlekłe dolegliwości bólowe",
    ],
    icon: "stethoscope",
    images: [
      "/images/services/diagnostyka-1.jpg",
      "/images/services/diagnostyka-2.jpg",
    ],
  },
  {
    slug: "terapia-manualna",
    title: "Terapia manualna",
    shortDescription: "Holistyczna, nieinwazyjna metoda fizjoterapii",
    fullDescription:
      "Jedna z metod fizjoterapii, a jednocześnie terapia holistyczna, której celem jest złagodzenie dolegliwości oraz możliwie trwała poprawa stanu zdrowia pacjenta poprzez odblokowanie stawów lub fragmentów kręgosłupa i przywrócenie w miarę normalnej ruchomości w leczonych obszarach. To naturalna i nieinwazyjna metoda leczenia i diagnostyki.",
    benefits: [
      "Szybka ulga w bólu",
      "Przywrócenie prawidłowej ruchomości stawów",
      "Rozluźnienie napiętych mięśni",
      "Poprawa funkcji układu nerwowego",
    ],
    indications: [
      "Bóle kręgosłupa szyjnego, piersiowego i lędźwiowego",
      "Bóle głowy pochodzenia szyjnego",
      "Dysfunkcje stawów obwodowych",
      "Rwa kulszowa i barkowa",
    ],
    icon: "hand",
    images: [
      "/images/services/manualna-1.jpg",
      "/images/services/manualna-2.jpg",
    ],
  },
  {
    slug: "terapia-czaszkowo-krzyzowa",
    title: "Terapia Czaszkowo-Krzyżowa",
    shortDescription:
      "Delikatna terapia przywracająca równowagę układu nerwowego poprzez pracę z rytmem czaszkowo-krzyżowym.",
    fullDescription:
      "Metoda terapeutyczna stanowiąca rozwinięcie osteopatii. Terapia czaszkowo-krzyżowa jest nieinwazyjną pracą rozluźniającą struktury łącznotkankowe i znoszącą nieprawidłowe napięcia w mięśniach oraz narządach wewnętrznych. Terapeuta wpływa na układ czaszkowo-krzyżowy, w skład którego wchodzą m.in. kości czaszki, opony mózgu i rdzenia kręgowego oraz płyn mózgowo-rdzeniowy. \n \n Układ ten odpowiada za prawidłowy rozwój oraz funkcjonowanie ośrodkowego układu nerwowego, a tym samym wpływa na funkcje układu nerwowego, mięśniowego, powięziowego, kostnego, endokrynologicznego, pokarmowego, oddechowego i limfatycznego. Metoda jest bezinwazyjna i łagodna.",
    benefits: [
      "Głębokie odprężenie i relaks",
      "Redukcja stresu i napięcia",
      "Poprawa jakości snu",
      "Wzmocnienie układu odpornościowego",
    ],
    indications: [
      "Migreny i bóle głowy",
      "Problemy ortopedyczne, bóle kręgosłupa i pleców",
      "Bóle bez konkretnych przyczyn (tzw. dolegliwości psychosomatyczne)",
      "Zaburzenia snu",
      "Stres i napięcie emocjonalne",
      "Zaburzenia hormonalne",
      "Problemy z koncentracją",
      "Tiki, jąkanie się",
      "Zaburzenia trawienia",
    ],
    icon: "brain",
    images: [
      "/images/services/czaszkowa-1.jpg",
      "/images/services/czaszkowa-2.jpg",
    ],
    articles: [
      {
        title: "Sila plynaca z ciala - o terapii czaszkowo-krzyzowej",
        url: "https://www.niebieskalinia.pl/aktualnosci/artykuly-niebieskiej-linii/sila-plynaca-z-ciala-o-terapii-czaszkowokrzyzowej-41532024",
      },
    ],
  },
  {
    slug: "masaz-breussa",
    title: "Masaż kręgosłupa metodą Breussa",
    shortDescription:
      "Regenerujący masaż kręgosłupa z użyciem oleju z dziurawca, który nawilża i odżywia krążki międzykręgowe.",
    fullDescription:
      "Tradycyjnie masaż Breussa pomaga wyrównywać napięcia w obrębie tkanek przykręgosłupowych, co zmniejsza ucisk, a co za tym idzie, również uczucie bólu i dyskomfortu. Stosowany przede wszystkim przy wspomaganiu leczenia aparatu ruchowego i leczenia schorzeń kręgosłupa.\n \n  Największą zaletą jest usprawnienie procesu regeneracji krążków międzykręgowych, dzięki czemu jest pomocny w leczeniu przepukliny jądra miażdżystego (dyskopatii). Doskonale sprawdza się jako naturalna metoda relaksacji, wypoczynku i restytucji organizmu. Masaż metodą Breussa stanowi naturalne uzupełnienie leczenia farmakologicznego, kinezyterapii, fizykoterapii i masażu klasycznego.",
    benefits: [
      "Regeneracja krążków międzykręgowych",
      "Rozluźnienie mięśni przykręgosłupowych",
      "Poprawa elastyczności kręgosłupa",
      "Głęboki relaks i odprężenie",
      "Wspomaganie leczenia aparatu ruchu",
    ],
    indications: [
      "Zwyrodnienia kręgosłupa",
      "Przepukliny i wypukliny dyskowe",
      "Przewlekłe bóle pleców",
      "Napięcie mięśni przykręgosłupowych",
    ],
    icon: "spine",
    images: [
      "/images/gallery/massage-oil.jpg",
      "/images/gallery/back-massage.jpg",
      "/images/gallery/therapy-head.jpg",
    ],
  },
  {
    slug: "funkcjonalna-terapia-trzewi",
    title: "Funkcjonalna Terapia Trzewi",
    shortDescription:
      "Terapia narządów wewnętrznych poprawiająca ich funkcjonowanie i wpływająca na cały organizm.",
    fullDescription:
      "Funkcjonalna terapia trzewi jest stosowana zarówno w celach diagnostycznych jak i terapeutycznych. Korzyści płynące z masażu brzucha będą odczuwały osoby po operacjach (wycięcie wyrostka, pęcherzyka żółciowego), kobiety po cesarskim cięciu, osoby cierpiące na zgagę, refluks, wzdęcia, zaparcia, a także pacjenci z bólami odcinka lędźwiowego kręgosłupa jak również innych stawów obwodowych (bioder, kolan, a nawet barków).\n \n  Masaż jest w stanie rozluźnić powłoki brzuszne i wpłynąć korzystnie na pracę trzewi. Stosowany podczas choroby wspomaga proces powrotu do zdrowia.",
    benefits: [
      "Poprawa funkcji narządów wewnętrznych",
      "Lepsze trawienie i wchłanianie",
      "Redukcja wzdęć i dyskomfortu brzusznego",
      "Wsparcie dla układu odpornościowego",
      "Terapia jest bezbolesna dla pacjenta",
      "Osiągnięcie pozytywnych rezultatów już po pierwszym zabiegu",
    ],
    indications: [
      "Zaburzenia trawienia",
      "Refluks żołądkowy",
      "Zespół jelita drażliwego, zaparcia, kolki jelitowe, wzdęcia",
      "Przewlekłe bóle brzucha",
      "Problemy z oddychaniem",
      "Problemy z prostatą",
      "Nieprawidłowe napięcia na poziomie mięśni rąk i nóg",
      "Dysfunkcje stawów obwodowych kończyn górnych i dolnych oraz stawów kręgosłupa",
    ],
    icon: "heart-pulse",
    images: [
      "/images/services/trzewia-1.jpg",
      "/images/services/trzewia-2.jpg",
      "/images/services/trzewia-3.jpg",
    ],
  },
  {
    slug: "hirudoterapia",
    title: "Hirudoterapia medyczna",
    shortDescription:
      "Naturalna terapia z wykorzystaniem pijawek medycznych o szerokim działaniu leczniczym.",

    fullDescription:
      "To sprawdzona od tysięcy lat, skuteczna i naturalna metoda lecznicza wykorzystująca pijawki medyczne. Ślina pijawki zawiera ponad 547 przebadanych substancji biologicznie czynnych, które działają przeciwzakrzepowo, przeciwzapalnie i przeciwbólowo. Wspomaga krążenie, oczyszcza organizm i wspiera procesy regeneracyjne.",
    benefits: [
      "Poprawa mikrokrążenia",
      "Działanie przeciwzapalne i przeciwbólowe",
      "Oczyszczanie organizmu z toksyn",
      "Wspomaganie gojenia ran",
    ],
    indications: [
      "Zaburzenia układu nerwowego - neuropatie / nerwobóle / rwa barkowa / rwa kulszowa / zapalenie nerwów",
      "Choroby skóry - łuszczyca / trądzik / egzema / owrzodzenia / trudno gojące się rany / blizny",
      "Problemy Ginekologiczne - bolesne miesiączki / endometrioza / torbiele jajników / zaburzenia hormonalne",
      "Problemy urologiczne - przewlekłe zapalnie prostaty / nietrzymanie moczu",
      "Stany po urazach i operacjach - przyspieszenie regeneracji / redukcja blizn i zrostów",
    ],
    icon: "droplet",
    images: [
      "/images/services/hirudoterapia-1.jpg",
      "/images/services/hirudoterapia-2.jpg",
      "/images/services/hirudoterapia-3.jpg",
      "/images/services/hirudoterapia-4.jpg",
    ],
    articles: [
      {
        title: "Jak sie przygotowac do zabiegu hirudoterapii",
        url: "https://terapiapijawka.pl/dla-pacjentow/przygotowanie-do-zabiegu/",
      },
    ],
  },
  {
    slug: "banki-w-fizjoterapii",
    title: "Bańki w fizjoterapii",
    shortDescription:
      "Tradycyjna metoda terapeutyczna wykorzystująca podciśnienie do stymulacji tkanek.",
    fullDescription:
      "Jak wiadomo, bańki silnie pobudzają organizm do walki z infekcjami i mogą zapobiegać ich powstawaniu oraz namnażaniu wirusów. Poprzez podrażnienie receptorów skóry, mięśni i powięzi wpływają na rozszerzenie naczyń krwionośnych. Mają działanie przeciwbólowe, wspierają oczyszczanie tkanek, poprawiają ich odżywienie i natlenienie. \n \n Pobudzają przemianę materii, dzięki czemu organizm szybciej usuwa szkodliwe substancje będące przyczyną dolegliwości bólowych i stanów zapalnych. Bańki wpływają również na rozluźnienie mięśni, eliminują napięcia mięśniowe i skurcze. Przynoszą ulgę w przypadku bólu napiętych mięśni pleców, karku oraz szyi.",
    benefits: [
      "Poprawa krążenia krwi i limfy",
      "Rozluźnienie napiętych mięśni",
      "Redukcja bólu i stanów zapalnych",
      "Przyspieszenie regeneracji tkanek",
    ],
    indications: [
      "Napięcia mięśniowe",
      "Bóle pleców i karku",
      "Cellulitis",
      "Przeziębienia i infekcje górnych dróg oddechowych",
      "Zmęczenie i osłabienie",
    ],
    icon: "circle",
    images: [
      "/images/services/banki-1.jpg",
      "/images/services/banki-2.jpg",
    ],
  },
  {
    slug: "rozluznianie-miesniowo-powieziowe",
    title: "Rozluźnianie mięśniowo-powięziowe",
    shortDescription: "Technika manualna ukierunkowana na redukcję napięć.",
    fullDescription:
      "Dzięki rozluźnianiu mięśniowo-powięziowemu można zmniejszyć dolegliwości bólowe, przywrócić prawidłową przesuwalność struktur względem siebie, przywrócić balans i łatwość funkcjonowania tkanek, poprawić ruchomość odcinkową, zmniejszyć sztywność i uczucie napięcia mięśni oraz bóle głowy. \n \n To również świetne przygotowanie pacjenta z uszkodzeniami OUN do terapii m.in. Bobath czy Vojta. Techniki mięśniowo-powięziowe można również wykorzystać m.in. w takich problemach jak asymetrie ułożeniowe, kręcz, skolioza, problemy z napięciem mięśniowym czy szeroko pojęte wady postawy.",
    benefits: [
      "Redukcja napięć mięśniowo-powięziowych",
      "Zmniejszenie dolegliwości bólowych",
      "Poprawa ruchomości tkanek i stawów",
      "Zmniejszenie sztywności i uczucia napięcia",
      "Poprawa ogólnej funkcji układu ruchu",
    ],
    indications: [
      "Przewlekłe napięcia mięśniowe",
      "Bóle pleców i karku",
      "Ograniczenia ruchomości",
      "Bóle głowy pochodzenia napięciowego",
      "Wady postawy",
      "Asymetrie ułożeniowe",
    ],
    icon: "stretch",
    images: [
      "/images/services/rozluznianie-1.jpg",
      "/images/services/rozluznianie-2.jpg",
      "/images/services/rozluznianie-3.jpg",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

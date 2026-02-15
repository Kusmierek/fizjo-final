export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  indications: string[];
  icon: string;
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
  },
  {
    slug: "terapia-manualna",
    title: "Terapia manualna",
    shortDescription:
      "Zaawansowane techniki manualne przywracające prawidłową funkcję stawów i tkanek miękkich.",
    fullDescription:
      "w odróżnieniu od leczenia konwencjonalnego – to jedna z metod fizjoterapii i jednocześnie terapia holistyczna, której celem jest nie tylko doraźne złagodzenie dolegliwości, ale możliwie trwała poprawa stanu zdrowia pacjenta poprzez odblokowanie stawów lub fragmentów kręgosłupa i przywrócenie w miarę normalnej ruchomości w leczonych obszarach. Terapia manualna to naturalna i nieinwazyjna metoda leczenia i diagnostyki stosowana w odwracalnych dysfunkcjach elementów tworzących układ ruchu, takich jak mięśnie (masaż, stretching, punkty spustowe), stawy (mobilizacje i manipulacje stawów w celu przywrócenia prawidłowych warunków pracy stawu), więzadła, kręgosłup, powięź i nerwy (neuromobilizacje), oraz pracy na płynach (drenaż zastojów i obrzęków). Do diagnozowania i leczenia wykorzystywane są dłonie i dotyk oraz różne rodzaje ucisku.",
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
  },
  {
    slug: "terapia-czaszkowo-krzyzowa",
    title: "Terapia Czaszkowo-Krzyżowa",
    shortDescription:
      "Delikatna terapia przywracająca równowagę układu nerwowego poprzez pracę z rytmem czaszkowo-krzyżowym.",
    fullDescription:
      "Bazuje ona na rytmie czaszkowo-krzyżowym, czyli rytmie przepływu płynu mózgowo-rdzeniowego w układzie obejmującym opony mózgowo-rdzeniowe, kości czaszki, kości kręgosłupa i kość krzyżowa.\n \n Zaburzenia cyrkulacji tego płynu oraz ruchu kości czaszki i kości krzyżowej mogą towarzyszyć wielu różnym schorzeniom, a ich poprawa w wyniku działań terapeutycznych pozwala skutecznie walczyć z chorobą często jeszcze przed wystąpieniem objawów. \n \n Terapia czaszkowo-krzyżowa jest terapią mięśniowo-powięziową: powoduje rozluźnienie powięzi, znosząc nieprawidłowe napięcia w mięśniach i narządach wewnętrznych. Jest metodą bezinwazyjną, łagodną, polegającą na przykładaniu rąk w określonych miejscach, kontrolowaniu funkcji systemu czaszkowo-krzyżowego i stymulacji zaburzonych obszarów. \n \n Nacisk rąk terapeuty jest bardzo lekki, aby ingerencja w krążenie płynu mózgowo-rdzeniowego była jak najdelikatniejsza. Dzięki temu terapeuta może wpływać na poprawę funkcji i żywotności tej części ciała, która była wcześniej zaburzona.",
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
  },
  {
    slug: "funkcjonalna-terapia-trzewi",
    title: "Funkcjonalna Terapia Trzewi",
    shortDescription:
      "Terapia narządów wewnętrznych poprawiająca ich funkcjonowanie i wpływająca na cały organizm.",
    fullDescription:
      "FTT, bazująca na Starosłowiańskim Masażu Brzucha, jest metodą holistycznej terapii funkcjonalnych zaburzeń narządów układów: żołądkowo-jelitowego i moczowo-płciowego. \n \n Istotą Funkcjonalnej Terapii Trzewi (FTT) jest głęboko rozumiana profilaktyka narządów wewnętrznych jamy brzusznej. Poprzez odpowiednie rozluźnianie: \n • mięśni gładkich trzewi, \n • zwieraczy jamy brzusznej, \n • więzadeł, krezek i otrzewnej, \n • napięć pomiędzy narządami wewnętrznymi, a stawami obwodowymi i kręgosłupem, dochodzi do poprawy m. in. cyrkulacji płynów ustrojowych (krew i limfa) czy pracygruczołów wydzielania wewnętrznego takich jak: wątroba (żółć) i trzustka (soktrzustkowy). \n \n Wszystko to wpływa na jakość trawienia i wchłaniania w jelitach:cienkim i grubym. W wyniku terapii może dojść do poprawy pracy nerek, pęcherza oczowego oraz organów płciowych: macicy, jajników, gruczołu mlekowego i prostaty. \n FTT generuje pozytywny wpływ na komunikację nerwową pomiędzy tzw. „mózgiem trzewnym” (jelita), a centralnym układem nerwowym. „Masaż brzucha” stosowany jako forma głębokiej profilaktyki zdrowia, przyczynia się do odtruwaniaorganizmu i zapobiega powstawaniu wielu patologii w okolicy jamy brzusznej.Stosowany podczas choroby wspomaga proces powrotu do zdrowia.",
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
  },
  {
    slug: "hirudoterapia",
    title: "Hirudoterapia medyczna",
    shortDescription:
      "Naturalna terapia z wykorzystaniem pijawek medycznych o szerokim działaniu leczniczym.",
    fullDescription:
      "Hirudoterapia to sprawdzona od tysięcy lat metoda lecznicza wykorzystująca pijawki medyczne. Ślina pijawki zawiera ponad 100 substancji biologicznie czynnych, które działają przeciwzakrzepowo, przeciwzapalnie i przeciwbólowo. Wspomaga krążenie, oczyszcza organizm i wspiera procesy regeneracyjne.",
    benefits: [
      "Poprawa mikrokrążenia",
      "Działanie przeciwzapalne i przeciwbólowe",
      "Oczyszczanie organizmu z toksyn",
      "Wspomaganie gojenia ran",
    ],
    indications: [
      "Żylaki i niewydolność żylna",
      "Choroby stawów i reumatyczne",
      "Nadciśnienie tętnicze",
      "Migreny i bóle głowy",
      "Problemy skórne",
    ],
    icon: "droplet",
  },
  {
    slug: "banki-w-fizjoterapii",
    title: "Bańki w fizjoterapii",
    shortDescription:
      "Tradycyjna metoda terapeutyczna wykorzystująca podciśnienie do stymulacji tkanek.",
    fullDescription:
      "Leczenie za pomocą baniek, czyli inaczej terapia próżniowa to powszechnie znana od tysięcy lat naturalna metoda leczenia, pomocna w zwalczaniu wielu schorzeń wg medycyny starosłowiańskiej, arabskiej i chińskiej. Ostatnimi czasy, terapie bańkami (jak i same bańki) niesamowicie ewoluowały, dostarczając wiele nowych możliwości terapeutycznych w medycynie oraz sporcie. Bańki działają przeciwzapalnie, przeciwdziałają zrostom, usuwają zastoje i obrzmienia. \n\n W każdej technice stawiania baniek następuje bodziec próżniowy, ale nie znaczy to, że efekt terapeutyczny zawsze będzie ten sam. Niezmiernie ważne jest aby dostosować rodzaj baniek/techniki/miejsc na ciele do jednostki chorobowej, czy zamierzonego efektu terapeutycznego. \n\n Jak działają bańki? \n\n • W miejscach, w których stawiane są bańki powstaje przekrwienie, dochodzi do pęknięcia podskórnych naczyń krwionośnych, a w związku z tym wynaczynia się krew. Dzięki temu nasze ciało odbiera to działanie jako bodziec do wytworzenia dużej ilości nowych ciał odpornościowych. Taka reakcja jest nazywana w medycynie autohemoterapią lub autoszczepionką. Bańki silnie pobudzają organizm do walki z infekcjami i zapobiegają ich powstawaniu, a także namnażaniu wirusów. \n\n • Poprzez podrażnienie receptorów skóry mięśni i powięzi bańki wpływają na rozszerzenie naczyń krwionośnych. Ma to działanie przeciwbólowe, odkwasza, oczyszcza chore tkanki, dożywia je i natlenia. Pobudza się przemiana materii, więc organizm szybciej wydala szkodliwe substancje będące przyczyną dolegliwości bólowych i stanów zapalnych. \n\n • Bańki wpływają na rozluźnienie mięśni, eliminują napięcia mięśniowe i skurcze, stymulują gojenie i zmniejszają nadmierny nacisk na receptory czuciowe w tkankach miękkich. Przynoszą ulgę w przypadku bólu napiętych mięśni pleców, karku oraz szyi. \n\n • Działanie baniek jest wielokierunkowe, po chwili po postawieniu baniek, pacjent odczuwa stan relaksu, co pozwala znieść zwiększoną pobudliwość wegetatywnego układu nerwowego, dlatego też po zabiegu pacjent powinien odpocząć 10 min. \n\n • Po postawieniu baniek obserwuje się wzrost odporności na zakażenia. W większości przypadków proces zdrowienia ulega znaczącemu przyspieszeniu lub symptomy pacjenta zostają istotnie zmniejszone.",
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
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

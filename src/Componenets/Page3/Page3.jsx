import React from "react";
import bino from './icons/shahar.jpg'
import backgroundVideo from './icons/shahrisabz.mp4';

const Page3 = () => {
  return (
    <div className="container">
      <div className="box2">
        <h1 className="h2">My Region Of Shakhrisabz</h1>
        <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
        <article className="item">
          <article className="hover">
          <h4>Shakhrisabz</h4>
          <p>
            Shahrisabz — Oʻzbekiston Respublikasining Qashqadaryo viloyatidagi
            shahar. Shahrisabz tumani maʼmuriy markazi (1926-yildan).
            Kitob—Shahrisabz vohasida. Katta Oʻzbekiston trakti yoqasida
            joylashgan. Shahrisabz jan.dan Tanxozdaryo, shim.dan Oqsuv daryosi
            oqib oʻtadi. Urtacha bal. 658 m. Aholisi 174,8 ming kishi . Sh.
            Oʻzbekistondagi qadimiy shaharlardan biri. Arxeologik maʼlumotlarga
            koʻra, shaharga mil. av. 1 ming yillikning oʻrtalarida asos
            solingan.Shahrisabz mil. boshlarida va ilk oʻrta asrlarda turli
            nomlar bilan atalgan (qarang Kesh). 13-asrdan Shahrisabz nomi ham
            urf boʻlgan.
          </p>
          </article>
          <article className="hover">
          <h4>Ilk eslatilishi</h4>
          <p>
            Baʼzi maʼlumotlarga koʻra, shahar miloddan avvalgi 8 asrda tashkil
            etilgan. Shahar qadimgi davrlarda Kesh deb nomlangan.[2] 1351-yilda
            zarb etilgan kumush tangalarda „Shahrisabz“ nomi uchraydi.
            Sharafuddin Ali Yazdiy (15-asr) shahar toʻgʻrisida: „Shahrisabz, uni
            turkiylar Kesh deb ataydilar“ deb yozgan.Shahrisabz yaqinidagi Xoja
            Ilgor qishlogʻi (hozirgi Yakkabogʻ tumani hududi)da Sohibqiron Amir
            Temur tavallud topgan.Shahrisabz oʻsha davrda „Qubbatul ilm val
            adab“ nomi bilan yuritilgan. Xusrav Dehlaviy, Bedil, Mirzo Gʻolib
            kabi allomalarning otabobolari shahrida tugʻilgan
          </p>
          </article>
          <article className="hover">
          <h4>Amir Temur davrida</h4>
          <p>
            Amir Temur va Temuriylar davrida Shahrisabz ulkan saltanatning yirik
            shahriga, barlos beklarinint yozgi qarorgohiga aylantirilgan.
            Oqsaroy va Dorussaodat majmuasi qurilgan. Shahar atrofi qalʼa devori
            bilanoʻrabolingan. Ispaniya elchisi Klavixo oʻz qundaligida shahrida
            koʻplab mahobatli binolar va masjidlar borligini va
            qurilayotganligini taʼkidlaydi. Keyinroq ham koʻplab meʼmoriy
            obidalar (Dor uttilovat majmuasi, Koʻk gumbaz masjidi va boshqalar)
            qurildi. Hofizi Abru shaharda koʻhna devor (bandi qadim)
            boʻlganligi, biroq u 15-asr boshlarida buzilib ketganligini ham
            yozadi. Oʻsha paytda Shahrisabz shahrining 4 darvozasi: Ark (shim.),
            Kunchiqar (sharqiy), Kushxona (gʻarbiy), Termiz (jan.) darvozalari
            boʻlgan
          </p>
          </article>
          <article className="hover">
          <h4>Yangi davrdagi tarixi</h4>
          <p>
             1870-yil avgustda Turkiston gubernatori K.P. Kaufmannit
            buyrugʻi bilan general Abramov qoʻmondonligidagi maxsus qoʻshin Sh.
            va Kitobni bosib olgan. Biroq rus qoʻshini qoʻmondonligi Sh. va
            Kitobni Buxoro amiri tayinlagan beklarga topshirib, Samarqandga
            qaytishgan. Sh. 1920-yilgacha Buxoro xonligi tarkibida boʻlgan. SH.
            aholisining asosiy qismi savdosotiq va hunarmandchilik bilan
            shugʻullangan. 18— 19-asrlarda shahrida 6 darvoza, 7 karvonsaroy va
            6 ta madrasa, bir nechta bozor, shahar tashqarisida Namozgoh masjidi
            bor edi
          </p>
          </article>
        </article>
     
      </div>
    </div>
  );
};

export default Page3;

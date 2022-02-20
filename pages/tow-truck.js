import React from 'react';
import Image from 'next/image';
import { Navbar, Footer, Info } from '../components';
import global from '../styles/services.module.scss';
import styles from '../styles/tow-truck.module.scss';

export default function TowTruck() {
    return (
        <div className={global.container}>
            <Navbar />

            <div className={global.content}>
                <Info title='EVAKUATORS'>
                    <section className={styles.container}>
                        <div className={styles.col}>
                            <div className={styles.row}>
                                {/* <div className={styles.image_wrapper}>
                                    <Image src='/img/tow-truck.jpg' alt='ARTauto evakuators' width={16} height={8} layout="responsive" priority />
                                </div> */}
                                <h3 className={styles.title}>EVAKUĀCIJAS VEICAM</h3>
                                <p>JIK autoevakuators nogādās tavu transportlīdzekli uz jebkuru tevis izvēlētu vietu, jebkurā diennakts laikā un jebkuros laikapstākļos. JIK autoevakuatora komanda parūpēsies par tavu transportlīdzekli, palīdzēs tam izkļūt no grāvja, transportēs to pēc ceļu satiksmes negadījuma vai palīdzēs negaidītā situācijā. Palīdzēsim profesionāli, ātri un kvalitatīvi.</p>
                            </div>
                            <div className={styles.row}>
                                <h3 className={styles.title}>CENAS</h3>
                                <p>Auto evakuācijas pakalpojumi visbiežāk tiek izmantoti tieši ārkārtas situācijas. Tādās reizēs cilvēka prāts nedomā par summu, ko samaksās autoevakuatora kompānijai, bet gan par to, kā rīkoties, cik ilgi būs jāgaida autoevakuatora ierašanās un vai mašīnai viss būs kārtībā? Diemžēl, reizēm gadās izmantot tādu firmu pakalpojumus, kas patiesībā nemaz nav oficiāli reģistrētas, kā rezultātā beigās paliec tukšām kabatām.</p>
                                <p>Sadarbībā ar “JIK Autoevakuators” esam sagatavojuši iespējamās situācijas, kad var nākties maksāt vairāk par autoevakuatora pakalpojumiem. Jānis Garoza, kas ir “JIK Autoevakuators” īpašnieks stāsta, ka lielākoties summa Rīgas teritorijā ir noteikta. “Katrai firmai ir noteikta sava minimālā summa, kas parasti tiek piemērota, ja uz izsaukumu jādodas Rīgas, Rīgas rajona robežās. Šo summu parasti nosauc pa tālruni, pirms evakuators ir izbraucis uz izsaukuma mērķi, lai klients zinātu ar ko rēķināties. Bēdīgi, bet pat mūsdienās ir cilvēki, kas liek sludinājumus tādos portālos kā ss.com, un uzdodas par autoevakuācijas pakalpojumu sniedzējiem, lai gan oficiāli viņi to nedrīkstētu darīt. Ja privātpersona uzraujas uz tādu, tad summa bieži būs augstāka nekā pa tālruni nosauktā. Tas, lūk, ir gadījums, kad būs jāpārmaksā bez iemesla.”</p>
                                <p>Pakalpojuma summā parasti iekļauta cena par vinjeti (dokumentu, kas ļauj pārvietoties braucamrīkam, kas ir +/- 3 tonnu smags, pa Latvijas maksas ceļiem), apkalpošanu (tai skaitā klientu serviss, tīrs salons, pieklājīgi darbinieki), autoevakuatora piegādi, mašīnas uzcelšanu, aizvešanu.</p>
                            </div>
                        </div>
                    </section>
                </Info>
            </div>

            <Footer />
        </div>
    );
}

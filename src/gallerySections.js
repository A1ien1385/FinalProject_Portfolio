import { useState } from "react";
import "./scss/main.scss";
import { Rate } from "./rate";
import { Cube } from "./cube";

export function GallerySections(props) {
// const [isActive, setActive] = useState(false);   

// const toggleClass = () =>
// {
//    setActive(!isActive);
// };
// <section style={{backgroundImage: "url('https://drive.google.com/uc?id=1aeGaTZoetIyARLay9b46o4NrtiWivVrA')"}} onClick={toggleClass} className={isActive ? 'activeArt' : null}></section>

    return (
          <>
          <h1 id="digital_art" className="art_sections_title">Grafika cyfrowa</h1>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=1aeGaTZoetIyARLay9b46o4NrtiWivVrA')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=1HPbnykwyZTALqPvS7AScva3eTwTMqwCV')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=13HdAe5S6CaJvwq7Zlntqqf6X12997oCm')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=1k7ZnzwBkz_5CRdQh0ctbol6QnAPlr0UP')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=1PJTxLPcSy0ACj6jACLnuQs2m0iBsWC8j')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=11wQvHCo9kzApPPnIBu9sGSwf2W4Tgux4')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=1mPpYcM1Wxp4BLodZWxJR_KuZKjYetgY1')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=1Zx4V2_XZTlVUPqwP21DvoOaCd-lNx8Zy')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=15B4v9lY9IUe07tE-zyWmNTjKLbpve0sF')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=1oOV5b6gVcDRZoKYPPgdT4_LLYL-ASE6O')"}}></section>
          <h1 id="graphic_design" className="art_sections_title">Projektowanie graficzne</h1>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=13quCBsYHWqS5fpsSHgGyYp2GcSiNfOpQ')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=1kmVxgFLqQryY_-61Z-WVEzuRkm7NPb7h')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=1C9H-K32orXnfqUaUfYKZZSF2-RDg7ejd')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=1QvcDw1fCCnuVrgaXfv43Xy5Jxo8IuLJI')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=1tHUtYvJDKYm_1IPJ2cFQkxuXA3LFupRQ')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=1kAiyMiojanUliYsv2gaJvbldZivxrMq2')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=1hI15gYQYRRD47Tx_sQoqxFHVrJa1-OGA')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=1sEf7vSRJQeOIlzqWFtAvteU7P-rL-oLK')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=1ugbIjmD9vhG7eB4q23P0Wd1NfBfTEf9g')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=1LpK8TkDolEap7DdXx6tf2gCBWPzIWpNj')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=1yhGAMqIw7CoEqBLIgJFjvGSkuo96PFAg')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=1X766wTDP5fmHDktUVxsAAWmay-BjW8ab')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=1quC1lmaXVZo8v7L3XZhmUHvlZz3XRbiE')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=17UqBTQ40WCKqzKqz-ogKokDKcD4I2CI1')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=1LCrAxaZThUyk71CTnquda3O8Bt_2Re2E')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=1JT90zSkDAtjZpJDG15XtShLLovmZslyD')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=1GzhC-oUa5sYY5R4ED7M3oaYK4ZcfePcd')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=10lDGVMBJedxKSqpLCdSDf8asf0zvD3fQ')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=1P-jNTO9Nhhqyn9syX4cmsTt-F0utS2fT')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=1TVZGak0Yf-tqfL3auPf-V4FD8iFO7LP7')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=1iz4k2M7UMFlQOYvEyw-mYvQMwruGDNBO')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=17RyLzkI0lSq89r550qJOt674-Tu4zKcD')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=1H3ho8ZGFDL39R0s24Z9POXx9kFJfS2qu')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=1rO-Sw7MOQSaasEqm9yLVvQTqDrZMtuwY')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=1wz75KqTFHsj7JCOadnJv7XJqXlMZi8hJ')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=1azaDzKHlTKk4Wox8lqSvd5EBP8CPIHJi')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=1VomAV_DrtFVkieacpY_MUskTxXug-TQM')"}}></section>
          <h1 id="illustration" className="art_sections_title">Ilustracje</h1>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=1iiX-nfsIqC6TPNaGMk6Pa1f5T2IMCP7S')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=16Ce-OwrI0HjJwBVaHDyPzYYm2xEEyM2q')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=14NrFE1DNZqIOKOgEK_D4E-DtFBWM7_fA')"}}></section>
          <h1 id="graphic3D" className="art_sections_title">Grafika 3D</h1>
          <Cube/>
          <h1 id="graphic3D" className="art_sections_title">Animacja Cube stworzona w SASS</h1>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=1ZoX6GwwlW96ai9BJ8x4uaw18zEF6UJAy')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=1OieIg4o50jHkODkpkqacfPkghgQ3rlLM')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=1RoWJpXxWdOIhnqT-VJl3mt7-R1qoiGa-')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=1fybQJyrw7QWXvtOxAWSV6tQCm7Lo9mzh')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=1LDSkg9HXjAzBwxSfkRPwTEjtCURWIzAG')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=1pMjywnZ8IxxNBsBcZ5m8MQNSTVFat4xp')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=1xbN9jnS8lgV6EzjUJxfk9FgyNyMLfiD0')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=1jobL4J3Gxv2aWiAQMmDB7xrCvrLSTZ3N')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=1-tLTL4fjYxKUfKXuggcc6cVIDcnhDliT')"}}></section>
          <h1 id="drawings" className="art_sections_title">Rysunki i szkice</h1>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=130caqJBabUDJyutYa8ipdfnIDauP8fvt')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=1JQ23uigrGJKNCuQm6BPqSJWXL_Rb8TO_')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=1f-5yKkNzk6skoLTLwzvDtSwtpkRLw3zp')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=1JvITCuKzTMroLGgQ0j65VxblRsvXijER')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=13UWNFVv1rHEwSr8ahWgHy9p3oa6kRL1D')"}}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=1pj5or0DPQRno5aLk2Zsp3kYy5fXLPqFc')"}}></section>
         </>
      );
   }

   export default GallerySections;
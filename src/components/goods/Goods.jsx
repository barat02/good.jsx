import React from 'react';
import hydro from '../assets/hydro.png'
import ordin from '../assets/ordin.png'
import wet from '../assets/wet.png'
import nia from '../assets/nia.png'
import refine from '../assets/refine.png'
import babr from '../assets/babr.png'
import ceur from '../assets/ceur.png'
import oca from '../assets/oca.png'
import cler from '../assets/cler.png'
import toner from '../assets/toner.png'
import bioderm from '../assets/bioderm.png'
import atoderm from '../assets/atoderm.png'
import lotio from '../assets/lotion.png'
import sensh from '../assets/sensh.png'
import pigmento from '../assets/pigmento.png'
import deter from '../assets/deter.png'
import borat from '../assets/borat.png'
import oils from '../assets/oils.png'


function Goods(props) {
    return (
        
        <div>
           
           <div>
           <header className='goods_header'><h1 className='goods_p'>Каталог</h1></header>
           </div>

           <div className='first_line'>

            <div className='first_good'>

                <img  src={hydro} alt=""  width={262}  /> 
                <li c>15 660c</li>
                <li>Дуэт Hydro Cellular</li>
                <li><button className='good_buton'>оформить заказ</button></li>

            </div>

            <div className='second_good'>
            <img src={ordin} alt="" />
            <li c>1300с</li>
                <li>Очищающее средство <br /> с глюкозидом</li>
                <li><button className='good_buton'>оформить заказ</button></li>


            </div>

            <div className='third_good'>
                <img src={wet} alt="" />
                <li>1100с</li>
                <li>Крем Natural Moiusturizing <br /> Factors-PhytoCeramides</li>
                <li><button className='good_buton'>оформить заказ</button></li>
            </div>




           </div>

           <div className='second_line'>
            <div className='fourth_good'>
            <img src={nia} alt="" width={261} />
            <li>1300c</li>
            <li>1% Ниацинамид 10% + <br /> Цинк 1%</li>
            <li><button className='good_buton'>оформить заказ</button></li>
            </div>

            <div className='fifth_good'>
                <img src={refine} alt="" />
                <li>7000c</li>
                <li>Тоник с AHA и BHA <br /> кислотами REFINE <br /> CELLULAR в travel <br /> формате 30мл.</li>
                <li><button className='good_buton'>оформить заказ</button></li>
            </div>

            <div className='sixth_good'>
                <img src={babr} alt="" />
                <li>8080c</li>
                <li>Набор для век День & <br /> Ночь Lifting Cellular</li>
                <li><button className='good_buton'>оформить заказ</button></li>
            </div>


           </div>

           <div className='third_line'>
            <div className='seventh_good'>
                <img src={ceur} alt="" width={276} />
                <li>1015c</li>
                <li>Энзимная пудра <br />
Dr Ceuracle Pro Balance <br /> Morning Enzyme Wash</li>
                <li><button className='good_buton'>оформить заказ</button></li>
            </div>

            <div className='eighth_good'>
                <img src={oca} alt="" width={261} />
                <li>2246c</li>
                <li>Солнцезащитный крем с <br /> центолой SPF 50+ PA++++ <br /> Dr. Ceuracle</li>
                <li><button className='good_buton'>оформить заказ</button></li>
            </div>


            <div className='nineth_good'>
                <img src={cler} alt="" />
                <li>2100с</li>
                <li>Солнцезащитный <br /> осветляющий крем с <br /> пробиотиками Dr. <br /> Ceuracle, 50мл</li>
                <li><button className='good_buton'>оформить заказ</button></li>
            </div>

           </div>


           <div className='fourth_line'>
             
             <div className='tenth_good'>
                <img src={toner} alt="" />
                <li>2800с</li>
                <li>Себорегулирующий <br /> тонер для лица “5-альфа <br /> контроль”</li>
                <li><button className='good_buton'>оформить заказ</button></li>
             </div>

             <div className='eleventh_good'>
                <img src={bioderm} alt="" width={280} />
                <li>2300с</li>
                <li>Bioderma Atoderm <br /> Бальзам Интенсив, 500 мл</li>
                <li><button className='good_buton'>оформить заказ</button></li>
             </div>


             <div className='twelvth_good'>
                <img src={atoderm} alt="" />
                <li>3540с</li>
                <li>Себорегулирующий крем <br /> «5-альфа контроль»</li>
                <li><button className='good_buton'>оформить заказ</button></li>

             </div>

           </div>


           <div className='fifth_line'>
            <div className='thr_good'>
                <img src={sensh} alt="" width={260} />
                <li>1680с</li>
                <li>Bioderma Sensibio H2O <br /> Мицеллярная вода, 500 мл</li>
                <li><button className='good_buton'>оформить заказ</button></li>


            </div>

<div className='frt_good'>

    <img src={lotio} alt="" width={260} />
    <li>2200с</li>
    <li>Sébium Лосьон</li>
    <li><button className='good_buton'>оформить заказ</button></li>





</div>
        <div className='fif_good'>
            <img src={pigmento} alt="" />
            <li>3300с</li>
            <li> Pigmentbio Осветляющая <br /> сыворотка С-Concentrate </li>
            <li><button className='good_buton'>оформить заказ</button></li>

        </div>


           </div>

           <div className='sixth_line'>
            <div className='six_good'>
                <img src={deter} alt="" />
                <li>2600с</li>
                <li>Кератиновая увлажняющая <br /> маска для волос KT LD <br /> REHYDRATING MASK, 200 мл</li>
                <li><button className='good_buton'>оформить заказ</button></li>
            </div>

            <div className='svn_good'>
            <img src={oils} alt="" />
                <li>2870с</li>
                <li>Кератиновое масло для <br /> волос KT LD THE OIL, 50 мл</li>
                <li><button className='good_buton'>оформить заказ</button></li>

            </div>  

            <div className='eigh_good'>
              <img src={borat} alt="" />
                
                <li>1800c</li>
                <li>Кератиновая сыворотка <br /> для волос KT LD KERATIN <br /> SERUM, 125 мл </li>
                <li><button className='good_buton'>оформить заказ</button></li>
            </div>
           </div>

         
       

        </div>
    );
}

export default Goods;
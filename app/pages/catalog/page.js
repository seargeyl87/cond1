"use client";

import { useState } from "react";
import styles from "../../style/Catalog.module.css";
import CatalogItem from "../../components/CatalogItem";
import CatalogFilter from "../../components/CatalogFilter";
import gree_pular from "../../img/gree_pular.jpeg";
import gree_bora from "../../img/gree_bora.jpeg";
import gree_pular_on_off from "../../img/gree_pular_on_off.jpeg";
import panasonic_pz from "../../img/panasonic_pz.jpg";
import electrolux_evolution from "../../img/Electrolux_evolution.jpg";
import electrolux_eacs from "../../img/electrolux_eacs.jpg";
import lg_evo_max from "../../img/lg_evo_max.jpeg";
import energolux_geneva from "../../img/energolux_geneva_3.jpeg";
import daikin_sensira from "../../img/daikin_sensira.png";
import mitsubishi_heavy_srk_zs_wt from "../../img/mitsubishi_heavy_srk_zs_wt.jpg";
import mitsubishi_heavy_srk25zspr from "../../img/mitsubishi_heavy_srk25zspr.jpg"

function Catalog() {
  const [catalogList, setCatalogList] = useState([
    {
      name: "Кондиционер Gree Pular Inverter R32 Есо GWH09AGAXA-K6DNA4C",
      price: 1906,
      src: gree_pular.src,
      area: 25,
      powerCold: 2.65,
      powerHeat: 2.85,
      manufacturer: "gree",
      type: "настенный",
      invertor: "да",
    },

    {
      name: "Кондиционер Gree Pular Inverter R32 Есо GWH12AGBXB-K6DNA4C",
      price: 2200,
      src: gree_pular.src,
      area: 35,
      powerCold: 3.5,
      powerHeat: 3.5,
      manufacturer: "gree",
      type: "настенный",
      invertor: "да",
    },

    {
      name: "Кондиционер Gree Pular Inverter R32 Есо GWH18AGD-K6DNA4D",
      price: 3300,
      src: gree_pular.src,
      area: 35,
      powerCold: 4.6,
      powerHeat: 5.2,
      manufacturer: "gree",
      type: "настенный",
      invertor: "да",
    },

    {
      name: "Кондиционер Gree Pular Inverter R32 Есо GWH24AGDXE-K6DNA4C",
      price: 4603,
      src: gree_pular.src,
      area: 60,
      powerCold: 6.16,
      powerHeat: 6.2,
      manufacturer: "gree",
      type: "настенный",
      invertor: "да",
    },

    {
      name: "Кондиционер Gree Bora R32 Inverter 2022 GWH07AAAXA-K6DNA2C",
      price: 1770,
      src: gree_bora.src,
      area: 20,
      powerCold: 2.35,
      powerHeat: 2.5,
      manufacturer: "gree",
      type: "настенный",
      invertor: "да",
    },

    {
      name: "Кондиционер Gree Bora R32 Inverter 2022 GWH09AAAXA-K6DNA2C",
      price: 1850,
      src: gree_bora.src,
      area: 25,
      powerCold: 2.65,
      powerHeat: 2.85,
      manufacturer: "gree",
      type: "настенный",
      invertor: "да",
    },

    {
      name: "Кондиционер Gree Bora R32 Inverter 2022 GWH12AABXB-K6DNA2C",
      price: 2000,
      src: gree_bora.src,
      area: 35,
      powerCold: 3.5,
      powerHeat: 3.5,
      manufacturer: "gree",
      type: "настенный",
      invertor: "да",
    },

    {
      name: "Кондиционер Gree Bora R32 Inverter 2022 GWH18AAD-K6DNA2E",
      price: 3328,
      src: gree_bora.src,
      area: 45,
      powerCold: 4.6,
      powerHeat: 5.2,
      manufacturer: "gree",
      type: "настенный",
      invertor: "да",
    },

    {
      name: "Кондиционер Gree Bora R32 Inverter 2022 GWH24AADXE-K6DNA2A",
      price: 4416,
      src: gree_bora.src,
      area: 60,
      powerCold: 6.16,
      powerHeat: 6.2,
      manufacturer: "gree",
      type: "настенный",
      invertor: "да",
    },

    {
      name: "Кондиционер Gree Pular R410 on/off 2023 GWH07AGAXA-K3NNA1A",
      price: 1270,
      src: gree_pular_on_off.src,
      area: 20,
      powerCold: 2.25,
      powerHeat: 2.3,
      manufacturer: "gree",
      type: "настенный",
      invertor: "нет",
    },

    {
      name: "Кондиционер Gree Pular R410 on/off 2023 GWH09AGAXA-K3NNA1A",
      price: 1325,
      src: gree_pular_on_off.src,
      area: 25,
      powerCold: 2.55,
      powerHeat: 2.65,
      manufacturer: "gree",
      type: "настенный",
      invertor: "нет",
    },
    {
      name: "Кондиционер Gree Pular R410 on/off 2023 GWH12AGBXB-K3NNA1B",
      price: 1850,
      src: gree_pular_on_off.src,
      area: 30,
      powerCold: 3.25,
      powerHeat: 3.4,
      manufacturer: "gree",
      type: "настенный",
      invertor: "нет",
    },

    {
      name: "Кондиционер Gree Pular R410 on/off 2023 GWH18AGCXD-K3NNA1B",
      price: 2982,
      src: gree_pular_on_off.src,
      area: 45,
      powerCold: 4.8,
      powerHeat: 5.16,
      manufacturer: "gree",
      type: "настенный",
      invertor: "нет",
    },

    {
      name: "Кондиционер Gree Pular R410 on/off 2023 GWH24AGDXE-K3NNA1B",
      price: 4096,
      src: gree_pular_on_off.src,
      area: 60,
      powerCold: 6.16,
      powerHeat: 6.7,
      manufacturer: "gree",
      type: "настенный",
      invertor: "нет",
    },

    {
      name: "Кондиционер Gree Bora R410 on/off 2023 GWH07AAAXA-K3NNA2A",
      price: 1152,
      src: gree_bora.src,
      area: 20,
      powerCold: 2.25,
      powerHeat: 2.3,
      manufacturer: "gree",
      type: "настенный",
      invertor: "да",
    },

    {
      name: "Кондиционер Gree Bora R410 on/off 2023 GWH09AAAXA-K3NNA2A",
      price: 1360,
      src: gree_bora.src,
      area: 25,
      powerCold: 2.55,
      powerHeat: 2.65,
      manufacturer: "gree",
      type: "настенный",
      invertor: "да",
    },

    {
      name: "Кондиционер Gree Bora R410 on/off 2023 GWH12AABXB-K3NNA2B",
      price: 1863,
      src: gree_bora.src,
      area: 30,
      powerCold: 3.25,
      powerHeat: 3.4,
      manufacturer: "gree",
      type: "настенный",
      invertor: "да",
    },

    {
      name: "Кондиционер Gree Bora R410 on/off 2023 GWH18AACXD-K3NNA2B",
      price: 3162,
      src: gree_bora.src,
      area: 50,
      powerCold: 4.8,
      powerHeat: 5.16,
      manufacturer: "gree",
      type: "настенный",
      invertor: "да",
    },

    {
      name: "Кондиционер Gree Bora R410 on/off 2023 GWH24AADXE-K3NNA2A",
      price: 3945,
      src: gree_bora.src,
      area: 60,
      powerCold: 6.16,
      powerHeat: 6.7,
      manufacturer: "gree",
      type: "настенный",
      invertor: "да",
    },

    {
      name: "Кондиционер Gree Bora R410 on/off 2023 GWH24AADXE-K3NNA2A",
      price: 3945,
      src: gree_bora.src,
      area: 60,
      powerCold: 6.16,
      powerHeat: 6.7,
      manufacturer: "gree",
      type: "настенный",
      invertor: "да",
    },

    {
      name: "Кондиционер Panasonic PZ CS/CU-PZ25WKD",
      price: 3600,
      src: panasonic_pz.src,
      area: 25,
      powerCold: 2.5,
      powerHeat: 3.15,
      manufacturer: "panasonic",
      type: "настенный",
      invertor: "да",
    },
    {
      name: "Кондиционер Panasonic PZ CS/CU-PZ35WKD",
      price: 3800,
      src: panasonic_pz.src,
      area: 35,
      powerCold: 3.4,
      powerHeat: 3.84,
      manufacturer: "panasonic",
      type: "настенный",
      invertor: "да",
    },

    {
      name: "Кондиционер Panasonic PZ CS/CU-PZ50WKD",
      price: 5300,
      src: panasonic_pz.src,
      area: 50,
      powerCold: 5,
      powerHeat: 5.4,
      manufacturer: "panasonic",
      type: "настенный",
      invertor: "да",
    },

    {
      name: "Кондиционер Electrolux Evolution Super DC Inverter EACS/I-11HEV/N3",
      price: 2300,
      src: electrolux_evolution.src,
      area: 25,
      powerCold: 2.83,
      powerHeat: 4.32,
      manufacturer: "electrolux",
      type: "настенный",
      invertor: "да",
    },

    {
      name: "Кондиционер Electrolux Evolution Super DC Inverter EACS/I-14HEV/N3",
      price: 2500,
      src: electrolux_evolution.src,
      area: 35,
      powerCold: 3.58,
      powerHeat: 5.2,
      manufacturer: "electrolux",
      type: "настенный",
      invertor: "да",
    },

    {
      name: "Кондиционер Electrolux EACS/I-07HP/N3",
      price: 1980,
      src: electrolux_eacs.src,
      area: 20,
      powerCold: 2.2,
      powerHeat: 2.3,
      manufacturer: "electrolux",
      type: "настенный",
      invertor: "да",
    },

    {
      name: "Кондиционер Electrolux EACS/I-09HP/N3",
      price: 2114,
      src: electrolux_eacs.src,
      area: 25,
      powerCold: 2.49,
      powerHeat: 2.8,
      manufacturer: "electrolux",
      type: "настенный",
      invertor: "да",
    },

    {
      name: "Кондиционер Electrolux EACS/I-12HP/N3",
      price: 2200,
      src: electrolux_eacs.src,
      area: 35,
      powerCold: 3.37,
      powerHeat: 3.52,
      manufacturer: "electrolux",
      type: "настенный",
      invertor: "да",
    },

    {
      name: "Кондиционер Electrolux EACS/I-18HP/N3",
      price: 3634,
      src: electrolux_eacs.src,
      area: 50,
      powerCold: 5.13,
      powerHeat: 5.28,
      manufacturer: "electrolux",
      type: "настенный",
      invertor: "да",
    },
    {
      name: "Кондиционер Electrolux EACS/I-24HP/N3",
      price: 4640,
      src: electrolux_eacs.src,
      area: 60,
      powerCold: 7.03,
      powerHeat: 7.24,
      manufacturer: "electrolux",
      type: "настенный",
      invertor: "да",
    },

    {
      name: "Кондиционер LG Evo Max DC07RH",
      price: 3067,
      src: lg_evo_max.src,
      area: 20,
      powerCold: 2.14,
      powerHeat: 2.6,
      manufacturer: "lg",
      type: "настенный",
      invertor: "да",
    },

    {
      name: "Кондиционер LG Evo Max DC09RH",
      price: 3181,
      src: lg_evo_max.src,
      area: 25,
      powerCold: 2.5,
      powerHeat: 3.2,
      manufacturer: "lg",
      type: "настенный",
      invertor: "да",
    },

    {
      name: "Кондиционер LG Evo Max DC12RH",
      price: 3517,
      src: lg_evo_max.src,
      area: 35,
      powerCold: 3.5,
      powerHeat: 4,
      manufacturer: "lg",
      type: "настенный",
      invertor: "да",
    },
    {
      name: "Кондиционер LG Evo Max DC18RH",
      price: 4667,
      src: lg_evo_max.src,
      area: 50,
      powerCold: 5,
      powerHeat: 5.8,
      manufacturer: "lg",
      type: "настенный",
      invertor: "да",
    },
    {
      name: "Кондиционер LG Evo Max DC24RH",
      price: 5597,
      src: lg_evo_max.src,
      area: 70,
      powerCold: 6.6,
      powerHeat: 7.5,
      manufacturer: "lg",
      type: "настенный",
      invertor: "да",
    },

    {
      name: "Кондиционер Energolux Geneva 3 SAS07G3-AI/SAU07G3-AI",
      price: 1595,
      src: energolux_geneva.src,
      area: 20,
      powerCold: 2.2,
      powerHeat: 2.3,
      manufacturer: "energolux",
      type: "настенный",
      invertor: "да",
    },

    {
      name: "Кондиционер Energolux Geneva 3 SAS09G3-AI/SAU09G3-AI",
      price: 1630,
      src: energolux_geneva.src,
      area: 25,
      powerCold: 2.7,
      powerHeat: 2.8,
      manufacturer: "energolux",
      type: "настенный",
      invertor: "да",
    },

    {
      name: "Кондиционер Energolux Geneva 3 SAS12G3-AI/SAU12G3-AI",
      price: 1873,
      src: energolux_geneva.src,
      area: 35,
      powerCold: 3.3,
      powerHeat: 3.5,
      manufacturer: "energolux",
      type: "настенный",
      invertor: "да",
    },

    {
      name: "Кондиционер Energolux Geneva 3 SAS18G3-AI/SAU18G3-AI",
      price: 2883,
      src: energolux_geneva.src,
      area: 50,
      powerCold: 5,
      powerHeat: 5.1,
      manufacturer: "energolux",
      type: "настенный",
      invertor: "да",
    },

    {
      name: "Кондиционер Energolux Geneva 3 SAS24G3-AI/SAU24G3-AI",
      price: 3680,
      src: energolux_geneva.src,
      area: 70,
      powerCold: 6.7,
      powerHeat: 6.8,
      manufacturer: "energolux",
      type: "настенный",
      invertor: "да",
    },

    {
      name: "Кондиционер Daikin Sensira FTXF20D/RXF20D",
      price: 4260,
      src: daikin_sensira.src,
      area: 20,
      powerCold: 2,
      powerHeat: 2.4,
      manufacturer: "daikin",
      type: "настенный",
      invertor: "да",
    },

    {
      name: "Кондиционер Daikin Sensira FTXF25D/RXF25D",
      price: 4380,
      src: daikin_sensira.src,
      area: 25,
      powerCold: 2.5,
      powerHeat: 2.8,
      manufacturer: "daikin",
      type: "настенный",
      invertor: "да",
    },

    {
      name: "Кондиционер Daikin Sensira FTXF35D/RXF35D",
      price: 4760,
      src: daikin_sensira.src,
      area: 30,
      powerCold: 3.3,
      powerHeat: 3.5,
      manufacturer: "daikin",
      type: "настенный",
      invertor: "да",
    },

    {
      name: "Кондиционер Daikin Sensira FTXF42D/RXF42D",
      price: 6500,
      src: daikin_sensira.src,
      area: 40,
      powerCold: 4.2,
      powerHeat: 4.6,
      manufacturer: "daikin",
      type: "настенный",
      invertor: "да",
    },

    {
      name: "Кондиционер Daikin Sensira FTXF50D/RXF50D",
      price: 8240,
      src: daikin_sensira.src,
      area: 50,
      powerCold: 5,
      powerHeat: 6,
      manufacturer: "daikin",
      type: "настенный",
      invertor: "да",
    },

    {
      name: "Кондиционер Daikin Sensira FTXF60D/RXF60D",
      price: 9700,
      src: daikin_sensira.src,
      area: 60,
      powerCold: 6,
      powerHeat: 6.4,
      manufacturer: "daikin",
      type: "настенный",
      invertor: "да",
    },

    {
      name: "Кондиционер Daikin Sensira FTXF71D/RXF71D",
      price: 10090,
      src: daikin_sensira.src,
      area: 70,
      powerCold: 7.1,
      powerHeat: 8.2,
      manufacturer: "daikin",
      type: "настенный",
      invertor: "да",
    },

    {
      name: "Кондиционер Mitsubishi Heavy Industries SRK20ZS-WT/SRC20ZS-W",
      price: 4700,
      src: mitsubishi_heavy_srk_zs_wt.src,
      area: 20,
      powerCold: 2,
      powerHeat: 2.7,
      manufacturer: "mitsubishi_heavy",
      type: "настенный",
      invertor: "да",
    },
    {
      name: "Кондиционер Mitsubishi Heavy Industries SRK25ZS-WT/SRC25ZS-W",
      price: 5650,
      src: mitsubishi_heavy_srk_zs_wt.src,
      area: 25,
      powerCold: 2.5,
      powerHeat: 3.2,
      manufacturer: "mitsubishi_heavy",
      type: "настенный",
      invertor: "да",
    },
    {
      name: "Кондиционер Mitsubishi Heavy Industries SRK35ZS-WT/SRC35ZS-W",
      price: 6150,
      src: mitsubishi_heavy_srk_zs_wt.src,
      area: 35,
      powerCold: 3.5,
      powerHeat: 4,
      manufacturer: "mitsubishi_heavy",
      type: "настенный",
      invertor: "да",
    },
    {
      name: "Кондиционер Mitsubishi Heavy Industries SRK25ZSPR-S/SRC25ZSPR-S",
      price: 2500,
      src: mitsubishi_heavy_srk25zspr.src,
      area: 25,
      powerCold: 2.5,
      powerHeat: 2.8,
      manufacturer: "mitsubishi_heavy",
      type: "настенный",
      invertor: "да",
    }
  ]);

  


  const [filterName, setFilterName] = useState("");
  const [filterType, setFilterType] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [chooseArea, setChooseArea] = useState(0);
  const [chooseInvertor, setChooseInvertor] = useState();

  const changeChooseProducer = (producer) => {
    setFilterName(producer);
  };

  const changeChooseType = (type) => {
    setFilterType(type);
  };

  const changeMinPrice = (min) => {
    setMinPrice(min);
  };

  const changeMaxPrice = (max) => {
    setMaxPrice(max);
  };

  const changeChooseArea = (area) => {
    setChooseArea(area);
  };

  const changeChooseInvertor = (invertor) => {
    setChooseInvertor(invertor);
  };

  return (
    <div className={styles.catalog}>
      <h1>Каталог кондиционеров</h1>
      <div className={styles.container}>
        <CatalogFilter
          changeChooseProducer={changeChooseProducer}
          changeChooseType={changeChooseType}
          changeMinPrice={changeMinPrice}
          changeMaxPrice={changeMaxPrice}
          changeChooseArea={changeChooseArea}
          changeChooseInvertor={changeChooseInvertor}
        />
        <div className={styles.container_cond_list}>
          {catalogList
            .filter(
              (item) =>
                (filterName ? item.manufacturer === filterName : true) &&
                (filterType ? item.type === filterType : true) &&
                (chooseArea ? item.area <= chooseArea : true) &&
                (minPrice ? minPrice <= item.price : true) &&
                (maxPrice ? item.price <= maxPrice : true) &&
                (chooseInvertor ? item.invertor === chooseInvertor : true)
            )
            .map((item, index) => (
              <CatalogItem cond={item} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Catalog;

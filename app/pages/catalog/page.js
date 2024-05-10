"use client";

import { useState } from "react";
import styles from "../../style/Catalog.module.css";
import CatalogItem from "../../components/CatalogItem";
import CatalogFilter from "../../components/CatalogFilter";
import gree_pular from "../../img/gree_pular.jpeg";
import gree_bora from "../../img/gree_bora.jpeg";
import gree_pular_on_off from "../../img/gree_pular_on_off.jpeg"


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
      name: "Сплит-система LG",
      price: 2300,
      src: "/_next/static/media/energolux.4173834b.jpeg",
      area: 47,
      powerCold: 2.5,
      powerHeat: 2.8,
      manufacturer: "lg",
      type: "канальный",
      invertor: "нет",
    },
    {
      name: "Сплит-система gree BSAGI-12HN8 серия iGreen Pro DC inverter",
      price: 3000,
      src: "/_next/static/media/energolux.4173834b.jpeg",
      area: 30,
      powerCold: 2.5,
      powerHeat: 2.5,
      manufacturer: "gree",
      type: "настенный",
      invertor: "да",
    },
    {
      name: "Сплит-система gree",
      price: 1200,
      src: "/_next/static/media/energolux.4173834b.jpeg",
      area: 55,
      powerCold: 2.5,
      powerHeat: 2.5,
      manufacturer: "gree",
      type: "кассетный",
      invertor: "да",
    },
    {
      name: "Сплит-система Energolux",
      price: 1200,
      src: "/_next/static/media/energolux.4173834b.jpeg",
      area: 50,
      powerCold: 2.5,
      powerHeat: 2.5,
      manufacturer: "energolux",
      type: "настенный",
      invertor: "да",
    },

    {
      name: "Сплит-система Ballu",
      price: 3000,
      src: "/_next/static/media/energolux.4173834b.jpeg",
      area: 40,
      powerCold: 2.5,
      powerHeat: 2.5,
      manufacturer: "ballu",
      type: "канальный",
      invertor: "да",
    },
    {
      name: "Сплит-система Panasonic",
      price: 1200,
      src: "/_next/static/media/energolux.4173834b.jpeg",
      area: 23,
      powerCold: 2.5,
      powerHeat: 2.3,
      manufacturer: "panasonic",
      type: "кассетный",
      invertor: "да",
    },
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

/**
 * Diseño: Taller de Miel — editorial artesanal contemporáneo.
 * Principios del archivo: materias orgánicas, datos de producto claros, composición asimétrica y exploración tranquila.
 */
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  ChevronRight,
  Download,
  Droplets,
  Flower2,
  Hexagon,
  Leaf,
  MessageCircle,
  Menu,
  PackageOpen,
  Sparkles,
  X,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const portableAsset = (manusPath: string, publicUrl: string) => {
  if (typeof window === "undefined") return publicUrl;
  const hostname = window.location.hostname.toLowerCase();
  const isManusPreview =
    hostname.endsWith(".manus.computer") || hostname.endsWith(".manus.space");
  return isManusPreview ? manusPath : publicUrl;
};

const PDF_URL = portableAsset(
  "/manus-storage/CATALOGOXUUMIELYXUUJABABRIL2026actual08_73d4e109.pdf",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/dNquuCIXxNBVwIFX.pdf"
);
const WHATSAPP_URL =
  "https://wa.me/529984070222?text=Hola%20XUUMIEL%2C%20quiero%20hacer%20un%20pedido.%20%C2%BFMe%20comparten%20disponibilidad%20y%20formas%20de%20pago%3F";
const EMBLEM_URL = portableAsset(
  "/manus-storage/logo-003_9c254216.png",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/HIVsFmCyefRWqBvl.png"
);
const REGIONAL_LOGO_URL =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/ICuMTBnjPujuSvGE.jpg";
const XUUJAAB_URL =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/ylULpCSHjiYrEBEv.png";
const HERO_URL = portableAsset(
  "/manus-storage/xuummiel-hero-melipona_8fd14543.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/AVMZHgtozEmBgkBw.jpg"
);
const HERO_VIDEO_URL =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/cmOnmdGBltmiMpFU.mp4";
const INGREDIENTS_URL = portableAsset(
  "/manus-storage/xuummiel-ingredients-stilllife_fa1abc00.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/LPPwmLxOTrbpkFxS.jpg"
);
const ORIGIN_URL = portableAsset(
  "/manus-storage/xuummiel-origin-landscape_a262c213.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/FxmqVvkyJSaIQvwZ.jpg"
);
const ARROZ_SOAP_URL =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/nZTRFFRkYAXfRVvQ.png";
const SABILA_MENTA_SOAP_URL =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/zRivaShqPnxVMNue.png";
const AVENA_SOAP_URL =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/reUSzjZbwZPjjcfG.png";
const TEPEZCOHUITE_SOAP_URL =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/CbeaSdZvQUIgabJd.png";
const HONEYCOMB_SOAP_URL =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/DdIYdkhuGAzvNQIX.png";
const NEEM_HONEY_SOAP_URL =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/YKDMKUwclKywVitS.png";
const TURMERIC_SOAP_URL =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/UnQkTBBLKkiCIgih.png";
const STRAWBERRY_SOAP_URL =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/KTJzlUwgSbTFuXuM.png";
const RCH_CREAM_URL =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/sABTLISpVCTBrjSM.png";
const CRVE_CREAM_URL =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/dCopQCDqGlMjyLqQ.png";
const HONEY_URL =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/VkEKfdnqSiaFipIM.png";
const APIS_750_BOTTLE_URL =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/kmdvBhLzsvHYehAE.png";
const TOURIST_GIFT_BOX_URL =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/fvkLmqvJhuxKYqEM.png";
const RECYCLED_APIS_360_URL =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/TbKpRVLpUZJhBpNN.png";
const RECYCLED_APIS_700_URL =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/bwzxlhkBGSNdCuYy.png";
const HAIR_SHAMPOO_125ML_URL =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/MrkSNmfjFfisLMrs.png";
const HAIR_SHAMPOO_250ML_URL =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/MfhikxYHwcFbxXnC.png";
const HAIR_SHAMPOO_500ML_URL =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/VnUjcvEkzlbWnYfv.png";
const MELIPONA_50ML_URL =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/zMRpWUTxcczdWsoU.png";
const MELIPONA_BOX_50ML_URL =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/GmOHXZcpkFthWbNX.png";
const GOTERO_10ML_URL =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/LMWyKSbOJwzOWaUp.png";
const GOTERO_20ML_URL =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/BIDPsgwLjJQjYNVF.png";
const GOTERO_30ML_URL =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/ZbXYjPhzdELQdpGT.png";
const MELIPONA_CACAO_30_URL =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/qdfxRxGNuoFFNTuE.png";
const GALLERY_URLS = {
  img8090:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/nZTRFFRkYAXfRVvQ.png",
  img8092:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/cjXqhYGENXHnNSSq.png",
  img8094:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/XncbeftxROyqSnSU.png",
  img8097:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/SDuQgmjHmwKXzrCh.png",
  img8103:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/yHdJgNQqEyJbjCzN.png",
  img8105:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/SokZdvQlOIRrbxNA.png",
  img8111:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/iaVAwyMqheEVuhrG.png",
  img8115:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/JqqJWmQbuLLeDbPG.png",
  img8116:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/unzopUKhjvxvgdNU.png",
  img8134:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/eAfHqBTggGtYVuny.png",
  img8136:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/FCcSMVSoBoukJMSV.png",
  img8139:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/lVStLKQNIEkBTXKZ.png",
  img8141:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/XgBmlNTBkuUxDfPC.png",
  img8149:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/oQoFOOhWJEQeUlvP.png",
  img8158:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/gOZwFMgbmADoRoVU.png",
  img8159:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/LiPgbsxrjpooUXfa.png",
  img8160:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/hlWxpNDpheDinwEC.png",
  img8161:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/UoVzqQLvAohzabTi.png",
  img8162:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/CmTOVoijXMjKgRRW.png",
  img8163:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/ECzpgLjrKCNVKmfR.png",
  img8167:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/CgeGQYnmuiRTHmeR.png",
  img8169:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/MCntVvPuNkpHMABQ.png",
  img8173:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/aKOGcxRygmNcGPRQ.png",
  beeSoap:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/tdPQCvHhwktiTsvU.png",
  turmericSoap:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/nrlTawmSqzKJDjpK.png",
  neemHoneySoap:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/tHPfKyyWZZqrrwZs.png",
};

type Category =
  | "Todo"
  | "Miel Melipona"
  | "Jabones"
  | "Cremas"
  | "Cuidado capilar"
  | "Propóleo"
  | "Kits y regalos"
  | "Repelentes";
type Collection = Exclude<Category, "Todo">;

const displayCategoryName = (category: Category) =>
  category === "Jabones"
    ? "Jabones artesanales con miel de abejas Melipona beecheii (sin aguijón)"
    : category;

type Product = {
  id: string;
  name: string;
  category: Collection;
  price: string;
  priceDetails?: string;
  size: string;
  ingredient: string;
  description: string;
  benefits?: string[];
  usage?: string;
  page: number | null;
  image: string;
  imageAlt?: string;
  imageCaption?: string;
  isProductPhoto?: boolean;
  logoOnly?: boolean;
  label?: string;
};

type InstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

const usesXuujaabBrand = (product: Product) =>
  product.category === "Jabones" ||
  product.category === "Cremas" ||
  product.category === "Cuidado capilar";

const catalogPages = {
  p04: portableAsset(
    "/manus-storage/xuummiel-catalog-page-04_d095c64d.png",
    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/PNViugmhcGcNYVxx.png"
  ),
  p05: portableAsset(
    "/manus-storage/xuummiel-catalog-page-05_dc876275.png",
    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/PpYlgCwGDtaLjFfv.png"
  ),
  p06: portableAsset(
    "/manus-storage/xuummiel-catalog-page-06_6174ce39.png",
    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/jJPUKRRhYKQjhjoD.png"
  ),
  p07: portableAsset(
    "/manus-storage/xuummiel-catalog-page-07_12569439.png",
    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/AXtdAXpHJllgByJp.png"
  ),
  p08: portableAsset(
    "/manus-storage/xuummiel-catalog-page-08_914ee607.png",
    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/snoOqknWbpcAQGGx.png"
  ),
  p09: portableAsset(
    "/manus-storage/xuummiel-catalog-page-09_b8ad9de0.png",
    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/HfHzsHotxKBdnkHp.png"
  ),
  p10: portableAsset(
    "/manus-storage/xuummiel-catalog-page-10_27bc1928.png",
    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/BWmEukEdLcyVgwgt.png"
  ),
  p11: portableAsset(
    "/manus-storage/xuummiel-catalog-page-11_3486ac38.png",
    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/mwXwfrjYriazpeqD.png"
  ),
  p13: portableAsset(
    "/manus-storage/xuummiel-catalog-page-13_f953b40b.png",
    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/rKKuCXcXewshAdZZ.png"
  ),
  p14: portableAsset(
    "/manus-storage/xuummiel-catalog-page-14_9835353b.png",
    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/guobMUgKXnkRiEiz.png"
  ),
  p15: portableAsset(
    "/manus-storage/xuummiel-catalog-page-15_54be5a09.png",
    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/QDWEUpZtexsyzXxS.png"
  ),
  p17: portableAsset(
    "/manus-storage/xuummiel-catalog-page-17_e2bac427.png",
    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/LIqmwCNzyDfwKxhW.png"
  ),
  p18: portableAsset(
    "/manus-storage/xuummiel-catalog-page-18_492f1910.png",
    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/LNHcNELnjnDwXSev.png"
  ),
};

const products: Product[] = [
  {
    id: "jabon-arroz-coco",
    name: "Jabón de arroz base coco",
    category: "Jabones",
    price: "$70",
    size: "70 g",
    ingredient: "Arroz · base coco",
    description: "Exfoliante, suavizante y estabiliza el tono de piel.",
    benefits: ["Exfoliante", "Suavizante", "Estabiliza el tono de piel"],
    page: 4,
    image: ARROZ_SOAP_URL,
    imageAlt: "Jabón de arroz base coco XUUJÁAB de 70 gramos.",
    imageCaption: "Presentación oficial del PDF · 70 g · $70 pesos",
    isProductPhoto: true,
  },
  {
    id: "jabon-avena",
    name: "Jabón de avena",
    category: "Jabones",
    price: "$50",
    size: "70 g",
    ingredient: "Avena",
    description: "Astringente para piel normal y grasa.",
    benefits: ["Astringente", "Para piel normal y grasa"],
    page: 4,
    image: AVENA_SOAP_URL,
    imageAlt: "Jabón de avena XUUJÁAB de 70 gramos.",
    imageCaption: "Presentación oficial del PDF · 70 g · $50 pesos",
    isProductPhoto: true,
  },
  {
    id: "jabon-tepezcohuite",
    name: "Jabón de tepezcohuite con miel de abejas Meliponas",
    category: "Jabones",
    price: "$120",
    size: "100 g",
    ingredient: "Tepezcohuite · miel de abejas Meliponas",
    description: "Jabón de tepezcohuite con miel de abejas Meliponas.",
    benefits: [],
    page: 5,
    image: TEPEZCOHUITE_SOAP_URL,
    imageAlt: "Jabón de tepezcohuite con miel de abejas Meliponas de 100 gramos.",
    imageCaption: "Presentación oficial del PDF · 100 g · $120 pesos",
    isProductPhoto: true,
  },
  {
    id: "kit-cartera",
    name: "Kit Cartera",
    category: "Kits y regalos",
    price: "$210",
    size: "Jabón 100 g · gotero 5 ml",
    ingredient: "Jabón de tepezcohuite · miel de abejas Melipona · yute natural",
    description: "Kit Cartera con jabón de tepezcohuite con miel de abejas Melipona de 100 g, cartera hecha a mano en yute natural y miel de bolsillo en gotero de 5 ml.",
    benefits: [],
    page: 5,
    image: catalogPages.p05,
    imageAlt: "Kit Cartera con jabón, cartera de yute y gotero de miel.",
    imageCaption: "Presentación oficial del PDF · $210 pesos",
  },
  {
    id: "jabon-miel-melipona",
    name: "Jabón de miel de abejas meliponas",
    category: "Jabones",
    price: "$60",
    size: "100 g",
    ingredient: "Miel de abejas meliponas",
    description: "Jabón de miel de abejas meliponas con refrescante aroma a madera.",
    benefits: ["Refrescante aroma a madera"],
    page: 6,
    image: HONEYCOMB_SOAP_URL,
    imageAlt: "Jabón de miel de abejas meliponas de 100 gramos.",
    imageCaption: "Presentación oficial del PDF · 100 g · $60 pesos",
    isProductPhoto: true,
  },
  {
    id: "jabon-neem",
    name: "Jabón de neem base coco",
    category: "Jabones",
    price: "$70",
    size: "70 g",
    ingredient: "Neem · base coco",
    description: "Para piel seca, suaviza la piel.",
    benefits: ["Fungicida", "Mata las bacterias que se presentan en granos en la piel", "Para aliviar de chechén y sarna"],
    page: 7,
    image: NEEM_HONEY_SOAP_URL,
    imageAlt: "Jabón de neem base coco de 70 gramos.",
    imageCaption: "Presentación oficial del PDF · 70 g · $70 pesos",
    isProductPhoto: true,
  },
  {
    id: "jabon-curcuma",
    name: "Jabón cúrcuma coco, miel de abejas meliponas",
    category: "Jabones",
    price: "$90",
    size: "90 g",
    ingredient: "Cúrcuma · coco · miel de abejas meliponas",
    description: "Eficaz para combatir la hiperpigmentación en la piel, ya que inhibe la producción de melanina, el pigmento responsable de la aparición de las manchas marrones.",
    benefits: ["Ayuda a curar el acné", "Corrige la piel opaca", "Reduce las ojeras", "Protege contra los daños ambientales", "En algunos casos ayuda a quitar psoriasis y al eccema", "Evita el envejecimiento prematuro"],
    page: 8,
    image: TURMERIC_SOAP_URL,
    imageAlt: "Jabón cúrcuma coco con miel de abejas meliponas de 90 gramos.",
    imageCaption: "Presentación oficial del PDF · 90 g · $90 pesos",
    isProductPhoto: true,
  },
  {
    id: "jabon-leche-cabra-fresa",
    name: "Jabón base leche de cabra, miel de abejas meliponas, fresa champagne",
    category: "Jabones",
    price: "$90",
    size: "90 g",
    ingredient: "Leche de cabra · miel de abejas meliponas · fresa champagne",
    description: "Para piel madura a normal, restaura la vitalidad de la piel. Fresa champagne: activa y eleva la energía vital.",
    benefits: [],
    page: 9,
    image: STRAWBERRY_SOAP_URL,
    imageAlt: "Jabón de leche de cabra, miel de abejas meliponas y fresa champagne de 90 gramos.",
    imageCaption: "Presentación oficial del PDF · 90 g · $90 pesos",
    isProductPhoto: true,
  },
  {
    id: "jabon-leche-cabra-fresa-viaje",
    name: "Jabón base leche de cabra, miel de abejas meliponas, fresa champagne · tamaño viaje",
    category: "Jabones",
    price: "$20",
    size: "20 g",
    ingredient: "Leche de cabra · miel de abejas meliponas · fresa champagne",
    description: "Jabón base leche de cabra, miel de abejas meliponas y fresa champagne en tamaño viaje.",
    benefits: [],
    page: 9,
    image: STRAWBERRY_SOAP_URL,
    imageAlt: "Jabón de leche de cabra, miel de abejas meliponas y fresa champagne en tamaño viaje.",
    imageCaption: "Presentación oficial del PDF · 20 g · $20 pesos",
    isProductPhoto: true,
  },
  {
    id: "jabon-fresa-champagne",
    name: "Jabón fresa champagne base leche de cabra",
    category: "Jabones",
    price: "$60",
    size: "70 g",
    ingredient: "Fresa champagne · base leche de cabra",
    description: "Activa la energía dormida y revitaliza la textura de la piel.",
    benefits: [],
    page: 10,
    image: STRAWBERRY_SOAP_URL,
    imageAlt: "Jabón fresa champagne base leche de cabra de 70 gramos.",
    imageCaption: "Presentación oficial del PDF · 70 g · $60 pesos",
    isProductPhoto: true,
  },
  {
    id: "jabon-fresa-champagne-viaje",
    name: "Jabón fresa champagne base leche de cabra · tamaño viaje",
    category: "Jabones",
    price: "$20",
    size: "20 g",
    ingredient: "Fresa champagne · base leche de cabra",
    description: "Activa la energía dormida y revitaliza la textura de la piel en tamaño viaje.",
    benefits: [],
    page: 10,
    image: STRAWBERRY_SOAP_URL,
    imageAlt: "Jabón fresa champagne base leche de cabra en tamaño viaje.",
    imageCaption: "Presentación oficial del PDF · 20 g · $20 pesos",
    isProductPhoto: true,
  },
  {
    id: "kit-flor",
    name: "Kit Flor",
    category: "Kits y regalos",
    price: "$90",
    size: "Jabón 80 g · gotero 5 ml",
    ingredient: "Jabón de sábila · miel de bolsillo · tela de algodón",
    description: "Kit Flor con jabón de sábila de 80 g, miel de bolsillo en gotero de 5 ml y envoltura de tela de algodón.",
    benefits: [],
    page: 11,
    image: catalogPages.p11,
    imageAlt: "Kit Flor con jabón de sábila, gotero de miel y envoltura de tela.",
    imageCaption: "Presentación oficial del PDF · $90 pesos",
  },
  {
    id: "jabon-sabila-menta",
    name: "Jabón de sábila menta",
    category: "Jabones",
    price: "$30",
    size: "80 g",
    ingredient: "Sábila · menta",
    description: "Antioxidante, contribuye a eliminar manchas de la piel y suaviza.",
    benefits: [],
    page: 11,
    image: SABILA_MENTA_SOAP_URL,
    imageAlt: "Jabón de sábila menta de 80 gramos.",
    imageCaption: "Presentación oficial del PDF · 80 g · $30 pesos",
    isProductPhoto: true,
  },
  {
    id: "crema-rch-hidratante-30",
    name: "RCH crema regeneradora celular hidratante para rostro y cuello",
    category: "Cremas",
    price: "$170",
    size: "30 g",
    ingredient: "Semilla de sésamo · miel Melipona · colágeno",
    description: "Crema regeneradora celular hidratante para rostro y cuello de semilla de sésamo, miel Melipona y colágeno.",
    benefits: ["Protege de los radicales libres", "Previene y disminuye arrugas, líneas de expresión y estrías con el uso constante", "Contribuye a que la piel se mantenga hidratada y regenere células", "Útil como protector solar y base de maquillaje", "Puede ayudar a limpiar el maquillaje y aliviar quemaduras"],
    page: 13,
    image: RCH_CREAM_URL,
    imageAlt: "Crema RCH regeneradora celular hidratante de 30 gramos.",
    imageCaption: "Presentación oficial del PDF · 30 g · $170 pesos",
    isProductPhoto: true,
  },
  {
    id: "crema-rch-hidratante-60",
    name: "RCH crema regeneradora celular hidratante para rostro y cuello",
    category: "Cremas",
    price: "$320",
    size: "60 g",
    ingredient: "Semilla de sésamo · miel Melipona · colágeno",
    description: "Crema regeneradora celular hidratante para rostro y cuello de semilla de sésamo, miel Melipona y colágeno.",
    benefits: ["Protege de los radicales libres", "Previene y disminuye arrugas, líneas de expresión y estrías con el uso constante", "Contribuye a que la piel se mantenga hidratada y regenere células", "Útil como protector solar y base de maquillaje", "Puede ayudar a limpiar el maquillaje y aliviar quemaduras"],
    page: 13,
    image: RCH_CREAM_URL,
    imageAlt: "Crema RCH regeneradora celular hidratante de 60 gramos.",
    imageCaption: "Presentación oficial del PDF · 60 g · $320 pesos",
    isProductPhoto: true,
  },
  {
    id: "crema-rch-hidratante-120",
    name: "RCH crema regeneradora celular hidratante para rostro y cuello",
    category: "Cremas",
    price: "$590",
    size: "120 g",
    ingredient: "Semilla de sésamo · miel Melipona · colágeno",
    description: "Crema regeneradora celular hidratante para rostro y cuello de semilla de sésamo, miel Melipona y colágeno.",
    benefits: ["Protege de los radicales libres", "Previene y disminuye arrugas, líneas de expresión y estrías con el uso constante", "Contribuye a que la piel se mantenga hidratada y regenere células", "Útil como protector solar y base de maquillaje", "Puede ayudar a limpiar el maquillaje y aliviar quemaduras"],
    page: 13,
    image: RCH_CREAM_URL,
    imageAlt: "Crema RCH regeneradora celular hidratante de 120 gramos.",
    imageCaption: "Presentación oficial del PDF · 120 g · $590 pesos",
    isProductPhoto: true,
  },
  {
    id: "crema-rch-hidratante-250",
    name: "RCH crema regeneradora celular hidratante para rostro y cuello",
    category: "Cremas",
    price: "$1100",
    size: "250 g",
    ingredient: "Semilla de sésamo · miel Melipona · colágeno",
    description: "Crema regeneradora celular hidratante para rostro y cuello de semilla de sésamo, miel Melipona y colágeno.",
    benefits: ["Protege de los radicales libres", "Previene y disminuye arrugas, líneas de expresión y estrías con el uso constante", "Contribuye a que la piel se mantenga hidratada y regenere células", "Útil como protector solar y base de maquillaje", "Puede ayudar a limpiar el maquillaje y aliviar quemaduras"],
    page: 13,
    image: RCH_CREAM_URL,
    imageAlt: "Crema RCH regeneradora celular hidratante de 250 gramos.",
    imageCaption: "Presentación oficial del PDF · 250 g · $1100 pesos",
    isProductPhoto: true,
  },
  {
    id: "crema-rch-afeitar-30",
    name: "RCH crema regeneradora celular para rostro y cuello",
    category: "Cremas",
    price: "$120",
    size: "30 g",
    ingredient: "Semilla de sésamo · miel Melipona · colágeno",
    description: "Antioxidante, útil después de afeitar y para piel quemada por exposición al sol.",
    benefits: ["Protege de los radicales libres", "Previene y disminuye arrugas, líneas de expresión y estrías con el uso constante", "Contribuye a que la piel se mantenga hidratada y regenere células", "Útil para sellar los poros al rasurar, eliminando sangrado e irritación"],
    page: 14,
    image: RCH_CREAM_URL,
    imageAlt: "Crema RCH para rostro y cuello de 30 gramos.",
    imageCaption: "Presentación oficial del PDF · 30 g · $120 pesos",
    isProductPhoto: true,
  },
  {
    id: "crema-rch-afeitar-50",
    name: "RCH crema regeneradora celular para rostro y cuello",
    category: "Cremas",
    price: "$220",
    size: "50 g",
    ingredient: "Semilla de sésamo · miel Melipona · colágeno",
    description: "Antioxidante, útil después de afeitar y para piel quemada por exposición al sol.",
    benefits: ["Protege de los radicales libres", "Previene y disminuye arrugas, líneas de expresión y estrías con el uso constante", "Contribuye a que la piel se mantenga hidratada y regenere células", "Útil para sellar los poros al rasurar, eliminando sangrado e irritación"],
    page: 14,
    image: RCH_CREAM_URL,
    imageAlt: "Crema RCH para rostro y cuello de 50 gramos.",
    imageCaption: "Presentación oficial del PDF · 50 g · $220 pesos",
    isProductPhoto: true,
  },
  {
    id: "crema-rch-afeitar-dispensador",
    name: "RCH crema regeneradora celular para rostro y cuello con dispensador",
    category: "Cremas",
    price: "$240",
    size: "50 g con dispensador",
    ingredient: "Semilla de sésamo · miel Melipona · colágeno",
    description: "Antioxidante, útil después de afeitar y para piel quemada por exposición al sol.",
    benefits: ["Protege de los radicales libres", "Previene y disminuye arrugas, líneas de expresión y estrías con el uso constante", "Contribuye a que la piel se mantenga hidratada y regenere células", "Útil para sellar los poros al rasurar, eliminando sangrado e irritación"],
    page: 14,
    image: RCH_CREAM_URL,
    imageAlt: "Crema RCH para rostro y cuello de 50 gramos con dispensador.",
    imageCaption: "Presentación oficial del PDF · 50 g con dispensador · $240 pesos",
    isProductPhoto: true,
  },
  {
    id: "crema-rf-reafirmante",
    name: "RF crema reafirmante para rostro y cuello",
    category: "Cremas",
    price: "$280",
    size: "50 g",
    ingredient: "Romero · miel Melipona · vitamina E",
    description: "La crema reafirmante XUUJÁAB es creada por la acción de la miel de las abejas Meliponas Beecheii, potenciada con romero y vitamina E. Sus beneficios son regenerar las células dañadas de manera acelerada, logrando reparar la piel afectada por diversos factores.",
    benefits: ["Regenera las células dañadas", "Logra reparar la piel afectada por diversos factores"],
    usage: "Aplicar por las noches 15 minutos antes de dormir para que la piel absorba los nutrientes al máximo. Recomendación alterna: evitar el humo de cigarrillos. Alternar con la crema de día HIDRATANTE XUUMIEL y COLÁGENO.",
    page: 15,
    image: CRVE_CREAM_URL,
    imageAlt: "RF crema reafirmante para rostro y cuello de 50 gramos.",
    imageCaption: "Presentación oficial del PDF · 50 g · $280 pesos",
    isProductPhoto: true,
  },
  {
    id: "miel-melipona-5",
    name: "Miel de abejas meliponas Beecheii",
    category: "Miel Melipona",
    price: "$60",
    size: "5 ml · envase de cristal oscuro",
    ingredient: "Miel de abejas Melipona Beecheii",
    description: "Miel de abejas meliponas Beecheii en envase de cristal oscuro.",
    benefits: [],
    page: 17,
    image: GOTERO_10ML_URL,
    imageAlt: "Miel Melipona Beecheii en presentación de 5 ml.",
    imageCaption: "Presentación oficial del PDF · 5 ml · $60 pesos",
  },
  {
    id: "miel-melipona-10",
    name: "Miel de abejas meliponas Beecheii",
    category: "Miel Melipona",
    price: "$120",
    size: "10 ml · envase de cristal oscuro",
    ingredient: "Miel de abejas Melipona Beecheii",
    description: "Miel de abejas meliponas Beecheii en envase de cristal oscuro.",
    benefits: [],
    page: 17,
    image: GOTERO_10ML_URL,
    imageAlt: "Miel Melipona Beecheii en presentación de 10 ml.",
    imageCaption: "Presentación oficial del PDF · 10 ml · $120 pesos",
  },
  {
    id: "miel-melipona-15",
    name: "Miel de abejas meliponas Beecheii",
    category: "Miel Melipona",
    price: "$180",
    size: "15 ml · envase de cristal oscuro",
    ingredient: "Miel de abejas Melipona Beecheii",
    description: "Miel de abejas meliponas Beecheii en envase de cristal oscuro.",
    benefits: [],
    page: 17,
    image: GOTERO_20ML_URL,
    imageAlt: "Miel Melipona Beecheii en presentación de 15 ml.",
    imageCaption: "Presentación oficial del PDF · 15 ml · $180 pesos",
  },
  {
    id: "miel-melipona-20",
    name: "Miel de abejas meliponas Beecheii",
    category: "Miel Melipona",
    price: "$220",
    size: "20 ml · envase de cristal oscuro",
    ingredient: "Miel de abejas Melipona Beecheii",
    description: "Miel de abejas meliponas Beecheii en envase de cristal oscuro.",
    benefits: [],
    page: 17,
    image: GOTERO_20ML_URL,
    imageAlt: "Miel Melipona Beecheii en presentación de 20 ml.",
    imageCaption: "Presentación oficial del PDF · 20 ml · $220 pesos",
  },
  {
    id: "miel-melipona-30",
    name: "Miel de abejas meliponas Beecheii",
    category: "Miel Melipona",
    price: "$290",
    size: "30 ml · envase de cristal oscuro",
    ingredient: "Miel de abejas Melipona Beecheii",
    description: "Miel de abejas meliponas Beecheii en envase de cristal oscuro.",
    benefits: [],
    page: 17,
    image: GOTERO_30ML_URL,
    imageAlt: "Miel Melipona Beecheii en presentación de 30 ml.",
    imageCaption: "Presentación oficial del PDF · 30 ml · $290 pesos",
  },
  {
    id: "miel-melipona-50",
    name: "Miel de abejas meliponas Beecheii",
    category: "Miel Melipona",
    price: "$440",
    size: "50 ml · envase de cristal oscuro",
    ingredient: "Miel de abejas Melipona Beecheii",
    description: "Miel de abejas meliponas Beecheii en envase de cristal oscuro.",
    benefits: [],
    page: 17,
    image: MELIPONA_50ML_URL,
    imageAlt: "Miel Melipona Beecheii en presentación de 50 ml.",
    imageCaption: "Presentación oficial del PDF · 50 ml · $440 pesos",
  },
  {
    id: "elixir-melipona-cacao-30",
    name: "Elixir de miel de abejas meliponas y cacao",
    category: "Miel Melipona",
    price: "$260",
    size: "30 ml · envase de cristal oscuro",
    ingredient: "Miel de abejas meliponas · cacao puro 100% desgrasado sin azúcar",
    description: "El cacao puro es un superalimento rico en antioxidantes, minerales como magnesio, hierro y zinc, y compuestos estimulantes como la teobromina. Mejora la salud cardiovascular, reduce la inflamación, mejora el estado de ánimo y aporta energía sostenida.",
    benefits: ["Rico en antioxidantes", "Aporta magnesio, hierro y zinc", "Aporta energía sostenida"],
    page: 18,
    image: MELIPONA_CACAO_30_URL,
    imageAlt: "Elixir de miel de abejas meliponas y cacao en 30 ml.",
    imageCaption: "Presentación oficial del PDF · 30 ml · $260 pesos",
    isProductPhoto: true,
  },
  {
    id: "elixir-melipona-cacao-50",
    name: "Elixir de miel de abejas meliponas y cacao",
    category: "Miel Melipona",
    price: "$340",
    size: "50 ml · envase de cristal oscuro",
    ingredient: "Miel de abejas meliponas · cacao puro 100% desgrasado sin azúcar",
    description: "El cacao puro es un superalimento rico en antioxidantes, minerales como magnesio, hierro y zinc, y compuestos estimulantes como la teobromina. Mejora la salud cardiovascular, reduce la inflamación, mejora el estado de ánimo y aporta energía sostenida.",
    benefits: ["Rico en antioxidantes", "Aporta magnesio, hierro y zinc", "Aporta energía sostenida"],
    page: 18,
    image: MELIPONA_CACAO_30_URL,
    imageAlt: "Elixir de miel de abejas meliponas y cacao en 50 ml.",
    imageCaption: "Presentación oficial del PDF · 50 ml · $340 pesos",
    isProductPhoto: true,
  },
  {
    id: "multivitaminico-polen-propoleo-miel",
    name: "Multivitamínico de polen, propóleo y miel de abejas apidea",
    category: "Miel Melipona",
    price: "$180",
    size: "200 g · envase de cristal oscuro",
    ingredient: "Polen · propóleo · miel de abejas apidea",
    description: "El propóleo encapsula virus y bacterias para proteger células. El polen es fuente de energía y la miel es fuente de energía rápida y remedio tradicional para aliviar la tos y el dolor de garganta por sus propiedades antisépticas, antibacterianas y antioxidantes. También es utilizada para mejorar la digestión y cicatrizar heridas.",
    benefits: [],
    page: 19,
    image: EMBLEM_URL,
    imageAlt: "Presentación de multivitamínico de polen, propóleo y miel.",
    imageCaption: "Presentación oficial del PDF · 200 g · $180 pesos",
    logoOnly: true,
  },
  {
    id: "propoleo-eucalipto",
    name: "Propóleo con eucalipto",
    category: "Propóleo",
    price: "$180",
    size: "25 ml · envase con atomizador",
    ingredient: "Propóleo · eucalipto",
    description: "Propóleo con eucalipto en envase con atomizador.",
    benefits: [],
    page: 20,
    image: GALLERY_URLS.img8163,
    imageAlt: "Propóleo con eucalipto en envase con atomizador de 25 ml.",
    imageCaption: "Presentación oficial del PDF · 25 ml · $180 pesos",
    isProductPhoto: true,
  },
  {
    id: "shampoo-mascarilla-125",
    name: "Shampoo mascarilla para cabello de miel, romero y canela",
    category: "Cuidado capilar",
    price: "$75",
    size: "125 ml",
    ingredient: "Miel · romero · canela",
    description: "Restaura, repara, se obtiene suavidad natural y brillo.",
    benefits: ["Estimula el crecimiento del cabello", "Fortalece el cabello"],
    page: 21,
    image: HAIR_SHAMPOO_125ML_URL,
    imageAlt: "Shampoo mascarilla para cabello de miel, romero y canela de 125 ml.",
    imageCaption: "Presentación oficial del PDF · 125 ml · $75 pesos",
    isProductPhoto: true,
  },
  {
    id: "shampoo-mascarilla-250",
    name: "Shampoo mascarilla para cabello de miel, romero y canela",
    category: "Cuidado capilar",
    price: "$150",
    size: "250 ml",
    ingredient: "Miel · romero · canela",
    description: "Restaura, repara, se obtiene suavidad natural y brillo.",
    benefits: ["Estimula el crecimiento del cabello", "Fortalece el cabello"],
    page: 21,
    image: HAIR_SHAMPOO_250ML_URL,
    imageAlt: "Shampoo mascarilla para cabello de miel, romero y canela de 250 ml.",
    imageCaption: "Presentación oficial del PDF · 250 ml · $150 pesos",
    isProductPhoto: true,
  },
  {
    id: "shampoo-mascarilla-500",
    name: "Shampoo mascarilla para cabello de miel, romero y canela",
    category: "Cuidado capilar",
    price: "$270",
    size: "500 ml",
    ingredient: "Miel · romero · canela",
    description: "Restaura, repara, se obtiene suavidad natural y brillo.",
    benefits: ["Estimula el crecimiento del cabello", "Fortalece el cabello"],
    page: 21,
    image: HAIR_SHAMPOO_500ML_URL,
    imageAlt: "Shampoo mascarilla para cabello de miel, romero y canela de 500 ml.",
    imageCaption: "Presentación oficial del PDF · 500 ml · $270 pesos",
    isProductPhoto: true,
  },
  {
    id: "repelente-liquido",
    name: "Repelente líquido hidroalcohólico",
    category: "Repelentes",
    price: "$70",
    size: "60 ml",
    ingredient: "Fórmula hidroalcohólica",
    description: "Repelente de zancudos y moscos, tábanos.",
    benefits: [],
    page: 22,
    image: EMBLEM_URL,
    imageAlt: "Repelente líquido hidroalcohólico de 60 ml.",
    imageCaption: "Presentación oficial del PDF · 60 ml · $70 pesos",
    logoOnly: true,
  },
  {
    id: "repelente-crema",
    name: "Repelente en crema",
    category: "Repelentes",
    price: "$90",
    size: "60 ml",
    ingredient: "Fórmula en crema",
    description: "Repelente de zancudos y moscos, tábanos.",
    benefits: [],
    page: 22,
    image: EMBLEM_URL,
    imageAlt: "Repelente en crema de 60 ml.",
    imageCaption: "Presentación oficial del PDF · 60 ml · $90 pesos",
    logoOnly: true,
  },
];
const categories: Category[] = [
  "Todo",
  "Miel Melipona",
  "Jabones",
  "Cremas",
  "Cuidado capilar",
  "Propóleo",
  "Kits y regalos",
  "Repelentes",
];

function CategoryIcon({ category }: { category: Category }) {
  if (category === "Jabones") return <Sparkles size={17} strokeWidth={1.8} />;
  if (category === "Cremas") return <Flower2 size={17} strokeWidth={1.8} />;
  if (category === "Cuidado capilar") return <Flower2 size={17} strokeWidth={1.8} />;
  if (category === "Miel Melipona")
    return <Droplets size={17} strokeWidth={1.8} />;
  if (category === "Propóleo")
    return <Leaf size={17} strokeWidth={1.8} />;
  if (category === "Kits y regalos")
    return <PackageOpen size={17} strokeWidth={1.8} />;
  return <Hexagon size={17} strokeWidth={1.8} />;
}

const galleryCollections = [
  "Todas",
  "Jabones artesanales",
  "Cuidado facial y corporal",
  "Mieles y elixires",
  "Kits y regalos",
] as const;
type GalleryCollection = (typeof galleryCollections)[number];

type CatalogPhoto = {
  id: string;
  name: string;
  category: GalleryCollection;
  image: string;
  alt: string;
  note: string;
};

const catalogPhotos: CatalogPhoto[] = [
  { id: "img-8090", name: "Jabón de arroz base coco", category: "Jabones artesanales", image: ARROZ_SOAP_URL, alt: "Jabón de arroz base coco", note: "PDF oficial · 70 g · $70" },
  { id: "img-8097", name: "Jabón de leche de cabra y fresa champagne", category: "Jabones artesanales", image: STRAWBERRY_SOAP_URL, alt: "Jabón de leche de cabra y fresa champagne", note: "PDF oficial · 90 g · $90" },
  { id: "img-8103", name: "Jabón de tepezcohuite con miel de abejas Meliponas", category: "Jabones artesanales", image: TEPEZCOHUITE_SOAP_URL, alt: "Jabón de tepezcohuite con miel de abejas Meliponas", note: "PDF oficial · 100 g · $120" },
  { id: "img-8111", name: "Jabón de miel de abejas meliponas", category: "Jabones artesanales", image: HONEYCOMB_SOAP_URL, alt: "Jabón de miel de abejas meliponas", note: "PDF oficial · 100 g · $60" },
  { id: "img-8134", name: "Elixir de miel de abejas meliponas y cacao", category: "Mieles y elixires", image: MELIPONA_CACAO_30_URL, alt: "Elixir de miel de abejas meliponas y cacao", note: "PDF oficial · 30 ml · $260" },
  { id: "img-8139", name: "RCH crema regeneradora celular hidratante", category: "Cuidado facial y corporal", image: RCH_CREAM_URL, alt: "Crema RCH regeneradora celular hidratante", note: "PDF oficial · presentaciones de 30 a 250 g" },
  { id: "img-8163", name: "Propóleo con eucalipto", category: "Mieles y elixires", image: GALLERY_URLS.img8163, alt: "Propóleo con eucalipto", note: "PDF oficial · 25 ml · $180" },
  { id: "img-8167", name: "Multivitamínico de polen, propóleo y miel", category: "Mieles y elixires", image: EMBLEM_URL, alt: "Multivitamínico de polen, propóleo y miel", note: "PDF oficial · 200 g · $180" },
  { id: "turmeric-soap", name: "Jabón cúrcuma coco y miel de abejas meliponas", category: "Jabones artesanales", image: TURMERIC_SOAP_URL, alt: "Jabón cúrcuma coco y miel de abejas meliponas", note: "PDF oficial · 90 g · $90" },
  { id: "neem-honey-soap", name: "Jabón de neem base coco", category: "Jabones artesanales", image: NEEM_HONEY_SOAP_URL, alt: "Jabón de neem base coco", note: "PDF oficial · 70 g · $70" },
  { id: "kit-cartera", name: "Kit Cartera", category: "Kits y regalos", image: catalogPages.p05, alt: "Kit Cartera", note: "PDF oficial · $210" },
  { id: "kit-flor", name: "Kit Flor", category: "Kits y regalos", image: catalogPages.p11, alt: "Kit Flor", note: "PDF oficial · $90" },
];

type PresencePhoto = {
  id: string;
  title: string;
  category: "Tienda" | "Congresos y encuentros" | "Ferias y lugares";
  image: string | null;
  alt: string;
  note: string;
};

const presencePhotos: PresencePhoto[] = [
  {
    id: "tienda-xuumiel",
    title: "Tienda XUUMIEL",
    category: "Tienda",
    image: HERO_URL,
    alt: "Imagen de apoyo de la ruta de la miel XUUMIEL",
    note: "Aquí colocaremos las fotografías del espacio y punto de venta.",
  },
  {
    id: "congresos-encuentros",
    title: "Congresos y encuentros",
    category: "Congresos y encuentros",
    image: null,
    alt: "Espacio reservado para fotografías de congresos y encuentros",
    note: "Agregar aquí cada congreso, charla o encuentro en el que se participó.",
  },
  {
    id: "ferias-exposiciones",
    title: "Ferias y exposiciones",
    category: "Ferias y lugares",
    image: null,
    alt: "Espacio reservado para fotografías de ferias y exposiciones",
    note: "Un espacio para documentar la presencia de la marca en ferias y exposiciones.",
  },
  {
    id: "lugares-participacion",
    title: "Lugares donde hemos participado",
    category: "Ferias y lugares",
    image: ORIGIN_URL,
    alt: "Paisaje de Quintana Roo como imagen de apoyo territorial",
    note: "Iremos sumando cada lugar y la historia de la participación.",
  },
  {
    id: "talleres-comunidad",
    title: "Talleres y comunidad",
    category: "Congresos y encuentros",
    image: null,
    alt: "Espacio reservado para fotografías de talleres y actividades comunitarias",
    note: "Para registrar talleres, demostraciones y actividades con la comunidad.",
  },
  {
    id: "nuevas-participaciones",
    title: "Nuevas participaciones",
    category: "Ferias y lugares",
    image: null,
    alt: "Espacio reservado para nuevas participaciones de XUUMIEL y XUUJÁAB",
    note: "Esta tarjeta queda lista para agregar la próxima experiencia.",
  },
];

function GalleryCollectionIcon({
  collection,
}: {
  collection: GalleryCollection;
}) {
  if (collection === "Jabones artesanales")
    return <Sparkles size={17} strokeWidth={1.8} />;
  if (collection === "Cuidado facial y corporal")
    return <Flower2 size={17} strokeWidth={1.8} />;
  if (collection === "Mieles y elixires")
    return <Droplets size={17} strokeWidth={1.8} />;
  if (collection === "Kits y regalos")
    return <PackageOpen size={17} strokeWidth={1.8} />;
  return <Hexagon size={17} strokeWidth={1.8} />;
}

type ProductImageViewerProps = {
  product: Product;
};

type PointerPosition = {
  x: number;
  y: number;
};

const INITIAL_IMAGE_SCALE = 0.82;
const clampZoom = (value: number) => Math.min(4, Math.max(INITIAL_IMAGE_SCALE, value));

function ProductImageViewer({ product }: ProductImageViewerProps) {
  const [transform, setTransform] = useState({ scale: INITIAL_IMAGE_SCALE, x: 0, y: 0 });
  const pointers = useRef(new Map<number, PointerPosition>());
  const dragStart = useRef<{
    x: number;
    y: number;
    offsetX: number;
    offsetY: number;
  } | null>(null);
  const pinchStart = useRef<{ distance: number; scale: number } | null>(null);

  const resetView = () =>
    setTransform({ scale: INITIAL_IMAGE_SCALE, x: 0, y: 0 });
  const distanceBetween = (points: PointerPosition[]) => {
    const [first, second] = points;
    return Math.hypot(second.x - first.x, second.y - first.y);
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });

    if (pointers.current.size === 1) {
      dragStart.current = {
        x: event.clientX,
        y: event.clientY,
        offsetX: transform.x,
        offsetY: transform.y,
      };
    } else if (pointers.current.size === 2) {
      pinchStart.current = {
        distance: distanceBetween(Array.from(pointers.current.values())),
        scale: transform.scale,
      };
      dragStart.current = null;
    }
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!pointers.current.has(event.pointerId)) return;
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });

    if (pointers.current.size >= 2 && pinchStart.current) {
      const distance = distanceBetween(Array.from(pointers.current.values()));
      const scale = clampZoom(
        pinchStart.current.scale * (distance / pinchStart.current.distance),
      );
      setTransform(current => ({ ...current, scale }));
      return;
    }

    if (pointers.current.size === 1 && dragStart.current && transform.scale > 1) {
      setTransform(current => ({
        ...current,
        x: dragStart.current!.offsetX + event.clientX - dragStart.current!.x,
        y: dragStart.current!.offsetY + event.clientY - dragStart.current!.y,
      }));
    }
  };

  const handlePointerEnd = (event: React.PointerEvent<HTMLDivElement>) => {
    pointers.current.delete(event.pointerId);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    if (pointers.current.size < 2) pinchStart.current = null;
    if (pointers.current.size === 1) {
      const remaining = Array.from(pointers.current.values())[0];
      dragStart.current = {
        x: remaining.x,
        y: remaining.y,
        offsetX: transform.x,
        offsetY: transform.y,
      };
    } else {
      dragStart.current = null;
    }
  };

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    setTransform(current => ({
      ...current,
      scale: clampZoom(current.scale - event.deltaY * 0.001),
    }));
  };

  return (
    <div
      className={`product-dialog-visual ${product.isProductPhoto ? "is-product-photo" : ""}`}
      onDoubleClick={() =>
        setTransform(current =>
          current.scale > 1
            ? { scale: INITIAL_IMAGE_SCALE, x: 0, y: 0 }
            : { ...current, scale: 2 },
        )
      }
      onPointerCancel={handlePointerEnd}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerEnd}
      onWheel={handleWheel}
    >
      <img
        className="product-dialog-image"
        src={product.image}
        alt={product.imageAlt ?? `Imagen del catálogo para ${product.name}`}
        draggable="false"
        style={{
          transform: `translate3d(${transform.x}px, ${transform.y}px, 0) scale(${transform.scale})`,
        }}
      />
      {usesXuujaabBrand(product) && (
        <img
          className="product-dialog-watermark"
          src={XUUJAAB_URL}
          alt=""
          aria-hidden="true"
        />
      )}
      <button
        type="button"
        className="image-viewer-reset"
        onClick={resetView}
        onPointerDown={event => event.stopPropagation()}
        aria-label="Restablecer tamaño y posición de la imagen"
      >
        Restablecer vista
      </button>
      <span className="image-viewer-hint">Pellizca o arrastra para explorar</span>
      <span className="product-dialog-caption">
        {product.imageCaption ?? `Fuente: catálogo 2026 · p. ${product.page}`}
      </span>
    </div>
  );
}

function ProductCard({
  product,
  onOpen,
}: {
  product: Product;
  onOpen: (product: Product) => void;
}) {
  return (
    <button
      type="button"
      className="product-card group text-left"
      onClick={() => onOpen(product)}
      aria-label={`Ver detalles de ${product.name}`}
    >
      <div
        className={`product-visual ${product.isProductPhoto ? "is-product-photo" : ""} ${product.logoOnly ? "is-logo-only" : ""}`}
        >
          {product.logoOnly ? (
            <img
              className="product-logo-only"
              src={product.image}
              alt={product.imageAlt ?? "Logotipo XUUMIEL"}
            />
          ) : (
            <>
              <img
                src={product.image}
                alt={product.imageAlt ?? `Lámina del catálogo para ${product.name}`}
              />
              <div className="product-image-tint" />
              <img
                className={`product-watermark ${usesXuujaabBrand(product) ? "product-watermark-xuujaab" : ""}`}
                src={usesXuujaabBrand(product) ? XUUJAAB_URL : EMBLEM_URL}
                alt=""
                aria-hidden="true"
              />
            </>
          )}
          {product.page && <span className="page-chip">p. {product.page}</span>}
        {product.label && <span className="new-chip">{product.label}</span>}
        <span className="view-chip">
          Ver ficha <ArrowUpRight size={14} />
        </span>
      </div>
      <div className="product-copy">
        <p className="product-category">{displayCategoryName(product.category)}</p>
        <div className="product-heading-row">
          <h3>{product.name}</h3>
          <span className="product-price">
            {product.price}
            <small> MXN</small>
          </span>
        </div>
        <p className="product-ingredient">{product.ingredient}</p>
        <span className="product-size">{product.size}</span>
      </div>
    </button>
  );
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("Todo");
  const [selectedGalleryCollection, setSelectedGalleryCollection] =
    useState<GalleryCollection>("Todas");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [installPrompt, setInstallPrompt] = useState<InstallPromptEvent | null>(null);
  const [installHelpOpen, setInstallHelpOpen] = useState(false);
  const [isIosDevice, setIsIosDevice] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const handleBrowserBack = () => {
      setSelectedProduct(null);
      setMobileMenuOpen(false);
    };

    window.addEventListener("popstate", handleBrowserBack);
    return () => window.removeEventListener("popstate", handleBrowserBack);
  }, []);

  useEffect(() => {
    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (navigator as Navigator & { standalone?: boolean }).standalone === true;
    const userAgent = window.navigator.userAgent.toLowerCase();
    const ios =
      /iphone|ipad|ipod/.test(userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

    setIsInstalled(standalone);
    setIsIosDevice(ios && !standalone);

    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as InstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", () => {
      setInstallPrompt(null);
      setIsInstalled(true);
      setInstallHelpOpen(false);
    });

    return () =>
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
  }, []);

  const filteredProducts = useMemo(
    () =>
      selectedCategory === "Todo"
        ? products
        : products.filter(product => product.category === selectedCategory),
    [selectedCategory]
  );

  const filteredGalleryPhotos = useMemo(
    () =>
      selectedGalleryCollection === "Todas"
        ? catalogPhotos
        : catalogPhotos.filter(
            photo => photo.category === selectedGalleryCollection
          ),
    [selectedGalleryCollection]
  );

  const scrollToCatalog = () =>
    document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" });

  const openProduct = (product: Product) => {
    setSelectedProduct(product);
    window.history.pushState(
      { productId: product.id },
      "",
      `#producto-${product.id}`
    );
  };

  const closeProduct = () => {
    if (window.location.hash.startsWith("#producto-")) {
      window.history.back();
    } else {
      setSelectedProduct(null);
    }
  };

  const returnToMenu = () => {
    setSelectedProduct(null);
    setMobileMenuOpen(false);
    window.history.replaceState(null, "", "#inicio");
    document.getElementById("inicio")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleInstallStore = async () => {
    if (installPrompt) {
      await installPrompt.prompt();
      await installPrompt.userChoice;
      setInstallPrompt(null);
      setMobileMenuOpen(false);
      return;
    }

    setInstallHelpOpen(true);
  };

  return (
    <main className="page-shell">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>

      <header className="site-header">
        <a href="#inicio" className="brand-lockup" aria-label="XUUMIEL, inicio">
          <img
            className="brand-emblem"
            src={EMBLEM_URL}
            alt="Logotipo original XUUMIEL con pirámides"
          />
          <span className="brand-route">La Ruta de la Miel</span>
        </a>

        <div className="regional-mark" aria-label="Hecho en Quintana Roo">
          <img src={REGIONAL_LOGO_URL} alt="Hecho en Quintana Roo" />
        </div>

        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href="#origen">Conservación</a>
          <a href="#historia-cultura">Historia y cultura</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#catalogo">Colecciones</a>
          <a href="#galeria">Galería</a>
          <a href="#participaciones">Participaciones</a>
          <a href="#ritual">Rituales</a>
          <a href="#catalogo-pdf">Catálogo 2026</a>
        </nav>

        <a
          className="header-catalog-link"
          href={PDF_URL}
          target="_blank"
          rel="noreferrer"
        >
          Ver catálogo visual <ArrowUpRight size={16} />
        </a>
        <button
          type="button"
          className="mobile-menu-trigger"
          onClick={() => setMobileMenuOpen(open => !open)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        {mobileMenuOpen && (
          <nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Navegación móvil"
          >
            <a href="#origen" onClick={() => setMobileMenuOpen(false)}>
              Conservación
            </a>
            <a
              href="#historia-cultura"
              onClick={() => setMobileMenuOpen(false)}
            >
              Historia y cultura
            </a>
            <a href="#proyectos" onClick={() => setMobileMenuOpen(false)}>
              Proyectos
            </a>
            <a href="#catalogo" onClick={() => setMobileMenuOpen(false)}>
              Colecciones
            </a>
            <a href="#galeria" onClick={() => setMobileMenuOpen(false)}>
              Galería
            </a>
            <a href="#participaciones" onClick={() => setMobileMenuOpen(false)}>
              Participaciones
            </a>
            <a href="#ritual" onClick={() => setMobileMenuOpen(false)}>
              Rituales
            </a>
            {!isInstalled && (
              <button
                type="button"
                className="mobile-install-link"
                onClick={handleInstallStore}
              >
                <Download size={16} />
                {installPrompt
                  ? "Instalar tienda"
                  : isIosDevice
                    ? "Instalar en iPhone"
                    : "Añadir tienda al celular"}
              </button>
            )}
            <a
              href={PDF_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
            >
              Abrir catálogo visual
            </a>
          </nav>
        )}
      </header>

      {installHelpOpen && !isInstalled && (
        <div className="install-help" role="status">
          <div>
            <strong>Acceso directo a la tienda</strong>
            <p>
              {isIosDevice
                ? "En Safari toca Compartir y después “Añadir a pantalla de inicio”."
                : "En Chrome toca ⋮ y elige “Instalar aplicación” o “Añadir a pantalla de inicio”."}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setInstallHelpOpen(false)}
            aria-label="Cerrar instrucciones de instalación"
          >
            <X size={17} />
          </button>
        </div>
      )}

      {!isInstalled && (
        <button
          type="button"
          className="mobile-install-direct"
          onClick={handleInstallStore}
          aria-label="Instalar tienda XUUMIEL en el celular"
        >
          <Download size={15} /> Instalar tienda
        </button>
      )}

      <button
        type="button"
        className="mobile-return-menu"
        onClick={returnToMenu}
        aria-label="Regresar al menú principal"
      >
        <Menu size={15} /> Menú
      </button>

      <section
        id="inicio"
        className="hero-section"
        aria-labelledby="hero-title"
      >
        <video
          className="hero-background-video"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={HERO_URL}
          aria-hidden="true"
        >
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>
        <div className="hero-video-tint" aria-hidden="true" />
        <div className="hero-paper-grain" />
        <div className="hero-layout" id="contenido">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" /> Colección 2026 · Leona Vicario,
              Q. Roo
            </p>
            <h1 id="hero-title">
              Del taller de la <em>melipona</em> a tu ritual diario.
            </h1>
            <p className="hero-intro">
              La conservación y reproducción responsable de la abeja nativa{" "}
              <i>Melipona beecheii (sin aguijón)</i> es el propósito central. El catálogo
              reúne productos que ayudan a sostener esta ruta viva.
            </p>
            <div className="hero-actions">
              <button
                type="button"
                className="primary-action"
                onClick={scrollToCatalog}
              >
                Explorar colecciones <ArrowDown size={17} />
              </button>
              <a
                className="whatsapp-action"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Hacer un pedido por WhatsApp"
              >
                <MessageCircle size={17} /> Pedir por WhatsApp
              </a>
              <a className="text-action" href="#origen">
                Conocer la misión <ChevronRight size={17} />
              </a>
            </div>
            <div className="hero-footnotes">
              <span>
                <b>{categories.length - 1}</b> categorías
              </span>
              <span>
                <b>{products.length}</b> productos
              </span>
              <span>
                <b>100%</b> inspiración local
              </span>
            </div>
          </div>
          <div className="hero-scene" aria-hidden="true">
            <div className="scene-arch" />
            <div className="scene-caption">
              Mesa de taller
              <br />
              <span>Miel · botánica · oficio</span>
            </div>
            <img src={HERO_URL} alt="" />
            <div className="scene-stamp">
              <span>MR</span>
              <small>Quintana Roo</small>
            </div>
          </div>
        </div>
      </section>

      <section
        id="origen"
        className="origin-section"
        aria-labelledby="origin-title"
      >
        <div className="origin-visual">
          <img
            src={ORIGIN_URL}
            alt="Paisaje botánico de Quintana Roo con una caja de abejas artesanales"
          />
          <div className="origin-visual-caption">
            Conservación viva
            <br />
            <span>Melipona beecheii (sin aguijón) · Quintana Roo</span>
          </div>
        </div>
        <div className="origin-copy">
          <p className="eyebrow dark">
            <Leaf size={16} /> Propósito central
          </p>
          <h2 id="origin-title">Conservar a la abeja Melipona beecheii</h2>
          <div className="conservation-priority">
            <strong>Conservación y reproducción</strong>
            <span>
              de la abeja nativa <i>Melipona beecheii (sin aguijón)</i>
            </span>
          </div>
          <p>
            El objetivo primordial de XUUMIEL es contribuir a la conservación y
            reproducción responsable de las abejas nativas{" "}
            <i>Melipona beecheii (sin aguijón)</i>, respetando sus ciclos, su hábitat y los
            saberes que permiten cuidarlas en Quintana Roo.
          </p>
          <p>
            La cultura y la historia de las mujeres artesanas, el monte y el
            meliponario forman parte del contexto de esta misión y se documentan
            en el catálogo visual. Los productos reúnen esa ruta de cuidado sin
            sustituir el consejo de profesionales de la salud.
          </p>
          <a
            className="origin-link"
            href={PDF_URL}
            target="_blank"
            rel="noreferrer"
          >
            Ver cultura e historia en el catálogo <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="origin-marker" aria-hidden="true">
          <Hexagon size={24} />
          <span>16</span>
        </div>
      </section>

      <section
        id="historia-cultura"
        className="story-section"
        aria-labelledby="story-title"
      >
        <div className="story-heading">
          <div>
            <p className="eyebrow dark">
              <BookOpen size={16} /> Historia y cultura
            </p>
            <h2 id="story-title">
              Cuidar una abeja también es cuidar una forma de vida.
            </h2>
          </div>
          <p>
            La conservación de <i>Melipona beecheii (sin aguijón)</i> reúne naturaleza,
            memoria comunitaria y labor artesanal. Esta historia acompaña cada
            decisión del meliponario y cada pieza del catálogo.
          </p>
        </div>
        <div className="story-grid">
          <article className="story-card story-card-featured">
            <span className="story-number">01</span>
            <div>
              <p className="story-kicker">La especie</p>
              <h3>Una abeja nativa sin aguijón.</h3>
              <p>
                <i>Melipona beecheii (sin aguijón)</i> forma parte de la biodiversidad de la
                Península de Yucatán. Su cuidado exige conocer sus ritmos,
                proteger su entorno y mantener colonias sanas.
              </p>
            </div>
          </article>
          <article className="story-card">
            <span className="story-number">02</span>
            <div>
              <p className="story-kicker">El meliponario</p>
              <h3>El jobón guarda la memoria del nido.</h3>
              <p>
                Los jobones, troncos ahuecados que reproducen el nido natural,
                son espacios de observación y cuidado. Allí la reproducción se
                acompaña con respeto durante todo el año.
              </p>
            </div>
          </article>
          <article className="story-card">
            <span className="story-number">03</span>
            <div>
              <p className="story-kicker">El territorio</p>
              <h3>El monte sostiene la floración.</h3>
              <p>
                Conservar también significa cuidar las plantas y árboles nativos
                que alimentan a las abejas. La producción sigue los ciclos del
                monte y la cosecha solo ocurre cuando corresponde.
              </p>
            </div>
          </article>
          <article className="story-card">
            <span className="story-number">04</span>
            <div>
              <p className="story-kicker">Las artesanas</p>
              <h3>El saber se comparte con las manos.</h3>
              <p>
                Las mujeres artesanas de Leona Vicario mantienen viva la
                continuidad del oficio: aprender del meliponario, transformar lo
                cosechado y transmitir prácticas de higiene, seguridad y
                calidad.
              </p>
            </div>
          </article>
        </div>
        <div className="story-callout">
          <div className="story-callout-mark" aria-hidden="true">
            <Leaf size={20} />
          </div>
          <div>
            <strong>Conservar es reproducir, educar y proteger.</strong>
            <p>
              El catálogo y sus productos son una puerta de entrada a esta
              misión; el objetivo permanece en la especie nativa, su hábitat y
              las personas que la cuidan.
            </p>
          </div>
        </div>
      </section>

      <section
        id="proyectos"
        className="projects-section"
        aria-labelledby="projects-title"
      >
        <div className="projects-heading">
          <div>
            <p className="eyebrow">
              <Sparkles size={16} /> Proyectos en marcha
            </p>
            <h2 id="projects-title">La conservación ya está en movimiento.</h2>
          </div>
          <p>
            Después de la historia y la cultura vienen las acciones que ya
            estamos impulsando para proteger a la abeja nativa{" "}
            <i>Melipona beecheii (sin aguijón)</i> y sumar a más personas a esta ruta.
          </p>
        </div>
        <div className="projects-grid">
          <article className="project-card">
            <div className="project-card-top">
              <span>01</span>
              <b>En proceso</b>
            </div>
            <h3>
              Lograr un santuario de abejas nativas <i>Melipona beecheii (sin aguijón)</i>.
            </h3>
            <p>
              Trabajamos para hacer realidad un espacio dedicado a la
              conservación, reproducción y protección de estas abejas nativas,
              junto con el monte que sostiene su vida.
            </p>
          </article>
          <article className="project-card project-card-highlight">
            <div className="project-card-top">
              <span>02</span>
              <b>Comunidad activa</b>
            </div>
            <h3>
              Forma parte de la comunidad de abejer@s de{" "}
              <i>Melipona beecheii (sin aguijón)</i>.
            </h3>
            <p>
              La comunidad ya está funcionando. Contáctanos para agendar una
              cita y recibir los detalles para conocer, aprender y participar en
              el cuidado de la melipona.
            </p>
            <a
              className="project-contact-link"
              href="mailto:info@xuumiel.com?subject=Comunidad%20de%20abejer%40s%20Melipona%20beecheii"
            >
              Agendar una cita <ArrowUpRight size={16} />
            </a>
          </article>
        </div>
      </section>

      <section
        id="catalogo"
        className="catalog-section"
        aria-labelledby="catalog-title"
      >
        <div className="catalog-heading">
          <div>
            <p className="eyebrow dark">
              <span className="eyebrow-dot" /> Inventario de taller
            </p>
            <h2 id="catalog-title">Explora la colección.</h2>
          </div>
          <p>
            Selecciona una categoría para recorrer las fórmulas y abrir su ficha
            con datos, precio e imagen del catálogo original.
          </p>
        </div>

        <div
          className="category-strip"
          role="tablist"
          aria-label="Filtrar productos por categoría"
        >
          {categories.map(category => (
            <button
              type="button"
              key={category}
              role="tab"
              aria-selected={selectedCategory === category}
              className={`category-filter ${selectedCategory === category ? "is-active" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              <CategoryIcon category={category} />
              {displayCategoryName(category)}
              <span>
                {category === "Todo"
                  ? products.length
                  : products.filter(product => product.category === category)
                      .length}
              </span>
            </button>
          ))}
        </div>

        <div className="catalog-meta">
          <span>
            <span className="catalog-line" /> {filteredProducts.length} piezas
            disponibles para explorar
          </span>
          <span className="catalog-meta-note">Precios mostrados en MXN</span>
        </div>
        <div
          className="product-grid"
          role="tabpanel"
          aria-label={`Productos: ${selectedCategory}`}
        >
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onOpen={openProduct}
            />
          ))}
        </div>
      </section>

      <section
        id="galeria"
        className="photo-gallery-section"
        aria-labelledby="gallery-title"
      >
        <div className="gallery-heading">
          <div>
            <p className="eyebrow dark">
              <span className="eyebrow-dot" /> Archivo visual completo
            </p>
            <h2 id="gallery-title">Todas las presentaciones.</h2>
          </div>
          <p>
            Las 26 fotografías recibidas ya están publicadas en la página. Las
            imágenes identificadas se vinculan a su producto; las demás quedan
            visibles como nuevas presentaciones o pendientes de confirmar.
          </p>
        </div>
        <div
          className="gallery-filter-strip"
          role="tablist"
          aria-label="Filtrar imágenes por colección"
        >
          {galleryCollections.map(collection => (
            <button
              type="button"
              key={collection}
              role="tab"
              aria-selected={selectedGalleryCollection === collection}
              className={`category-filter gallery-filter ${selectedGalleryCollection === collection ? "is-active" : ""}`}
              onClick={() => setSelectedGalleryCollection(collection)}
            >
              <GalleryCollectionIcon collection={collection} />
              {collection}
              <span>
                {collection === "Todas"
                  ? catalogPhotos.length
                  : catalogPhotos.filter(photo => photo.category === collection)
                      .length}
              </span>
            </button>
          ))}
        </div>
        <div className="gallery-meta">
          <span>
            <span className="catalog-line" /> {filteredGalleryPhotos.length}{" "}
            imágenes en esta colección
          </span>
          <span className="gallery-meta-note">
            {catalogPhotos.length} imágenes de productos y kits
          </span>
        </div>
        <div className="photo-gallery-grid">
          {filteredGalleryPhotos.map(photo => (
            <figure className="gallery-photo-card" key={photo.id}>
              <div className="gallery-photo-visual">
                <img src={photo.image} alt={photo.alt} />
              </div>
              <figcaption>
                <p>{photo.category}</p>
                <h3>{photo.name}</h3>
                <span>{photo.note}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section
        id="participaciones"
        className="presence-section"
        aria-labelledby="presence-title"
      >
        <div className="presence-heading">
          <div>
            <p className="eyebrow dark">
              <BookOpen size={16} /> Tienda y trayectoria
            </p>
            <h2 id="presence-title">
              Un álbum para recordar dónde hemos estado.
            </h2>
          </div>
          <p>
            Aquí reuniremos fotografías de la tienda, congresos, ferias,
            talleres y todos los lugares donde XUUMIEL y XUUJÁAB han compartido
            su trabajo.
          </p>
        </div>
        <div className="presence-grid">
          {presencePhotos.map(photo => (
            <article
              className={`presence-card ${photo.image ? "has-image" : "is-placeholder"}`}
              key={photo.id}
            >
              <div className="presence-visual">
                {photo.image ? (
                  <img src={photo.image} alt={photo.alt} />
                ) : (
                  <div className="presence-placeholder" aria-hidden="true">
                    <span>Foto por agregar</span>
                    <small>JPG · PNG · WEBP</small>
                  </div>
                )}
                <span className="presence-index">
                  {String(presencePhotos.indexOf(photo) + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="presence-copy">
                <p>{photo.category}</p>
                <h3>{photo.title}</h3>
                <span>{photo.note}</span>
              </div>
            </article>
          ))}
        </div>
        <div className="presence-note">
          <Sparkles size={18} />
          <p>
            La sección queda lista para crecer: cada nueva fotografía puede
            llevar fecha, ciudad, nombre del evento y una breve historia.
          </p>
        </div>
      </section>

      <section
        id="ritual"
        className="ritual-section"
        aria-labelledby="ritual-title"
      >
        <div className="ritual-art">
          <img
            src={INGREDIENTS_URL}
            alt="Ingredientes botánicos de la colección sobre yute"
          />
          <div className="ritual-art-label">Ingrediente, oficio y cuidado</div>
        </div>
        <div className="ritual-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" /> Una forma de elegir
          </p>
          <h2 id="ritual-title">Tu ritual empieza con la fórmula adecuada.</h2>
          <div className="ritual-steps">
            <article>
              <span>01</span>
              <div>
                <h3>Encuentra tu textura</h3>
                <p>
                  Barras de jabón, cremas de rostro y cuellos, o mieles en
                  gotero para integrar a tu rutina.
                </p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>Conoce el ingrediente</h3>
                <p>
                  Revisa la mezcla que define cada pieza: miel melipona,
                  cúrcuma, neem, romero, cacao y más.
                </p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>Consulta la lámina</h3>
                <p>
                  Abre cada ficha para comparar tamaño, precio y la descripción
                  original de la colección 2026.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="kits-section" aria-labelledby="kits-title">
        <div className="kits-intro">
          <p className="eyebrow dark">
            <PackageOpen size={16} /> Ediciones preparadas
          </p>
          <h2 id="kits-title">Regalos hechos para quedarse.</h2>
          <p>
            Dos combinaciones del catálogo integran miel de bolsillo, texturas
            artesanales y fórmulas de la línea XUUJÁAB.
          </p>
          <button
            type="button"
            className="text-action dark-action"
            onClick={() => setSelectedCategory("Kits y regalos")}
          >
            Ver kits <ChevronRight size={17} />
          </button>
        </div>
        <div className="kit-cards">
          {products
            .filter(product => product.category === "Kits y regalos")
            .map((kit, index) => (
              <button
                type="button"
                className="kit-card"
                key={kit.id}
                onClick={() => openProduct(kit)}
              >
                <div className="kit-number">0{index + 1}</div>
                <div className="kit-preview">
                  <img
                    src={kit.image}
                    alt={`Lámina del catálogo para ${kit.name}`}
                  />
                </div>
                <p>Edición de regalo</p>
                <h3>{kit.name}</h3>
                <span>
                  {kit.price} MXN <ArrowUpRight size={15} />
                </span>
              </button>
            ))}
        </div>
      </section>

      <section
        id="catalogo-pdf"
        className="pdf-section"
        aria-labelledby="pdf-title"
      >
        <div className="pdf-copy">
          <div className="pdf-symbol" aria-hidden="true">
            <BookOpen size={29} />
          </div>
          <p className="eyebrow">Archivo de origen</p>
          <h2 id="pdf-title">
            Catálogo XUUMIEL y XUUJÁAB
            <br />
            <em>2026</em>
          </h2>
          <p>
            Consulta las láminas visuales de la edición compartida. Para
            precios, tamaños y fichas vigentes, toma como fuente principal el
            catálogo web actualizado.
          </p>
          <a
            className="primary-action pdf-action"
            href={PDF_URL}
            target="_blank"
            rel="noreferrer"
          >
            Abrir catálogo visual <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="pdf-stack" aria-hidden="true">
          <div className="pdf-sheet pdf-sheet-back">
            <img src={catalogPages.p18} alt="" />
          </div>
          <div className="pdf-sheet pdf-sheet-mid">
            <img src={catalogPages.p13} alt="" />
          </div>
          <a
            className="pdf-sheet pdf-sheet-front"
            href={PDF_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir el catálogo de XUUMIEL en PDF"
          >
            <img
              src={catalogPages.p04}
              alt="Portada de una lámina de jabones del catálogo XUUMIEL"
            />
            <span>
              Catálogo en PDF <ArrowUpRight size={16} />
            </span>
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <div className="footer-brand-logos">
            <img src={EMBLEM_URL} alt="Logotipo original XUUMIEL con pirámides" />
            <img
              className="footer-regional-logo"
              src={REGIONAL_LOGO_URL}
              alt="Hecho en Quintana Roo"
            />
          </div>
          <div>
            <small>Mieles de Quintana Roo México</small>
          </div>
        </div>
        <p>
          Catálogo web actualizado con los precios y presentaciones comunicados
          por la tienda. El PDF enlazado conserva la edición visual original y
          funciona como referencia de imágenes.
        </p>
        <div className="footer-links">
          <a href="#inicio">Volver arriba</a>
          <a href={PDF_URL} target="_blank" rel="noreferrer">
            Abrir PDF
          </a>
        </div>
      </footer>

      <Dialog
        open={Boolean(selectedProduct)}
        onOpenChange={open => !open && closeProduct()}
      >
        {selectedProduct && (
          <DialogContent className="product-dialog">
            <ProductImageViewer product={selectedProduct} />
            <div className="product-dialog-copy">
              <button
                type="button"
                className="product-menu-return"
                onClick={returnToMenu}
              >
                <Menu size={15} /> Regresar al menú
              </button>
              <DialogHeader>
                <p className="eyebrow dark">
                  <span className="eyebrow-dot" /> {displayCategoryName(selectedProduct.category)}
                </p>
                <DialogTitle>{selectedProduct.name}</DialogTitle>
                <DialogDescription>
                  {selectedProduct.description}
                </DialogDescription>
              </DialogHeader>
              <dl className="product-specs">
                <div>
                  <dt>Presentación</dt>
                  <dd>{selectedProduct.size}</dd>
                </div>
                <div>
                  <dt>Precio</dt>
                  <dd>
                    {selectedProduct.price} MXN
                    {selectedProduct.priceDetails && (
                      <>
                        <br />
                        <small>{selectedProduct.priceDetails}</small>
                      </>
                    )}
                  </dd>
                </div>
                <div>
                  <dt>Mezcla destacada</dt>
                  <dd>{selectedProduct.ingredient}</dd>
                </div>
              </dl>
              {selectedProduct.benefits &&
                selectedProduct.benefits.length > 0 && (
                  <div className="product-benefits">
                    <p className="product-benefits-title">
                      Beneficios y atributos
                    </p>
                    <ul>
                      {selectedProduct.benefits.map(benefit => (
                        <li key={benefit}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                )}
              {selectedProduct.usage && (
                <div className="product-usage">
                  <p className="product-benefits-title">Modo de uso</p>
                  <p>{selectedProduct.usage}</p>
                </div>
              )}
              <a
                className="product-source-link"
                href={PDF_URL}
                target="_blank"
                rel="noreferrer"
              >
                Abrir catálogo visual <ArrowUpRight size={16} />
              </a>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </main>
  );
}

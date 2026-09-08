/**
 * Diseño: Taller de Miel — editorial artesanal contemporáneo.
 * Principios del archivo: materias orgánicas, datos de producto claros, composición asimétrica y exploración tranquila.
 */
import { useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  ChevronRight,
  Droplets,
  Flower2,
  Hexagon,
  Leaf,
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
  const isManusPreview = hostname.endsWith(".manus.computer") || hostname.endsWith(".manus.space");
  return isManusPreview ? manusPath : publicUrl;
};

const PDF_URL = portableAsset("/manus-storage/CATALOGOXUUMIELYXUUJABABRIL2026actual08_73d4e109.pdf", "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/dNquuCIXxNBVwIFX.pdf");
const EMBLEM_URL = portableAsset("/manus-storage/logo-003_9c254216.png", "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/HIVsFmCyefRWqBvl.png");
const HERO_URL = portableAsset("/manus-storage/xuummiel-hero-melipona_8fd14543.jpg", "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/AVMZHgtozEmBgkBw.jpg");
const INGREDIENTS_URL = portableAsset("/manus-storage/xuummiel-ingredients-stilllife_fa1abc00.jpg", "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/LPPwmLxOTrbpkFxS.jpg");
const ORIGIN_URL = portableAsset("/manus-storage/xuummiel-origin-landscape_a262c213.jpg", "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/FxmqVvkyJSaIQvwZ.jpg");
const ARROZ_SOAP_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/vKdMIpvKquFkJYTN.png";
const TEPEZCOHUITE_SOAP_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/MsOZTjFDNADwnXdY.png";
const HONEYCOMB_SOAP_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/DdIYdkhuGAzvNQIX.png";
const NEEM_HONEY_SOAP_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/nVukVmcbTQxCpgtn.png";
const TURMERIC_SOAP_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/YeLrghWIlVrLcWdU.png";
const STRAWBERRY_SOAP_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/KTJzlUwgSbTFuXuM.png";
const RCH_CREAM_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/sABTLISpVCTBrjSM.png";
const HONEY_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/VkEKfdnqSiaFipIM.png";
const CACAO_ELIXIR_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/WhPQiQqlRzAaajOP.png";
const GALLERY_URLS = {
  img8090: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/FVjiYoRnRUOswewl.png",
  img8092: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/cjXqhYGENXHnNSSq.png",
  img8094: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/XncbeftxROyqSnSU.png",
  img8097: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/IbraseDUEzHLDVvZ.png",
  img8103: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/yHdJgNQqEyJbjCzN.png",
  img8105: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/SokZdvQlOIRrbxNA.png",
  img8111: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/iaVAwyMqheEVuhrG.png",
  img8115: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/JqqJWmQbuLLeDbPG.png",
  img8116: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/unzopUKhjvxvgdNU.png",
  img8134: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/eAfHqBTggGtYVuny.png",
  img8136: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/FCcSMVSoBoukJMSV.png",
  img8139: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/lVStLKQNIEkBTXKZ.png",
  img8141: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/XgBmlNTBkuUxDfPC.png",
  img8149: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/oQoFOOhWJEQeUlvP.png",
  img8158: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/gOZwFMgbmADoRoVU.png",
  img8159: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/LiPgbsxrjpooUXfa.png",
  img8160: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/hlWxpNDpheDinwEC.png",
  img8161: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/UoVzqQLvAohzabTi.png",
  img8162: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/CmTOVoijXMjKgRRW.png",
  img8163: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/ECzpgLjrKCNVKmfR.png",
  img8167: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/CgeGQYnmuiRTHmeR.png",
  img8169: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/MCntVvPuNkpHMABQ.png",
  img8173: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/aKOGcxRygmNcGPRQ.png",
  beeSoap: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/tdPQCvHhwktiTsvU.png",
  turmericSoap: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/nrlTawmSqzKJDjpK.png",
  neemHoneySoap: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/tHPfKyyWZZqrrwZs.png",
};

type Category = "Todo" | "Jabones" | "Cremas" | "Mieles y elixires" | "Kits";
type Collection = Exclude<Category, "Todo">;

type Product = {
  id: string;
  name: string;
  category: Collection;
  price: string;
  size: string;
  ingredient: string;
  description: string;
  page: number;
  image: string;
  imageAlt?: string;
  imageCaption?: string;
  isProductPhoto?: boolean;
  label?: string;
};

const catalogPages = {
  p04: portableAsset("/manus-storage/xuummiel-catalog-page-04_d095c64d.png", "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/PNViugmhcGcNYVxx.png"),
  p05: portableAsset("/manus-storage/xuummiel-catalog-page-05_dc876275.png", "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/PpYlgCwGDtaLjFfv.png"),
  p06: portableAsset("/manus-storage/xuummiel-catalog-page-06_6174ce39.png", "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/jJPUKRRhYKQjhjoD.png"),
  p07: portableAsset("/manus-storage/xuummiel-catalog-page-07_12569439.png", "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/AXtdAXpHJllgByJp.png"),
  p08: portableAsset("/manus-storage/xuummiel-catalog-page-08_914ee607.png", "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/snoOqknWbpcAQGGx.png"),
  p09: portableAsset("/manus-storage/xuummiel-catalog-page-09_b8ad9de0.png", "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/HfHzsHotxKBdnkHp.png"),
  p10: portableAsset("/manus-storage/xuummiel-catalog-page-10_27bc1928.png", "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/BWmEukEdLcyVgwgt.png"),
  p11: portableAsset("/manus-storage/xuummiel-catalog-page-11_3486ac38.png", "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/mwXwfrjYriazpeqD.png"),
  p13: portableAsset("/manus-storage/xuummiel-catalog-page-13_f953b40b.png", "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/rKKuCXcXewshAdZZ.png"),
  p14: portableAsset("/manus-storage/xuummiel-catalog-page-14_9835353b.png", "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/guobMUgKXnkRiEiz.png"),
  p15: portableAsset("/manus-storage/xuummiel-catalog-page-15_54be5a09.png", "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/QDWEUpZtexsyzXxS.png"),
  p17: portableAsset("/manus-storage/xuummiel-catalog-page-17_e2bac427.png", "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/LIqmwCNzyDfwKxhW.png"),
  p18: portableAsset("/manus-storage/xuummiel-catalog-page-18_492f1910.png", "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032049309/LNHcNELnjnDwXSev.png"),
};

const products: Product[] = [
  {
    id: "arroz",
    name: "Jabón de arroz",
    category: "Jabones",
    price: "$70",
    size: "70 g",
    ingredient: "Arroz · coco",
    description: "El catálogo lo presenta como una barra exfoliante y suavizante que acompaña a un tono de piel uniforme.",
    page: 4,
    image: ARROZ_SOAP_URL,
    imageAlt: "Jabón artesanal de arroz base coco con etiqueta XUUJÁAB.",
    imageCaption: "Foto de producto sin fondo · ficha catálogo 2026 · p. 4",
    isProductPhoto: true,
  },
  {
    id: "avena",
    name: "Jabón de avena",
    category: "Jabones",
    price: "$50",
    size: "70 g",
    ingredient: "Avena",
    description: "Una opción de la línea XUUJÁAB indicada en el catálogo para piel normal y grasa.",
    page: 4,
    image: catalogPages.p04,
  },
  {
    id: "tepezcohuite",
    name: "Jabón de tepezcohuite",
    category: "Jabones",
    price: "$120",
    size: "100 g",
    ingredient: "Tepezcohuite · miel melipona",
    description: "Barra de tepezcohuite con miel de abejas meliponas, descrita en el catálogo como parte de un ritual de cuidado artesanal.",
    page: 5,
    image: TEPEZCOHUITE_SOAP_URL,
    imageAlt: "Jabón artesanal oscuro de tepezcohuite con miel de abejas meliponas.",
    imageCaption: "Foto de producto sin fondo · ficha catálogo 2026 · p. 5",
    isProductPhoto: true,
  },
  {
    id: "miel-madera",
    name: "Jabón de miel melipona",
    category: "Jabones",
    price: "$60",
    size: "100 g",
    ingredient: "Miel melipona · aroma madera",
    description: "Una barra refrescante con aroma a madera, inspirada en las materias del taller y la colmena.",
    page: 6,
    image: HONEYCOMB_SOAP_URL,
    imageAlt: "Jabón artesanal de miel con relieve de panal y una pequeña abeja.",
    imageCaption: "Foto de producto sin fondo · ficha catálogo 2026 · p. 6",
    isProductPhoto: true,
  },
  {
    id: "neem",
    name: "Jabón de neem",
    category: "Jabones",
    price: "$70",
    size: "70 g",
    ingredient: "Neem · coco",
    description: "El catálogo propone esta fórmula de neem base coco como una opción suavizante para piel seca.",
    page: 7,
    image: NEEM_HONEY_SOAP_URL,
    imageAlt: "Jabón artesanal de neem y miel de abejas meliponas con etiqueta verde.",
    imageCaption: "Foto de producto sin fondo · ficha catálogo 2026 · p. 7",
    isProductPhoto: true,
  },
  {
    id: "curcuma",
    name: "Jabón de cúrcuma",
    category: "Jabones",
    price: "$90",
    size: "90 g",
    ingredient: "Cúrcuma · coco · miel melipona",
    description: "Fórmula de cúrcuma, coco y miel de abejas meliponas. Consulta la lámina original para sus beneficios descritos.",
    page: 8,
    image: TURMERIC_SOAP_URL,
    imageAlt: "Jabón artesanal de cúrcuma con etiqueta XUUMIEL.",
    imageCaption: "Foto de producto sin fondo · ficha catálogo 2026 · p. 8",
    isProductPhoto: true,
    label: "Nuevo",
  },
  {
    id: "fresa",
    name: "Jabón fresa champagne",
    category: "Jabones",
    price: "$90",
    size: "90 g",
    ingredient: "Leche de cabra · fresa champagne",
    description: "Jabón de leche de cabra y miel de abejas meliponas en la fragancia fresa champagne.",
    page: 9,
    image: STRAWBERRY_SOAP_URL,
    imageAlt: "Jabón artesanal rosa de fresa champagne con etiqueta de producto.",
    imageCaption: "Foto de producto sin fondo · ficha catálogo 2026 · p. 9",
    isProductPhoto: true,
  },
  {
    id: "sabila",
    name: "Jabón de sábila menta",
    category: "Jabones",
    price: "$30",
    size: "80 g",
    ingredient: "Sábila · menta",
    description: "Una barra ligera y aromática que el catálogo asocia con suavidad y un perfil antioxidante.",
    page: 11,
    image: catalogPages.p11,
  },
  {
    id: "rch",
    name: "Crema regeneradora RCH",
    category: "Cremas",
    price: "desde $170",
    size: "30 · 60 · 120 · 250 g",
    ingredient: "Sésamo · miel melipona · colágeno",
    description: "Crema hidratante para rostro y cuello. El catálogo describe su enfoque antioxidante, hidratante y de cuidado diario.",
    page: 13,
    image: RCH_CREAM_URL,
    imageAlt: "Crema RCH regeneradora con semilla de sésamo, miel melipona y colágeno.",
    imageCaption: "Foto de producto sin fondo · ficha catálogo 2026 · p. 13",
    isProductPhoto: true,
  },
  {
    id: "rf",
    name: "Crema reafirmante RF",
    category: "Cremas",
    price: "$280",
    size: "50 g",
    ingredient: "Romero · miel melipona · vitamina E",
    description: "Crema de rostro y cuello con romero y vitamina E; el catálogo recomienda aplicarla por la noche.",
    page: 15,
    image: catalogPages.p15,
  },
  {
    id: "miel",
    name: "Miel de abejas meliponas",
    category: "Mieles y elixires",
    price: "desde $60",
    size: "5 · 10 · 15 · 20 · 30 · 50 ml",
    ingredient: "Miel de Melipona beecheii",
    description: "Presentaciones en vidrio oscuro. El catálogo reúne usos tradicionales y una referencia sobre su composición bioactiva.",
    page: 17,
    image: HONEY_URL,
    imageAlt: "Frasco artesanal de miel de abejas meliponas con tapa dorada.",
    imageCaption: "Foto de producto sin fondo · ficha catálogo 2026 · p. 17",
    isProductPhoto: true,
  },
  {
    id: "cacao",
    name: "Elixir de miel y cacao",
    category: "Mieles y elixires",
    price: "desde $260",
    size: "30 · 50 ml",
    ingredient: "Miel melipona · cacao",
    description: "Una mezcla de miel de abejas meliponas y cacao puro presentada en envases de cristal oscuro.",
    page: 18,
    image: CACAO_ELIXIR_URL,
    imageAlt: "Elixir artesanal de miel de abejas meliponas y cacao en frasco con gotero.",
    imageCaption: "Foto de producto sin fondo · ficha catálogo 2026 · p. 18",
    isProductPhoto: true,
  },
  {
    id: "kit-cartera",
    name: "Kit cartera",
    category: "Kits",
    price: "$210",
    size: "Edición de regalo",
    ingredient: "Tepezcohuite · yute · miel de bolsillo",
    description: "Incluye jabón de tepezcohuite, cartera hecha a mano en yute natural y gotero de miel de 5 ml.",
    page: 5,
    image: catalogPages.p05,
  },
  {
    id: "kit-flor",
    name: "Kit flor",
    category: "Kits",
    price: "$90",
    size: "Edición de regalo",
    ingredient: "Sábila · algodón · miel de bolsillo",
    description: "Incluye jabón de sábila, miel de bolsillo de 5 ml y una envoltura de tela de algodón.",
    page: 11,
    image: catalogPages.p11,
  },
];

const categories: Category[] = ["Todo", "Jabones", "Cremas", "Mieles y elixires", "Kits"];
const galleryCollections = [
  "Todas",
  "Jabones artesanales",
  "Cuidado facial y corporal",
  "Cuidado capilar",
  "Protección natural",
  "Mieles y elixires",
  "Kits y regalos",
] as const;
type GalleryCollection = typeof galleryCollections[number];

type CatalogPhoto = {
  id: string;
  name: string;
  category: GalleryCollection;
  image: string;
  alt: string;
  note: string;
};

const catalogPhotos: CatalogPhoto[] = [
  { id: "img-8090", name: "Jabón de arroz", category: "Jabones artesanales", image: GALLERY_URLS.img8090, alt: "Jabón artesanal de arroz base coco", note: "Producto identificado" },
  { id: "img-8092", name: "Jabón de panal y abeja", category: "Jabones artesanales", image: GALLERY_URLS.img8092, alt: "Jabón artesanal con relieve de panal y abeja", note: "Diseño recibido" },
  { id: "img-8094", name: "Jabón artesanal rosa", category: "Jabones artesanales", image: GALLERY_URLS.img8094, alt: "Jabón artesanal rosa con relieve de panal", note: "Variante por confirmar" },
  { id: "img-8097", name: "Jabón fresa champagne", category: "Jabones artesanales", image: GALLERY_URLS.img8097, alt: "Jabón artesanal rosa de fresa champagne", note: "Producto identificado" },
  { id: "img-8103", name: "Jabón de tepezcohuite", category: "Jabones artesanales", image: GALLERY_URLS.img8103, alt: "Jabón oscuro de tepezcohuite", note: "Producto identificado" },
  { id: "img-8105", name: "Jabón de tepezcohuite · vista alternativa", category: "Jabones artesanales", image: GALLERY_URLS.img8105, alt: "Vista alternativa del jabón de tepezcohuite", note: "Vista complementaria" },
  { id: "img-8111", name: "Jabón azul", category: "Jabones artesanales", image: GALLERY_URLS.img8111, alt: "Jabón artesanal azul", note: "Fórmula por identificar" },
  { id: "img-8115", name: "Jabón de lavanda y miel", category: "Jabones artesanales", image: GALLERY_URLS.img8115, alt: "Jabón artesanal de lavanda envuelto", note: "Producto nuevo" },
  { id: "img-8116", name: "Kit caja flor", category: "Kits y regalos", image: GALLERY_URLS.img8116, alt: "Caja de regalo con jabón en forma de flor y frasco con gotero", note: "Contenido por confirmar" },
  { id: "img-8134", name: "Elixir de miel y cacao", category: "Mieles y elixires", image: GALLERY_URLS.img8134, alt: "Frasco con gotero del elixir de miel y cacao", note: "Producto identificado" },
  { id: "img-8136", name: "Repelente de neem", category: "Protección natural", image: GALLERY_URLS.img8136, alt: "Repelente de neem en atomizador", note: "Producto nuevo" },
  { id: "img-8139", name: "Crema RCH · vista lateral", category: "Cuidado facial y corporal", image: GALLERY_URLS.img8139, alt: "Crema RCH en envase con bomba", note: "Vista complementaria" },
  { id: "img-8141", name: "Crema regeneradora RCH", category: "Cuidado facial y corporal", image: GALLERY_URLS.img8141, alt: "Crema regeneradora RCH en envase con bomba", note: "Producto identificado" },
  { id: "img-8149", name: "Dúo de jabones", category: "Kits y regalos", image: GALLERY_URLS.img8149, alt: "Composición de dos jabones artesanales", note: "Composición por confirmar" },
  { id: "img-8158", name: "Shampoo preventivo de miel, romero y neem", category: "Cuidado capilar", image: GALLERY_URLS.img8158, alt: "Shampoo preventivo con miel, romero y neem", note: "Producto nuevo" },
  { id: "img-8159", name: "Shampoo mascarilla · presentación", category: "Cuidado capilar", image: GALLERY_URLS.img8159, alt: "Shampoo mascarilla de miel, romero y canela", note: "Producto identificado" },
  { id: "img-8160", name: "Shampoo mascarilla · reverso", category: "Cuidado capilar", image: GALLERY_URLS.img8160, alt: "Vista posterior del shampoo mascarilla", note: "Vista complementaria" },
  { id: "img-8161", name: "Shampoo mascarilla · frente", category: "Cuidado capilar", image: GALLERY_URLS.img8161, alt: "Vista frontal del shampoo mascarilla", note: "Vista complementaria" },
  { id: "img-8162", name: "Repelente de neem · vista", category: "Protección natural", image: GALLERY_URLS.img8162, alt: "Vista alternativa del repelente de neem", note: "Vista complementaria" },
  { id: "img-8163", name: "Propóleo con eucalipto", category: "Mieles y elixires", image: GALLERY_URLS.img8163, alt: "Atomizadores de propóleo", note: "Producto nuevo" },
  { id: "img-8167", name: "Mezcla apícola", category: "Mieles y elixires", image: GALLERY_URLS.img8167, alt: "Frasco abierto con mezcla apícola y cuchara", note: "Producto por identificar" },
  { id: "img-8169", name: "Hidromiel de la Selva", category: "Mieles y elixires", image: GALLERY_URLS.img8169, alt: "Botella de Hidromiel de la Selva", note: "Producto nuevo" },
  { id: "img-8173", name: "Miel de abejas meliponas", category: "Mieles y elixires", image: GALLERY_URLS.img8173, alt: "Frasco de miel de abejas meliponas con tapa dorada", note: "Producto identificado" },
  { id: "bee-soap", name: "Jabón diseño abeja", category: "Jabones artesanales", image: GALLERY_URLS.beeSoap, alt: "Jabón artesanal con diseño de abeja y panal", note: "Producto identificado" },
  { id: "turmeric-soap", name: "Jabón de cúrcuma", category: "Jabones artesanales", image: GALLERY_URLS.turmericSoap, alt: "Jabón artesanal de cúrcuma", note: "Producto identificado" },
  { id: "neem-honey-soap", name: "Jabón de neem y miel", category: "Jabones artesanales", image: GALLERY_URLS.neemHoneySoap, alt: "Jabón artesanal de neem y miel", note: "Producto identificado" },
];

function CategoryIcon({ category }: { category: Category }) {
  if (category === "Jabones") return <Sparkles size={17} strokeWidth={1.8} />;
  if (category === "Cremas") return <Flower2 size={17} strokeWidth={1.8} />;
  if (category === "Mieles y elixires") return <Droplets size={17} strokeWidth={1.8} />;
  if (category === "Kits") return <PackageOpen size={17} strokeWidth={1.8} />;
  return <Hexagon size={17} strokeWidth={1.8} />;
}

function GalleryCollectionIcon({ collection }: { collection: GalleryCollection }) {
  if (collection === "Jabones artesanales") return <Sparkles size={17} strokeWidth={1.8} />;
  if (collection === "Cuidado facial y corporal") return <Flower2 size={17} strokeWidth={1.8} />;
  if (collection === "Cuidado capilar") return <Leaf size={17} strokeWidth={1.8} />;
  if (collection === "Protección natural") return <Hexagon size={17} strokeWidth={1.8} />;
  if (collection === "Mieles y elixires") return <Droplets size={17} strokeWidth={1.8} />;
  if (collection === "Kits y regalos") return <PackageOpen size={17} strokeWidth={1.8} />;
  return <Hexagon size={17} strokeWidth={1.8} />;
}

function ProductCard({ product, onOpen }: { product: Product; onOpen: (product: Product) => void }) {
  return (
    <button
      type="button"
      className="product-card group text-left"
      onClick={() => onOpen(product)}
      aria-label={`Ver detalles de ${product.name}`}
    >
      <div className={`product-visual ${product.isProductPhoto ? "is-product-photo" : ""}`}>
        <img src={product.image} alt={product.imageAlt ?? `Lámina del catálogo para ${product.name}`} />
        <div className="product-image-tint" />
        <span className="page-chip">p. {product.page}</span>
        {product.label && <span className="new-chip">{product.label}</span>}
        <span className="view-chip">Ver ficha <ArrowUpRight size={14} /></span>
      </div>
      <div className="product-copy">
        <p className="product-category">{product.category}</p>
        <div className="product-heading-row">
          <h3>{product.name}</h3>
          <span className="product-price">{product.price}<small> MXN</small></span>
        </div>
        <p className="product-ingredient">{product.ingredient}</p>
        <span className="product-size">{product.size}</span>
      </div>
    </button>
  );
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("Todo");
  const [selectedGalleryCollection, setSelectedGalleryCollection] = useState<GalleryCollection>("Todas");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredProducts = useMemo(
    () => (selectedCategory === "Todo" ? products : products.filter((product) => product.category === selectedCategory)),
    [selectedCategory],
  );

  const filteredGalleryPhotos = useMemo(
    () => selectedGalleryCollection === "Todas" ? catalogPhotos : catalogPhotos.filter((photo) => photo.category === selectedGalleryCollection),
    [selectedGalleryCollection],
  );

  const scrollToCatalog = () => document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="page-shell">
      <a className="skip-link" href="#contenido">Saltar al contenido</a>

      <header className="site-header">
        <a href="#inicio" className="brand-lockup" aria-label="XUUMIEL, inicio">
          <img className="brand-emblem" src={EMBLEM_URL} alt="Logotipo original XUUMIEL con pirámides" />
        </a>

        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href="#origen">Origen</a>
          <a href="#catalogo">Colecciones</a>
          <a href="#galeria">Galería</a>
          <a href="#ritual">Rituales</a>
          <a href="#catalogo-pdf">Catálogo 2026</a>
        </nav>

        <a className="header-catalog-link" href={PDF_URL} target="_blank" rel="noreferrer">
          Ver PDF <ArrowUpRight size={16} />
        </a>
        <button
          type="button"
          className="mobile-menu-trigger"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        {mobileMenuOpen && (
          <nav id="mobile-navigation" className="mobile-nav" aria-label="Navegación móvil">
            <a href="#origen" onClick={() => setMobileMenuOpen(false)}>Origen</a>
            <a href="#catalogo" onClick={() => setMobileMenuOpen(false)}>Colecciones</a>
            <a href="#galeria" onClick={() => setMobileMenuOpen(false)}>Galería</a>
            <a href="#ritual" onClick={() => setMobileMenuOpen(false)}>Rituales</a>
            <a href={PDF_URL} target="_blank" rel="noreferrer" onClick={() => setMobileMenuOpen(false)}>Abrir PDF</a>
          </nav>
        )}
      </header>

      <section id="inicio" className="hero-section" aria-labelledby="hero-title">
        <div className="hero-paper-grain" />
        <div className="hero-layout" id="contenido">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> Colección 2026 · Leona Vicario, Q. Roo</p>
            <h1 id="hero-title">Del taller de la <em>melipona</em> a tu ritual diario.</h1>
            <p className="hero-intro">Jabones, cremas y mieles artesanales que reúnen ingredientes botánicos, oficio local y la riqueza de la Península de Yucatán.</p>
            <div className="hero-actions">
              <button type="button" className="primary-action" onClick={scrollToCatalog}>
                Explorar colecciones <ArrowDown size={17} />
              </button>
              <a className="text-action" href="#origen">Conocer el origen <ChevronRight size={17} /></a>
            </div>
            <div className="hero-footnotes">
              <span><b>4</b> líneas de cuidado</span>
              <span><b>14</b> fórmulas y kits</span>
              <span><b>100%</b> inspiración local</span>
            </div>
          </div>
          <div className="hero-scene" aria-hidden="true">
            <div className="scene-arch" />
            <div className="scene-caption">Mesa de taller<br /><span>Miel · botánica · oficio</span></div>
            <img src={HERO_URL} alt="" />
            <div className="scene-stamp"><span>MR</span><small>Quintana Roo</small></div>
          </div>
        </div>
      </section>

      <section id="origen" className="origin-section" aria-labelledby="origin-title">
        <div className="origin-visual">
          <img src={ORIGIN_URL} alt="Paisaje botánico de Quintana Roo con una caja de abejas artesanales" />
          <div className="origin-visual-caption">Origen peninsular<br /><span>La ruta de la miel</span></div>
        </div>
        <div className="origin-copy">
          <p className="eyebrow dark"><Leaf size={16} /> Materia local</p>
          <h2 id="origin-title">Miel que cuenta de dónde viene.</h2>
          <p>En XUUMIEL, la miel de abejas meliponas acompaña fórmulas para el cuidado cotidiano. La colección toma como punto de partida la tierra, los ingredientes y los ritmos de Quintana Roo.</p>
          <p>El catálogo cita evidencia sobre la composición bioactiva y capacidad antioxidante de la miel de <i>Melipona beecheii</i>; en esta web la celebramos como parte de una tradición viva, sin reemplazar el consejo de profesionales de la salud.</p>
          <a className="origin-link" href={PDF_URL} target="_blank" rel="noreferrer">
            Leer la nota de origen en el catálogo <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="origin-marker" aria-hidden="true"><Hexagon size={24} /><span>16</span></div>
      </section>

      <section id="catalogo" className="catalog-section" aria-labelledby="catalog-title">
        <div className="catalog-heading">
          <div>
            <p className="eyebrow dark"><span className="eyebrow-dot" /> Inventario de taller</p>
            <h2 id="catalog-title">Explora la colección.</h2>
          </div>
          <p>Selecciona una categoría para recorrer las fórmulas y abrir su ficha con datos, precio y lámina del catálogo original.</p>
        </div>

        <div className="category-strip" role="tablist" aria-label="Filtrar productos por categoría">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              role="tab"
              aria-selected={selectedCategory === category}
              className={`category-filter ${selectedCategory === category ? "is-active" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              <CategoryIcon category={category} />
              {category}
              <span>{category === "Todo" ? products.length : products.filter((product) => product.category === category).length}</span>
            </button>
          ))}
        </div>

        <div className="catalog-meta">
          <span><span className="catalog-line" /> {filteredProducts.length} piezas disponibles para explorar</span>
          <span className="catalog-meta-note">Precios mostrados en MXN</span>
        </div>
        <div className="product-grid" role="tabpanel" aria-label={`Productos: ${selectedCategory}`}>
          {filteredProducts.map((product) => <ProductCard key={product.id} product={product} onOpen={setSelectedProduct} />)}
        </div>
      </section>

      <section id="galeria" className="photo-gallery-section" aria-labelledby="gallery-title">
        <div className="gallery-heading">
          <div>
            <p className="eyebrow dark"><span className="eyebrow-dot" /> Archivo visual completo</p>
            <h2 id="gallery-title">Todas las presentaciones.</h2>
          </div>
          <p>Las 26 fotografías recibidas ya están publicadas en la página. Las imágenes identificadas se vinculan a su producto; las demás quedan visibles como nuevas presentaciones o pendientes de confirmar.</p>
        </div>
        <div className="gallery-filter-strip" role="tablist" aria-label="Filtrar imágenes por colección">
          {galleryCollections.map((collection) => (
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
              <span>{collection === "Todas" ? catalogPhotos.length : catalogPhotos.filter((photo) => photo.category === collection).length}</span>
            </button>
          ))}
        </div>
        <div className="gallery-meta"><span><span className="catalog-line" /> {filteredGalleryPhotos.length} imágenes en esta colección</span><span className="gallery-meta-note">26 imágenes publicadas</span></div>
        <div className="photo-gallery-grid">
          {filteredGalleryPhotos.map((photo) => (
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

      <section id="ritual" className="ritual-section" aria-labelledby="ritual-title">
        <div className="ritual-art">
          <img src={INGREDIENTS_URL} alt="Ingredientes botánicos de la colección sobre yute" />
          <div className="ritual-art-label">Ingrediente, oficio y cuidado</div>
        </div>
        <div className="ritual-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> Una forma de elegir</p>
          <h2 id="ritual-title">Tu ritual empieza con la fórmula adecuada.</h2>
          <div className="ritual-steps">
            <article>
              <span>01</span>
              <div><h3>Encuentra tu textura</h3><p>Barras de jabón, cremas de rostro y cuellos, o mieles en gotero para integrar a tu rutina.</p></div>
            </article>
            <article>
              <span>02</span>
              <div><h3>Conoce el ingrediente</h3><p>Revisa la mezcla que define cada pieza: miel melipona, cúrcuma, neem, romero, cacao y más.</p></div>
            </article>
            <article>
              <span>03</span>
              <div><h3>Consulta la lámina</h3><p>Abre cada ficha para comparar tamaño, precio y la descripción original de la colección 2026.</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="kits-section" aria-labelledby="kits-title">
        <div className="kits-intro">
          <p className="eyebrow dark"><PackageOpen size={16} /> Ediciones preparadas</p>
          <h2 id="kits-title">Regalos hechos para quedarse.</h2>
          <p>Dos combinaciones del catálogo integran miel de bolsillo, texturas artesanales y fórmulas de la línea XUUJÁAB.</p>
          <button type="button" className="text-action dark-action" onClick={() => setSelectedCategory("Kits")}>
            Ver kits <ChevronRight size={17} />
          </button>
        </div>
        <div className="kit-cards">
          {products.filter((product) => product.category === "Kits").map((kit, index) => (
            <button type="button" className="kit-card" key={kit.id} onClick={() => setSelectedProduct(kit)}>
              <div className="kit-number">0{index + 1}</div>
              <div className="kit-preview"><img src={kit.image} alt={`Lámina del catálogo para ${kit.name}`} /></div>
              <p>Edición de regalo</p>
              <h3>{kit.name}</h3>
              <span>{kit.price} MXN <ArrowUpRight size={15} /></span>
            </button>
          ))}
        </div>
      </section>

      <section id="catalogo-pdf" className="pdf-section" aria-labelledby="pdf-title">
        <div className="pdf-copy">
          <div className="pdf-symbol" aria-hidden="true"><BookOpen size={29} /></div>
          <p className="eyebrow">Archivo de origen</p>
          <h2 id="pdf-title">Catálogo XUUMIEL<br /><em>2026</em></h2>
          <p>Consulta las 26 páginas de la edición compartida, con descripciones y presentaciones completas de Mieles de Quintana Roo México.</p>
          <a className="primary-action pdf-action" href={PDF_URL} target="_blank" rel="noreferrer">
            Abrir catálogo completo <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="pdf-stack" aria-hidden="true">
          <div className="pdf-sheet pdf-sheet-back"><img src={catalogPages.p18} alt="" /></div>
          <div className="pdf-sheet pdf-sheet-mid"><img src={catalogPages.p13} alt="" /></div>
          <a className="pdf-sheet pdf-sheet-front" href={PDF_URL} target="_blank" rel="noreferrer" aria-label="Abrir el catálogo de XUUMIEL en PDF">
            <img src={catalogPages.p04} alt="Portada de una lámina de jabones del catálogo XUUMIEL" />
            <span>Catálogo en PDF <ArrowUpRight size={16} /></span>
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <img src={EMBLEM_URL} alt="Logotipo original XUUMIEL con pirámides" />
          <div><small>Mieles de Quintana Roo México</small></div>
        </div>
        <p>Catálogo promocional elaborado a partir de la edición 2026 proporcionada. Los usos y beneficios se muestran como referencias de la fuente original.</p>
        <div className="footer-links">
          <a href="#inicio">Volver arriba</a>
          <a href={PDF_URL} target="_blank" rel="noreferrer">Abrir PDF</a>
        </div>
      </footer>

      <Dialog open={Boolean(selectedProduct)} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        {selectedProduct && (
          <DialogContent className="product-dialog">
            <div className={`product-dialog-visual ${selectedProduct.isProductPhoto ? "is-product-photo" : ""}`}>
              <img src={selectedProduct.image} alt={selectedProduct.imageAlt ?? `Lámina del catálogo para ${selectedProduct.name}`} />
              <span>{selectedProduct.imageCaption ?? `Fuente: catálogo 2026 · p. ${selectedProduct.page}`}</span>
            </div>
            <div className="product-dialog-copy">
              <DialogHeader>
                <p className="eyebrow dark"><span className="eyebrow-dot" /> {selectedProduct.category}</p>
                <DialogTitle>{selectedProduct.name}</DialogTitle>
                <DialogDescription>{selectedProduct.description}</DialogDescription>
              </DialogHeader>
              <dl className="product-specs">
                <div><dt>Presentación</dt><dd>{selectedProduct.size}</dd></div>
                <div><dt>Precio</dt><dd>{selectedProduct.price} MXN</dd></div>
                <div><dt>Mezcla destacada</dt><dd>{selectedProduct.ingredient}</dd></div>
              </dl>
              <a className="product-source-link" href={PDF_URL} target="_blank" rel="noreferrer">
                Abrir catálogo completo <ArrowUpRight size={16} />
              </a>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </main>
  );
}

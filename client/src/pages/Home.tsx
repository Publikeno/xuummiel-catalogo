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

type Category =
  | "Todo"
  | "Miel Melipona"
  | "Jabones"
  | "Cremas"
  | "Multivitamínicos"
  | "Propóleo"
  | "Hidromiel"
  | "Miel Apis"
  | "Cacao"
  | "Kits y regalos"
  | "Estropajos";
type Collection = Exclude<Category, "Todo">;

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
  page: number | null;
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
    id: "melipona-10",
    name: "Miel Melipona Beecheii · gotero de 10 ml",
    category: "Miel Melipona",
    price: "$130",
    size: "10 ml",
    ingredient: "Miel Melipona Beecheii",
    description: "Miel Melipona Beecheii en un gotero compacto, ideal para regalo, degustación o consumo personal.",
    benefits: ["Sabor y aroma característicos de la miel Melipona", "Presentación práctica para llevar o regalar", "Producto de identidad y tradición de Quintana Roo"],
    page: null,
    image: HONEY_URL,
    imageAlt: "Gotero de miel de abejas meliponas Beecheii.",
    imageCaption: "Foto de referencia de la línea Melipona · presentación de 10 ml por confirmar",
  },
  {
    id: "melipona-20",
    name: "Miel Melipona Beecheii · gotero de 20 ml",
    category: "Miel Melipona",
    price: "$230",
    size: "20 ml",
    ingredient: "Miel Melipona Beecheii",
    description: "Miel Melipona Beecheii en una presentación intermedia para consumo personal o regalo turístico.",
    benefits: ["Miel de sabor distintivo y producción local", "Formato fácil de transportar", "Presentación adecuada para obsequio o degustación"],
    page: null,
    image: HONEY_URL,
    imageAlt: "Gotero de miel de abejas meliponas Beecheii.",
    imageCaption: "Foto de referencia de la línea Melipona · presentación de 20 ml por confirmar",
  },
  {
    id: "melipona-30",
    name: "Miel Melipona Beecheii · gotero de 30 ml",
    category: "Miel Melipona",
    price: "$320",
    size: "30 ml · frasco redondo o cuadrado",
    ingredient: "Miel Melipona Beecheii · cristal oscuro",
    description: "Miel Melipona Beecheii disponible en dos formas de frasco de cristal oscuro: redondo y cuadrado.",
    benefits: ["Dos diseños de frasco para elegir", "Cristal oscuro con presentación artesanal", "Tamaño práctico para regalo o consumo personal"],
    page: null,
    image: HONEY_URL,
    imageAlt: "Frasco de miel de abejas meliponas Beecheii.",
    imageCaption: "Foto de referencia de la línea Melipona · confirmar disponibilidad de ambas formas",
  },
  {
    id: "melipona-50",
    name: "Miel Melipona Beecheii · frasco cuadrado",
    category: "Miel Melipona",
    price: "$440",
    size: "50 ml · cristal cuadrado",
    ingredient: "Miel Melipona Beecheii · cristal oscuro",
    description: "Miel Melipona Beecheii en frasco de cristal cuadrado de 50 ml, una presentación distintiva para exhibición y regalo.",
    benefits: ["Diseño cuadrado que destaca en anaquel", "Presentación de cristal para regalo turístico", "Contenido práctico para degustación o consumo personal"],
    page: null,
    image: HONEY_URL,
    imageAlt: "Frasco cuadrado de miel de abejas meliponas Beecheii.",
    imageCaption: "Foto de referencia de la línea Melipona · frasco cuadrado de 50 ml por cargar",
  },
  {
    id: "melipona-estuche-50",
    name: "Miel Melipona Beecheii · estuche pirámide",
    category: "Kits y regalos",
    price: "$590",
    size: "Estuche de madera · frasco de 50 ml",
    ingredient: "Miel Melipona Beecheii · madera",
    description: "Presentación de Miel Melipona Beecheii en un estuche de madera con forma de pirámide, pensada para regalo.",
    benefits: ["Empaque de madera con alto valor de presentación", "Ideal para regalos turísticos y ocasiones especiales", "Combina producto local con una presentación artesanal"],
    page: null,
    image: catalogPages.p17,
    imageAlt: "Presentación artesanal de miel melipona para regalo.",
    imageCaption: "Foto de referencia de estuche pirámide · presentación de 50 ml por cargar",
  },
  {
    id: "melipona-estuche-600",
    name: "Miel Melipona Beecheii · estuche pirámide grande",
    category: "Kits y regalos",
    price: "$1,850",
    size: "Estuche de madera · presentación de 600 ml",
    ingredient: "Miel Melipona Beecheii · madera",
    description: "Presentación de mayor contenido de Miel Melipona Beecheii con estuche de madera en forma de pirámide.",
    benefits: ["Formato de mayor contenido para regalo especial", "Estuche de madera con identidad artesanal", "Presentación llamativa para visitantes y coleccionistas"],
    page: null,
    image: catalogPages.p17,
    imageAlt: "Presentación artesanal de miel melipona para regalo.",
    imageCaption: "Foto de referencia de estuche pirámide · confirmar contenido y fotografía de 600 ml",
  },
  {
    id: "jabon-coco-arroz",
    name: "Jabón artesanal de coco y arroz",
    category: "Jabones",
    price: "$77",
    size: "70 g",
    ingredient: "Coco · arroz",
    description: "Jabón artesanal elaborado con coco y arroz para una limpieza cotidiana con una sensación suave y cremosa.",
    benefits: ["Limpieza diaria de la piel", "Sensación suave y confortable durante el baño", "Alternativa artesanal para una rutina de cuidado personal"],
    page: 4,
    image: ARROZ_SOAP_URL,
    imageAlt: "Jabón artesanal de coco y arroz con etiqueta XUUJÁAB.",
    imageCaption: "Foto de producto · jabón de coco y arroz · presentación de 70 g",
    isProductPhoto: true,
  },
  {
    id: "jabon-neem",
    name: "Jabón artesanal de neem",
    category: "Jabones",
    price: "$77",
    size: "70 g",
    ingredient: "Neem",
    description: "Jabón artesanal de neem para complementar la higiene diaria con un ingrediente de origen botánico.",
    benefits: ["Limpieza cotidiana de la piel", "Aroma vegetal característico", "Propuesta de cuidado inspirada en ingredientes botánicos"],
    page: 7,
    image: NEEM_HONEY_SOAP_URL,
    imageAlt: "Jabón artesanal de neem.",
    imageCaption: "Foto de producto · jabón de neem · presentación de 70 g",
    isProductPhoto: true,
  },
  {
    id: "jabon-tepezcohuite",
    name: "Jabón artesanal de tepezcohuite",
    category: "Jabones",
    price: "$90",
    size: "100 g",
    ingredient: "Tepezcohuite",
    description: "Jabón artesanal de tepezcohuite para una rutina de limpieza inspirada en ingredientes de tradición mexicana.",
    benefits: ["Limpieza diaria de la piel", "Sensación de frescura después del baño", "Presentación artesanal con un ingrediente de identidad mexicana"],
    page: 5,
    image: TEPEZCOHUITE_SOAP_URL,
    imageAlt: "Jabón artesanal oscuro de tepezcohuite.",
    imageCaption: "Foto de producto · jabón de tepezcohuite · presentación de 100 g",
    isProductPhoto: true,
  },
  {
    id: "jabon-sabila-menta",
    name: "Jabón artesanal de sábila y menta",
    category: "Jabones",
    price: "$50",
    size: "80 g",
    ingredient: "Sábila · menta",
    description: "Jabón artesanal de sábila y menta para una experiencia de baño con sensación fresca y ligera.",
    benefits: ["Limpieza suave para el uso cotidiano", "Sensación refrescante por la menta", "Rutina de cuidado con ingredientes de origen vegetal"],
    page: 11,
    image: catalogPages.p11,
    imageAlt: "Jabón artesanal de sábila y menta.",
    imageCaption: "Lámina de producto · jabón de sábila y menta · presentación de 80 g",
  },
  {
    id: "jabon-avena",
    name: "Jabón artesanal de avena",
    category: "Jabones",
    price: "$37",
    size: "70 g",
    ingredient: "Avena",
    description: "Jabón artesanal de avena para una limpieza reconfortante dentro de una rutina de cuidado personal.",
    benefits: ["Limpieza delicada de la piel", "Sensación confortable durante el baño", "Opción artesanal para una rutina de cuidado suave"],
    page: 4,
    image: catalogPages.p04,
    imageAlt: "Jabón artesanal de avena.",
    imageCaption: "Lámina de producto · jabón de avena · presentación de 70 g",
  },
  {
    id: "jabon-curcuma",
    name: "Jabón artesanal de cúrcuma",
    category: "Jabones",
    price: "$70",
    size: "100 g",
    ingredient: "Cúrcuma",
    description: "Jabón artesanal de cúrcuma con una propuesta de cuidado inspirada en un ingrediente de uso tradicional.",
    benefits: ["Limpieza diaria de la piel", "Aroma y color característicos del ingrediente", "Presentación artesanal para una rutina de bienestar"],
    page: 8,
    image: TURMERIC_SOAP_URL,
    imageAlt: "Jabón artesanal de cúrcuma.",
    imageCaption: "Foto de producto · jabón de cúrcuma · presentación de 100 g",
    isProductPhoto: true,
  },
  {
    id: "jabon-leche-cabra",
    name: "Jabón artesanal de leche de cabra",
    category: "Jabones",
    price: "$77",
    size: "90 g",
    ingredient: "Leche de cabra",
    description: "Jabón artesanal de leche de cabra con una textura cremosa para acompañar la limpieza diaria.",
    benefits: ["Limpieza con sensación cremosa", "Rutina de cuidado confortable", "Alternativa artesanal para uso cotidiano"],
    page: 9,
    image: STRAWBERRY_SOAP_URL,
    imageAlt: "Jabón artesanal de leche de cabra.",
    imageCaption: "Foto de referencia de la línea de leche de cabra · presentación de 90 g por confirmar",
    isProductPhoto: true,
  },
  {
    id: "jabon-azul",
    name: "Jabón artesanal azul",
    category: "Jabones",
    price: "$50",
    size: "Barra · peso por confirmar",
    ingredient: "Fórmula por confirmar",
    description: "Jabón artesanal azul para integrar variedad y una presentación visual distintiva a la línea de cuidado personal.",
    benefits: ["Limpieza cotidiana", "Presentación visual diferenciada", "Opción para armar combinaciones de regalo"],
    page: null,
    image: GALLERY_URLS.img8111,
    imageAlt: "Jabón artesanal azul.",
    imageCaption: "Foto de producto · jabón azul · peso e ingredientes por confirmar",
    isProductPhoto: true,
  },
  {
    id: "jabon-lavanda",
    name: "Jabón artesanal de lavanda",
    category: "Jabones",
    price: "$60",
    size: "60 g",
    ingredient: "Lavanda",
    description: "Jabón artesanal de lavanda para una experiencia de baño aromática y agradable.",
    benefits: ["Limpieza diaria con aroma floral", "Sensación de relajación dentro de la rutina", "Ideal para integrar en kits de regalo"],
    page: null,
    image: GALLERY_URLS.img8115,
    imageAlt: "Jabón artesanal de lavanda.",
    imageCaption: "Foto de producto · jabón de lavanda · presentación de 60 g",
    isProductPhoto: true,
  },
  {
    id: "estuche-cedro",
    name: "Estuche de madera recuperada de cedro",
    category: "Kits y regalos",
    price: "$170",
    priceDetails: "Estuche vacío $170 · kit con 1 jabón y gotero Melipona de 10 ml $370",
    size: "20 cm ancho × 15 cm fondo × 9 cm alto",
    ingredient: "Madera recuperada de cedro · logotipo · grabado",
    description: "Estuche de madera recuperada de cedro, personalizable con logotipo, destinos de Quintana Roo y grabados para bodas.",
    benefits: ["Empaque reutilizable con identidad regional", "Personalizable para bodas y eventos", "Puede llevar nombres como Leona Vicario, Puerto Morelos, Cancún, Playa del Carmen, Cozumel o Tulum"],
    page: null,
    image: catalogPages.p05,
    imageAlt: "Estuche artesanal de madera para productos de miel y cuidado personal.",
    imageCaption: "Imagen de referencia del estuche · confirmar acabado y grabado",
  },
  {
    id: "crema-chrc-m",
    name: "CHRC M · Crema hidratante regeneradora celular",
    category: "Cremas",
    price: "desde $170",
    priceDetails: "30 g $170 · 60 g $320 · 100 g en lata $590 · 240 g con dispensador $1,170",
    size: "30 g · 60 g · 100 g en lata · 240 g con dispensador",
    ingredient: "Fórmula CHRC M · H/M",
    description: "Crema hidratante regeneradora celular CHRC M, disponible en presentaciones para hombre y mujer.",
    benefits: ["Hidratación para la rutina diaria de cuidado de la piel", "Sensación de piel suave y confortable", "Varias presentaciones para diferentes necesidades de uso"],
    page: 13,
    image: RCH_CREAM_URL,
    imageAlt: "Crema hidratante regeneradora celular CHRC M.",
    imageCaption: "Foto de producto · crema CHRC M · presentaciones por confirmar en la etiqueta",
    isProductPhoto: true,
  },
  {
    id: "crema-crve-r",
    name: "CRVE R · Crema reafirmante",
    category: "Cremas",
    price: "$290",
    size: "50 g",
    ingredient: "Vitamina E · romero",
    description: "Crema reafirmante CRVE R con vitamina E y romero para complementar una rutina de cuidado personal.",
    benefits: ["Aporta una experiencia de cuidado e hidratación", "Combina vitamina E y romero en la fórmula comunicada por la tienda", "Presentación práctica para uso personal"],
    page: 15,
    image: catalogPages.p15,
    imageAlt: "Crema reafirmante CRVE R con vitamina E y romero.",
    imageCaption: "Lámina de producto · crema CRVE R · presentación de 50 g",
  },
  {
    id: "compuesto-apis-polen-propoleo",
    name: "Compuesto de miel Apis, polen y propóleo",
    category: "Multivitamínicos",
    price: "$150",
    size: "180 g",
    ingredient: "Miel Apis · polen · propóleo",
    description: "Compuesto de ingredientes apícolas que combina miel Apis, polen y propóleo en una presentación de 180 gramos.",
    benefits: ["Combina tres ingredientes de la colmena", "Sabor y carácter propios de los productos apícolas", "Alternativa para una línea de bienestar de origen natural"],
    page: null,
    image: GALLERY_URLS.img8167,
    imageAlt: "Compuesto de miel Apis, polen y propóleo.",
    imageCaption: "Foto de referencia de la mezcla apícola · presentación de 180 g por cargar",
  },
  {
    id: "melipona-cacao-30",
    name: "Miel Melipona Beecheii con cacao",
    category: "Multivitamínicos",
    price: "$210",
    size: "30 g",
    ingredient: "Miel Melipona Beecheii · cacao",
    description: "Mezcla de Miel Melipona Beecheii y cacao que une el perfil floral de la miel con el carácter intenso del cacao.",
    benefits: ["Combina dos ingredientes de identidad regional", "Sabor intenso y distintivo", "Presentación atractiva para degustación o regalo"],
    page: null,
    image: CACAO_ELIXIR_URL,
    imageAlt: "Miel Melipona Beecheii con cacao.",
    imageCaption: "Foto de referencia de miel y cacao · presentación de 30 g por cargar",
    isProductPhoto: true,
  },
  {
    id: "cacao-puro-polvo",
    name: "Cacao puro en polvo",
    category: "Cacao",
    price: "$90",
    size: "200 g",
    ingredient: "Cacao puro",
    description: "Cacao puro en polvo para bebidas, repostería y preparaciones de cocina, con sabor profundo y aroma intenso.",
    benefits: ["Versátil para bebidas y recetas", "Sabor profundo y aroma característico a cacao", "Presentación práctica para consumo en casa"],
    page: null,
    image: INGREDIENTS_URL,
    imageAlt: "Cacao puro en polvo y otros ingredientes de la colección.",
    imageCaption: "Imagen de ingredientes · foto específica del cacao en polvo por cargar",
  },
  {
    id: "propoleo-eucalipto",
    name: "Propóleo con eucalipto",
    category: "Propóleo",
    price: "$180",
    size: "Presentación por confirmar",
    ingredient: "Propóleo · eucalipto de las hojas",
    description: "Propóleo combinado con eucalipto de las hojas, en una presentación de origen apícola y botánico.",
    benefits: ["Aroma herbal de eucalipto", "Producto de la colmena con identidad natural", "Adecuado para una línea de bienestar tradicional"],
    page: null,
    image: GALLERY_URLS.img8163,
    imageAlt: "Propóleo con eucalipto.",
    imageCaption: "Foto de producto · propóleo con eucalipto · contenido por confirmar",
    isProductPhoto: true,
  },
  {
    id: "hidromiel-360",
    name: "Hidromiel",
    category: "Hidromiel",
    price: "$110",
    size: "360 ml · botella oscura tipo cerveza",
    ingredient: "Miel fermentada · fórmula por confirmar",
    description: "Hidromiel en botella oscura de 360 ml con envase tipo cerveza, pensada para degustación y regalo.",
    benefits: ["Presentación lista para servir", "Envase oscuro con estética artesanal", "Producto distintivo para experiencias gastronómicas"],
    page: null,
    image: GALLERY_URLS.img8169,
    imageAlt: "Botella oscura de hidromiel.",
    imageCaption: "Foto de producto · hidromiel de 360 ml",
    isProductPhoto: true,
  },
  {
    id: "regalo-turistico",
    name: "Presentación regalo turístico",
    category: "Kits y regalos",
    price: "$250",
    priceDetails: "3 piezas $250 · 5 piezas $370",
    size: "Estuche de 3 o 5 piezas",
    ingredient: "Natural · jengibre · guanábana · piña · yaca · cacao · vainilla",
    description: "Selección de sabores para regalo turístico, disponible en estuches de tres o cinco piezas.",
    benefits: ["Variedad de sabores en un solo estuche", "Formato pensado para visitantes y obsequios", "Posibilidad de elegir combinaciones de sabores"],
    page: null,
    image: catalogPages.p05,
    imageAlt: "Presentación de regalo turístico con productos artesanales.",
    imageCaption: "Imagen de referencia de kit · confirmar composición de 3 y 5 piezas",
  },
  {
    id: "miel-apis-750",
    name: "Miel Apis · botella de cristal nueva",
    category: "Miel Apis",
    price: "$120",
    size: "750 g",
    ingredient: "Miel Apis",
    description: "Miel Apis —la miel regular— en botella de cristal nueva con contenido de 750 gramos.",
    benefits: ["Sabor tradicional de la miel Apis", "Cristal nuevo para una presentación limpia", "Tamaño familiar para consumo en casa"],
    page: null,
    image: HONEY_URL,
    imageAlt: "Botella de miel de abejas.",
    imageCaption: "Foto de referencia de miel · botella nueva de 750 g por cargar",
  },
  {
    id: "miel-apis-1kg",
    name: "Miel Apis · botella de cristal nueva",
    category: "Miel Apis",
    price: "$180",
    size: "1 kg",
    ingredient: "Miel Apis",
    description: "Miel Apis en botella de cristal nueva con contenido de un kilogramo para consumo familiar o reventa.",
    benefits: ["Presentación de mayor rendimiento", "Sabor tradicional de la miel regular", "Envase nuevo y listo para exhibición"],
    page: null,
    image: HONEY_URL,
    imageAlt: "Botella de miel de abejas.",
    imageCaption: "Foto de referencia de miel · botella nueva de 1 kg por cargar",
  },
  {
    id: "miel-apis-reciclada-360",
    name: "Miel Apis · botella reciclada de vino",
    category: "Miel Apis",
    price: "$70",
    size: "360 g",
    ingredient: "Miel Apis · vidrio reciclado",
    description: "Miel Apis en botella reciclada de vino, una alternativa con carácter artesanal y aprovechamiento de envases.",
    benefits: ["Reutilización de envases de vidrio", "Presentación artesanal y distintiva", "Tamaño práctico para regalo"],
    page: null,
    image: HONEY_URL,
    imageAlt: "Botella de miel Apis en presentación artesanal.",
    imageCaption: "Foto de referencia de miel · botella reciclada de 360 g por cargar",
  },
  {
    id: "miel-apis-reciclada-700",
    name: "Miel Apis · botella reciclada de vino",
    category: "Miel Apis",
    price: "$90",
    size: "700 g",
    ingredient: "Miel Apis · vidrio reciclado",
    description: "Miel Apis en botella reciclada de vino con contenido de 700 gramos, pensada para una presentación sostenible.",
    benefits: ["Aprovechamiento de vidrio reciclado", "Diseño con personalidad para anaquel", "Formato intermedio para hogar o regalo"],
    page: null,
    image: HONEY_URL,
    imageAlt: "Botella de miel Apis en presentación artesanal.",
    imageCaption: "Foto de referencia de miel · botella reciclada de 700 g por cargar",
  },
  {
    id: "miel-apis-reciclada-1kg",
    name: "Miel Apis · botella reciclada de vino",
    category: "Miel Apis",
    price: "$160",
    size: "1 kg",
    ingredient: "Miel Apis · vidrio reciclado",
    description: "Miel Apis en botella reciclada de vino con presentación de un kilogramo.",
    benefits: ["Mayor contenido en un envase reutilizado", "Presentación artesanal para venta o regalo", "Alternativa con enfoque de aprovechamiento de materiales"],
    page: null,
    image: HONEY_URL,
    imageAlt: "Botella de miel Apis en presentación artesanal.",
    imageCaption: "Foto de referencia de miel · botella reciclada de 1 kg por cargar",
  },
  {
    id: "miel-apis-reciclada-1300",
    name: "Miel Apis · botella reciclada de vino",
    category: "Miel Apis",
    price: "$200",
    size: "1.3 kg",
    ingredient: "Miel Apis · vidrio reciclado",
    description: "La presentación de mayor contenido de la línea de Miel Apis en botella reciclada de vino.",
    benefits: ["Formato familiar de alto contenido", "Envase reutilizado con identidad artesanal", "Ideal para clientes frecuentes o venta por volumen"],
    page: null,
    image: HONEY_URL,
    imageAlt: "Botella grande de miel Apis en presentación artesanal.",
    imageCaption: "Foto de referencia de miel · botella reciclada de 1.3 kg por cargar",
  },
  {
    id: "estropajo-ixtle",
    name: "Estropajo de ixtle",
    category: "Estropajos",
    price: "$15",
    size: "Pieza",
    ingredient: "Ixtle",
    description: "Estropajo de ixtle de fibra natural para complementar rutinas de baño y cuidado personal.",
    benefits: ["Fibra de origen natural", "Accesorio práctico para la rutina de baño", "Complemento ideal para jabones artesanales"],
    page: null,
    image: INGREDIENTS_URL,
    imageAlt: "Materiales naturales de la colección artesanal.",
    imageCaption: "Imagen de referencia · foto específica del estropajo de ixtle por cargar",
  },
  {
    id: "estropajo-arbol",
    name: "Estropajo de árbol",
    category: "Estropajos",
    price: "$50",
    size: "Pieza colgante con orilla de tela",
    ingredient: "Fibra de árbol · tela",
    description: "Estropajo de árbol con diseño colgante y orilla de tela, pensado para acompañar productos de cuidado personal.",
    benefits: ["Diseño colgante para facilitar el almacenamiento", "Complemento artesanal para el baño", "Puede combinarse con jabones y kits de regalo"],
    page: null,
    image: INGREDIENTS_URL,
    imageAlt: "Materiales naturales de la colección artesanal.",
    imageCaption: "Imagen de referencia · foto específica del estropajo de árbol por cargar",
  },
];

const categories: Category[] = [
  "Todo",
  "Miel Melipona",
  "Jabones",
  "Cremas",
  "Multivitamínicos",
  "Propóleo",
  "Hidromiel",
  "Miel Apis",
  "Cacao",
  "Kits y regalos",
  "Estropajos",
];

function CategoryIcon({ category }: { category: Category }) {
  if (category === "Jabones") return <Sparkles size={17} strokeWidth={1.8} />;
  if (category === "Cremas") return <Flower2 size={17} strokeWidth={1.8} />;
  if (category === "Miel Melipona" || category === "Miel Apis" || category === "Hidromiel") return <Droplets size={17} strokeWidth={1.8} />;
  if (category === "Multivitamínicos" || category === "Propóleo" || category === "Cacao") return <Leaf size={17} strokeWidth={1.8} />;
  if (category === "Kits y regalos") return <PackageOpen size={17} strokeWidth={1.8} />;
  if (category === "Estropajos") return <Sparkles size={17} strokeWidth={1.8} />;
  return <Hexagon size={17} strokeWidth={1.8} />;
}

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
        {product.page && <span className="page-chip">p. {product.page}</span>}
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
          <a href="#origen">Conservación</a>
          <a href="#historia-cultura">Historia y cultura</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#catalogo">Colecciones</a>
          <a href="#galeria">Galería</a>
          <a href="#ritual">Rituales</a>
          <a href="#catalogo-pdf">Catálogo 2026</a>
        </nav>

        <a className="header-catalog-link" href={PDF_URL} target="_blank" rel="noreferrer">
          Ver catálogo visual <ArrowUpRight size={16} />
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
            <a href="#origen" onClick={() => setMobileMenuOpen(false)}>Conservación</a>
            <a href="#historia-cultura" onClick={() => setMobileMenuOpen(false)}>Historia y cultura</a>
            <a href="#proyectos" onClick={() => setMobileMenuOpen(false)}>Proyectos</a>
            <a href="#catalogo" onClick={() => setMobileMenuOpen(false)}>Colecciones</a>
            <a href="#galeria" onClick={() => setMobileMenuOpen(false)}>Galería</a>
            <a href="#ritual" onClick={() => setMobileMenuOpen(false)}>Rituales</a>
            <a href={PDF_URL} target="_blank" rel="noreferrer" onClick={() => setMobileMenuOpen(false)}>Abrir catálogo visual</a>
          </nav>
        )}
      </header>

      <section id="inicio" className="hero-section" aria-labelledby="hero-title">
        <div className="hero-paper-grain" />
        <div className="hero-layout" id="contenido">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> Colección 2026 · Leona Vicario, Q. Roo</p>
            <h1 id="hero-title">Del taller de la <em>melipona</em> a tu ritual diario.</h1>
            <p className="hero-intro">La conservación y reproducción responsable de la abeja nativa <i>Melipona beecheii</i> es el propósito central. El catálogo reúne productos que ayudan a sostener esta ruta viva.</p>
            <div className="hero-actions">
              <button type="button" className="primary-action" onClick={scrollToCatalog}>
                Explorar colecciones <ArrowDown size={17} />
              </button>
              <a className="text-action" href="#origen">Conocer la misión <ChevronRight size={17} /></a>
            </div>
            <div className="hero-footnotes">
              <span><b>{categories.length - 1}</b> categorías</span>
              <span><b>{products.length}</b> productos</span>
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
          <div className="origin-visual-caption">Conservación viva<br /><span>Melipona beecheii · Quintana Roo</span></div>
        </div>
        <div className="origin-copy">
          <p className="eyebrow dark"><Leaf size={16} /> Propósito central</p>
          <h2 id="origin-title">Conservar la melipona es el propósito.</h2>
          <div className="conservation-priority">
            <strong>Conservación y reproducción</strong>
            <span>de la abeja nativa <i>Melipona beecheii</i></span>
          </div>
          <p>El objetivo primordial de XUUMIEL es contribuir a la conservación y reproducción responsable de las abejas nativas <i>Melipona beecheii</i>, respetando sus ciclos, su hábitat y los saberes que permiten cuidarlas en Quintana Roo.</p>
          <p>La cultura y la historia de las mujeres artesanas, el monte y el meliponario forman parte del contexto de esta misión y se documentan en el catálogo visual. Los productos reúnen esa ruta de cuidado sin sustituir el consejo de profesionales de la salud.</p>
          <a className="origin-link" href={PDF_URL} target="_blank" rel="noreferrer">
            Ver cultura e historia en el catálogo <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="origin-marker" aria-hidden="true"><Hexagon size={24} /><span>16</span></div>
      </section>

      <section id="historia-cultura" className="story-section" aria-labelledby="story-title">
        <div className="story-heading">
          <div>
            <p className="eyebrow dark"><BookOpen size={16} /> Historia y cultura</p>
            <h2 id="story-title">Cuidar una abeja también es cuidar una forma de vida.</h2>
          </div>
          <p>La conservación de <i>Melipona beecheii</i> reúne naturaleza, memoria comunitaria y trabajo artesanal. Esta historia acompaña cada decisión del meliponario y cada pieza del catálogo.</p>
        </div>
        <div className="story-grid">
          <article className="story-card story-card-featured">
            <span className="story-number">01</span>
            <div>
              <p className="story-kicker">La especie</p>
              <h3>Una abeja nativa sin aguijón.</h3>
              <p><i>Melipona beecheii</i> forma parte de la biodiversidad de la Península de Yucatán. Su cuidado exige conocer sus ritmos, proteger su entorno y mantener colonias sanas.</p>
            </div>
          </article>
          <article className="story-card">
            <span className="story-number">02</span>
            <div>
              <p className="story-kicker">El meliponario</p>
              <h3>El jobón guarda la memoria del nido.</h3>
              <p>Los jobones, troncos ahuecados que reproducen el nido natural, son espacios de observación y cuidado. Allí la reproducción se acompaña con respeto durante todo el año.</p>
            </div>
          </article>
          <article className="story-card">
            <span className="story-number">03</span>
            <div>
              <p className="story-kicker">El territorio</p>
              <h3>El monte sostiene la floración.</h3>
              <p>Conservar también significa cuidar las plantas y árboles nativos que alimentan a las abejas. La producción sigue los ciclos del monte y la cosecha solo ocurre cuando corresponde.</p>
            </div>
          </article>
          <article className="story-card">
            <span className="story-number">04</span>
            <div>
              <p className="story-kicker">Las artesanas</p>
              <h3>El saber se comparte con las manos.</h3>
              <p>Las mujeres artesanas de Leona Vicario mantienen viva la continuidad del oficio: aprender del meliponario, transformar lo cosechado y transmitir prácticas de higiene, seguridad y calidad.</p>
            </div>
          </article>
        </div>
        <div className="story-callout">
          <div className="story-callout-mark" aria-hidden="true"><Leaf size={20} /></div>
          <div>
            <strong>Conservar es reproducir, educar y proteger.</strong>
            <p>El catálogo y sus productos son una puerta de entrada a esta misión; el objetivo permanece en la especie nativa, su hábitat y las personas que la cuidan.</p>
          </div>
        </div>
      </section>

      <section id="proyectos" className="projects-section" aria-labelledby="projects-title">
        <div className="projects-heading">
          <div>
            <p className="eyebrow"><Sparkles size={16} /> Proyectos en marcha</p>
            <h2 id="projects-title">La conservación ya está en movimiento.</h2>
          </div>
          <p>Después de la historia y la cultura vienen las acciones que ya estamos impulsando para proteger a la abeja nativa <i>Melipona beecheii</i> y sumar a más personas a esta ruta.</p>
        </div>
        <div className="projects-grid">
          <article className="project-card">
            <div className="project-card-top"><span>01</span><b>En proceso</b></div>
            <h3>Lograr un santuario de abejas nativas <i>Melipona beecheii</i>.</h3>
            <p>Trabajamos para hacer realidad un espacio dedicado a la conservación, reproducción y protección de estas abejas nativas, junto con el monte que sostiene su vida.</p>
          </article>
          <article className="project-card project-card-highlight">
            <div className="project-card-top"><span>02</span><b>Comunidad activa</b></div>
            <h3>Forma parte de la comunidad de abejer@s de <i>Melipona beecheii</i>.</h3>
            <p>La comunidad ya está funcionando. Contáctanos para agendar una cita y recibir los detalles para conocer, aprender y participar en el cuidado de la melipona.</p>
            <a className="project-contact-link" href="mailto:info@xuumiel.com?subject=Comunidad%20de%20abejer%40s%20Melipona%20beecheii">Agendar una cita <ArrowUpRight size={16} /></a>
          </article>
        </div>
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
          <button type="button" className="text-action dark-action" onClick={() => setSelectedCategory("Kits y regalos")}>
            Ver kits <ChevronRight size={17} />
          </button>
        </div>
        <div className="kit-cards">
          {products.filter((product) => product.category === "Kits y regalos").map((kit, index) => (
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
          <p>Consulta las láminas visuales de la edición compartida. Para precios, tamaños y fichas vigentes, toma como fuente principal el catálogo web actualizado.</p>
          <a className="primary-action pdf-action" href={PDF_URL} target="_blank" rel="noreferrer">
            Abrir catálogo visual <ArrowUpRight size={17} />
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
        <p>Catálogo web actualizado con los precios y presentaciones comunicados por la tienda. El PDF enlazado conserva la edición visual original y funciona como referencia de imágenes.</p>
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
                <div><dt>Precio</dt><dd>{selectedProduct.price} MXN{selectedProduct.priceDetails && <><br /><small>{selectedProduct.priceDetails}</small></>}</dd></div>
                <div><dt>Mezcla destacada</dt><dd>{selectedProduct.ingredient}</dd></div>
              </dl>
              {selectedProduct.benefits && selectedProduct.benefits.length > 0 && (
                <div className="product-benefits">
                  <p className="product-benefits-title">Beneficios y atributos</p>
                  <ul>
                    {selectedProduct.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
                  </ul>
                </div>
              )}
              <a className="product-source-link" href={PDF_URL} target="_blank" rel="noreferrer">
                Abrir catálogo visual <ArrowUpRight size={16} />
              </a>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </main>
  );
}

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

const PDF_URL = "/manus-storage/CATALOGOXUUMIELYXUUJABABRIL2026actual08_73d4e109.pdf";
const EMBLEM_URL = "/manus-storage/logo-003_9c254216.png";
const HERO_URL = "/manus-storage/xuummiel-hero-melipona_8fd14543.jpg";
const INGREDIENTS_URL = "/manus-storage/xuummiel-ingredients-stilllife_fa1abc00.jpg";
const ORIGIN_URL = "/manus-storage/xuummiel-origin-landscape_a262c213.jpg";

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
  label?: string;
};

const catalogPages = {
  p04: "/manus-storage/xuummiel-catalog-page-04_d095c64d.png",
  p05: "/manus-storage/xuummiel-catalog-page-05_dc876275.png",
  p06: "/manus-storage/xuummiel-catalog-page-06_6174ce39.png",
  p07: "/manus-storage/xuummiel-catalog-page-07_12569439.png",
  p08: "/manus-storage/xuummiel-catalog-page-08_914ee607.png",
  p09: "/manus-storage/xuummiel-catalog-page-09_b8ad9de0.png",
  p10: "/manus-storage/xuummiel-catalog-page-10_27bc1928.png",
  p11: "/manus-storage/xuummiel-catalog-page-11_3486ac38.png",
  p13: "/manus-storage/xuummiel-catalog-page-13_f953b40b.png",
  p14: "/manus-storage/xuummiel-catalog-page-14_9835353b.png",
  p15: "/manus-storage/xuummiel-catalog-page-15_54be5a09.png",
  p17: "/manus-storage/xuummiel-catalog-page-17_e2bac427.png",
  p18: "/manus-storage/xuummiel-catalog-page-18_492f1910.png",
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
    image: catalogPages.p04,
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
    image: catalogPages.p05,
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
    image: catalogPages.p06,
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
    image: catalogPages.p07,
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
    image: catalogPages.p08,
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
    image: catalogPages.p09,
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
    image: catalogPages.p13,
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
    image: catalogPages.p17,
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
    image: catalogPages.p18,
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

function CategoryIcon({ category }: { category: Category }) {
  if (category === "Jabones") return <Sparkles size={17} strokeWidth={1.8} />;
  if (category === "Cremas") return <Flower2 size={17} strokeWidth={1.8} />;
  if (category === "Mieles y elixires") return <Droplets size={17} strokeWidth={1.8} />;
  if (category === "Kits") return <PackageOpen size={17} strokeWidth={1.8} />;
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
      <div className="product-visual">
        <img src={product.image} alt={`Lámina del catálogo para ${product.name}`} />
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
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredProducts = useMemo(
    () => (selectedCategory === "Todo" ? products : products.filter((product) => product.category === selectedCategory)),
    [selectedCategory],
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
            <div className="product-dialog-visual">
              <img src={selectedProduct.image} alt={`Lámina del catálogo para ${selectedProduct.name}`} />
              <span>Fuente: catálogo 2026 · p. {selectedProduct.page}</span>
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

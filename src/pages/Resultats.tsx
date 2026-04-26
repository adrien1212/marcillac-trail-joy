import { Download, FileText } from "lucide-react";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";

const resultats = [
  {
    title: "La Grande Nuçoise",
    subtitle: "17 km",
    pdfUrl: "/resultats-17km.pdf",
    accent: "bg-primary",
  },
  {
    title: "La Nuçoise",
    subtitle: "10 km",
    pdfUrl: "/resultats-10km.pdf",
    accent: "bg-secondary",
  },
  {
    title: "La Petite Nuçoise",
    subtitle: "5 km",
    pdfUrl: "/resultats-5km.pdf",
    accent: "bg-accent",
  },
];

const Resultats = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NavBar />

      <main className="flex-1 pt-32 pb-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-3">
              Classements
            </p>
            <h1 className="font-display text-5xl md:text-7xl text-foreground mb-4">
              Résultats des courses
            </h1>
            <p className="font-body text-lg text-muted-foreground">
              Retrouvez le PDF de chaque course, consultez-le directement en ligne
              ou téléchargez-le en un clic.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {resultats.map((resultat) => (
              <article
                key={resultat.title}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
              >
                <div className={`h-2 ${resultat.accent}`} />
                <div className="p-6 border-b border-border">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-display text-3xl text-foreground">
                        {resultat.title}
                      </p>
                      <p className="font-body text-muted-foreground text-lg">
                        {resultat.subtitle}
                      </p>
                    </div>
                    <FileText className="h-8 w-8 text-primary shrink-0" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="overflow-hidden rounded-xl border border-border bg-background">
                    <object
                      data={resultat.pdfUrl}
                      type="application/pdf"
                      className="h-[480px] w-full"
                    >
                      <div className="flex h-[480px] items-center justify-center p-6 text-center">
                        <p className="font-body text-muted-foreground">
                          La prévisualisation PDF n&apos;est pas disponible sur ce navigateur.
                        </p>
                      </div>
                    </object>
                  </div>

                  <div className="mt-6 flex justify-center">
                    <Button asChild size="lg" className="w-full sm:w-auto">
                      <a href={resultat.pdfUrl} download>
                        <Download className="h-4 w-4" />
                        Télécharger le PDF
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resultats;

import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Mentions Légales | Elisabeth Coach Holistique",
  description: "Mentions légales et conditions générales d'utilisation du site Elisabeth Coach Holistique."
};

export default function MentionsLegalesPage() {
  return (
    <main className="pt-32 pb-20 bg-background">
      <div className="container mx-auto px-4">
        {/* En-tête de page */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4">Informations</Badge>
          <h1 className="font-cormorant text-4xl md:text-5xl font-light mb-6">
            Mentions <span className="font-medium">Légales</span>
          </h1>
        </div>
        
        <div className="max-w-3xl mx-auto prose prose-stone">
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl font-medium mb-4">Éditeur du site</h2>
            <p>
              Le site Elisabeth Coach Holistique est édité par :<br />
              Elisabeth Dubois<br />
              Entreprise individuelle<br />
              SIRET : 123 456 789 00012<br />
              Adresse : 25 rue de la Sérénité, 75008 Paris<br />
              Email : contact@elisabethcoach.fr<br />
              Téléphone : +33 6 00 00 00 00
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl font-medium mb-4">Hébergement</h2>
            <p>
              Le site est hébergé par :<br />
              Société XYZ<br />
              Adresse : 123 rue de l'Hébergement, 75000 Paris<br />
              Téléphone : +33 1 00 00 00 00
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl font-medium mb-4">Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu présent sur le site Elisabeth Coach Holistique 
              (textes, images, vidéos, logos, design) est protégé par les lois relatives 
              à la propriété intellectuelle et est la propriété exclusive d'Elisabeth Dubois.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication, transmission, 
              exploitation, totale ou partielle du site ou de son contenu, sans autorisation 
              écrite préalable d'Elisabeth Dubois, est strictement interdite.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl font-medium mb-4">Protection des données personnelles</h2>
            <p>
              Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au 
              Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit 
              d'accès, de rectification, de suppression et d'opposition aux données personnelles 
              vous concernant.
            </p>
            <p>
              Les informations collectées via le formulaire de contact sont destinées uniquement 
              à Elisabeth Dubois pour répondre à vos demandes d'information. Elles ne sont 
              transmises à aucun tiers.
            </p>
            <p>
              Pour exercer vos droits, vous pouvez contacter Elisabeth Dubois par email à 
              contact@elisabethcoach.fr ou par courrier à l'adresse : 25 rue de la Sérénité, 
              75008 Paris.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl font-medium mb-4">Cookies</h2>
            <p>
              Le site Elisabeth Coach Holistique utilise des cookies à des fins de statistiques 
              de visite et d'amélioration de votre expérience utilisateur. Vous pouvez à tout 
              moment désactiver ces cookies en paramétrant votre navigateur.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl font-medium mb-4">Responsabilité</h2>
            <p>
              Les informations contenues sur ce site sont aussi précises que possible et le site 
              est régulièrement mis à jour. Toutefois, Elisabeth Dubois ne peut garantir l'exactitude, 
              la complétude et l'actualité des informations diffusées sur le site.
            </p>
            <p>
              Les informations présentes sur le site ont un caractère informatif et ne constituent 
              en aucun cas un avis médical ou un diagnostic. Elles ne remplacent pas une consultation 
              avec un professionnel de santé.
            </p>
          </section>
          
          <div className="text-center mt-14">
            <Link 
              href="/" 
              className="inline-block py-2 px-4 rounded-md border border-primary text-primary hover:bg-primary/5 transition-colors"
            >
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 
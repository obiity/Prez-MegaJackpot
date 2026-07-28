export function FAQ() {
  const faqs = [
    { q: "Comment les tirages sont-ils sécurisés ?", a: "Tous nos tirages sont effectués sous le contrôle strict d'un huissier de justice agréé, garantissant une transparence totale et l'équité pour tous les participants." },
    { q: "Puis-je acheter plusieurs tickets ?", a: "Oui, vous pouvez acheter autant de tickets que vous le souhaitez pour augmenter vos chances, dans la limite des stocks disponibles pour chaque tirage." },
    { q: "Comment suis-je informé si je gagne ?", a: "Les gagnants sont contactés directement par téléphone et par email. Les résultats sont également publiés sur notre site officiel après la validation de l'huissier." },
    { q: "Quelles sont les méthodes de paiement acceptées ?", a: "Nous acceptons les paiements par carte bancaire, Orange Money, Wave, et autres solutions de paiement mobile sécurisées." },
  ]

  return (
    <section className="py-24 bg-[var(--color-mj-blue-dark)] text-white" id="faq">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl mb-6">Questions Fréquentes</h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 transition-colors hover:bg-white/10">
              <h3 className="font-bold text-xl mb-3 text-[var(--color-mj-gold)]">{faq.q}</h3>
              <p className="text-blue-100/80 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

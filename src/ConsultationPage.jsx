import ComingSoonPage from './ComingSoonPage'

export default function ConsultationPage({ onNavigateHome, onNavigateContact }) {
  return (
    <ComingSoonPage
      badge="Launching Soon"
      title="Request a Consultation Coming Soon"
      subtitle="A dedicated consultation booking flow is on the way so you can schedule planning time with the RUMi team online."
      message="For now, the fastest path is to connect with us directly through the Contact page and tell us about your project."
      highlights={[
        { title: 'Project review', copy: 'Share your goals, scope, and preferred timeline.' },
        { title: 'Planning support', copy: 'We will help shape the right next steps for your build.' },
        { title: 'Fast response', copy: 'Reach our team now while booking is in progress.' },
      ]}
      primaryActionLabel="Contact Us"
      primaryActionOnClick={onNavigateContact}
      secondaryActionLabel="Back to Home"
      secondaryActionOnClick={onNavigateHome}
    />
  )
}
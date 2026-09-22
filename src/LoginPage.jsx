import ComingSoonPage from './ComingSoonPage'

export default function LoginPage({ onNavigateHome, onNavigateContact }) {
  return (
    <ComingSoonPage
      badge="Members Only"
      title="Login Portal Coming Soon"
      subtitle="We are putting the final pieces in place for secure client access, project updates, and account tools."
      message="If you need immediate help, our team is ready to assist you through the Contact page while the portal is being prepared."
      highlights={[
        { title: 'Secure access', copy: 'Protected sign-in for clients and partners.' },
        { title: 'Project updates', copy: 'Track progress and key milestones in one place.' },
        { title: 'Direct support', copy: 'Reach out now for assistance or next steps.' },
      ]}
      primaryActionLabel="Go to Contact"
      primaryActionOnClick={onNavigateContact}
      secondaryActionLabel="Back to Home"
      secondaryActionOnClick={onNavigateHome}
    />
  )
}
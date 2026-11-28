import type { View } from './views'

interface TutorialPageProps {
  onNavigate: (view: View) => void
}

// This site's own narrated tour (remade 2026-11-28 for cr.orcas.church, about eleven minutes: freestudy.bible has its
// own). The video file is too large for git: it lives in public/tutorial/ on the server only (see "Tutorial video" in
// CLAUDE.md). The poster and captions are committed.
function TutorialPage({ onNavigate }: TutorialPageProps) {
  return (
    <div className="welcome tutorial-page">
      <h1>Tutorial video</h1>
      <p>
        An eleven-minute tour of this site: logging in, reading, searching and listening to the Bible, the devotionals,
        the Celebrate Recovery lessons and guides, the lesson videos, testimonies and songs, the FAQ, the verse and
        devotional of the day and making your own verse cards, and your account: your picture, notes, lists of search
        results, daily emails and texts, playlists, My cards, My scheduled tasks, Conversations and the Prayer Wall. Press
        play to start; the button at the bottom right shows it full screen, and CC turns the captions on or off.
      </p>
      <video
        className="tutorial-video"
        controls
        preload="metadata"
        playsInline
        poster="/tutorial/poster.webp?v=2026-11-28"
        width={1920}
        height={1080}
      >
        <source src="/tutorial/bible-and-beyond-feature-tour.mp4?v=2026-11-28" type="video/mp4" />
        <track kind="captions" src="/tutorial/bible-and-beyond-feature-tour.en.vtt?v=2026-11-28" srcLang="en" label="English" />
        Your browser cannot play this video.{' '}
        <a href="/tutorial/bible-and-beyond-feature-tour.mp4?v=2026-11-28">Download it instead</a>.
      </video>
      <p>
        For more detail on any part of the site, with pictures, see the{' '}
        <button type="button" className="link-button" onClick={() => onNavigate('help')}>
          Help
        </button>{' '}
        page.
      </p>
    </div>
  )
}

export default TutorialPage

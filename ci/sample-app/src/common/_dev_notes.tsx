export const COMMIT_SHA = '%%COMMIT_SHA%%';

export const disclaimer: JSX.Element = (
  <>
    <div
      style={{
        lineHeight: '1.3rem',
        marginTop: '5px',
        padding: '5px 5px 5px 10px',
        // width: '500px',
        backgroundColor: 'lightsteelblue',
        fontFamily: 'calibri',
      }}
    >
      <h4 style={{ margin: 0 }}>DEVELOPER INFO</h4>
      Jonathan Cheng
      <br />
      <em>jcheng.deveng@gmail.com</em>
      <br />
      Github:{' '}
      <a
        target={'_blank'}
        href="https://github.com/jchengdev/"
        rel="noreferrer"
      >
        jchengdev
      </a>
      <br />
      Linkedin:{' '}
      <a
        target={'_blank'}
        href="https://www.linkedin.com/in/jonathan-cheng-12616a15/"
        rel="noreferrer"
      >
        https://www.linkedin.com/in/jonathan-cheng-12616a15/
      </a>
    </div>
    <br />
    <div
      style={{
        lineHeight: '1rem',
        fontSize: '12px',
      }}
    >
      <strong style={{ fontSize: '14px' }}>{'React Colors App'}</strong>
      <br />
      <br />
      This is a NextJS app converted from a React app (PWA), with some issues
      left.
      <br />
      Users can navigate through existing palettes (seeds), create own color
      palettes or
      <br />
      delete palettes (synced with localStorage).
      <br />
      <br />
      Components&apos; design:
      {
        <a
          target={'_blank'}
          href={'http://ci-cd-app-storybook.k8s-sample-gke.jchengdev.com'}
          rel="noreferrer"
        >
          Storybook
        </a>
      }
      <br />
      Original project by @ColtSteele:
      {
        <a
          target={'_blank'}
          href={'https://www.udemy.com/course/modern-react-bootcamp'}
          rel="noreferrer"
        >
          Udemy course
        </a>
      }
      <br />
      <br />
      <strong style={{ fontSize: '14px' }}>{'Possible Improvements'}</strong>
      <ul>
        <li>
          React 18 upgrade (implement &lt;Suspense&gt; for loading components)
        </li>
        <li>Revert background image (disabled due to memory leak issue)</li>
        <li>Emoji CSS too heavy</li>
        <li>Global CSS refactoring (some issues related to FOUC flickering)</li>
        <li>
          Page transitions (<em>react-transition-group</em> not implemented for
          page level)
        </li>
        <li>Change localStorage to cookies (current palettes)</li>
        <li>Add back-end support (saving palette feature)</li>
        <li>General CSS improvements</li>
        <li>Features, etc.</li>
      </ul>
    </div>
    <br />
  </>
);
